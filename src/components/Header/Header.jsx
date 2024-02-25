import { useEffect, useState } from 'react';
import { AuthModal } from 'components/AuthModal/AuthModal';
import { Login } from 'components/Auth/Login';
import { SignUp } from 'components/Auth/SignUp';
import {
  BtnAuth,
  BtnReg,
  HeaderBox,
  LogoBox,
  NavList,
  Navigation,
  StyledLink,
  UserSpan,
} from './Header.styled';
import SpriteIcons from '../../images/sprite.svg';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from 'components/firebase';

export const Header = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  const openLoginModal = () => {
    setLoginModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
    document.body.style.overflow = '';
  };

  const openRegisterModal = () => {
    setRegisterModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeRegisterModal = () => {
    setRegisterModalOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, user => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => listen();
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => console.log('success'))
      .catch(error => console.log(error));
  };

  return (
    <HeaderBox>
      <Navigation>

        <LogoBox>
          <svg width={28} height={28}>
            <use xlinkHref={`${SpriteIcons}#icon-ukraine`} />
          </svg>
          <span>LearnLingo</span>
        </LogoBox>

        <NavList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>

          <li>
            <StyledLink to="/teachers">Teachers</StyledLink>
          </li>

          {authUser && (
            <li>
              <StyledLink to="/favorites">Favorites</StyledLink>
            </li>
          )}
        </NavList>

        <div>
          {authUser ? (
              <>
                <UserSpan>{authUser.email}</UserSpan>
                <BtnAuth onClick={userSignOut}>
                  <span>Log out</span>
                  <svg width={20} height={20}>
                    <use xlinkHref={`${SpriteIcons}#icon-log-out`} />
                  </svg>
                </BtnAuth>
              </>
          ) : (
            <BtnAuth onClick={openLoginModal}>
              <svg width={20} height={20}>
                <use xlinkHref={`${SpriteIcons}#icon-log-in`} />
              </svg>
              <span>Log in</span>
            </BtnAuth>
          )}
          <BtnReg onClick={openRegisterModal}>Registration</BtnReg>

          <AuthModal isOpen={isLoginModalOpen} onRequestClose={closeLoginModal}>
            <Login />
          </AuthModal>

          <AuthModal
            isOpen={isRegisterModalOpen}
            onRequestClose={closeRegisterModal}
          >
            <SignUp />
          </AuthModal>
        </div>
      </Navigation>
    </HeaderBox>
  );
};
