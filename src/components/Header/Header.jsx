import { useEffect, useState } from 'react';
import { AuthModal } from 'components/Auth/AuthModal/AuthModal';
import { Login } from 'components/Auth/Login';
import { SignUp } from 'components/Auth/SignUp';
import {
  BtnAuth,
  BtnReg,
  HeaderBox,
  LogoBox,
  NavList,
  Navigation,
  RegBar,
  StyledLink,
  UserSpan,
} from './Header.styled';
import SpriteIcons from '../../images/sprite.svg';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import toast from 'react-hot-toast';

export const Header = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const openRegisterModal = () => {
    setRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setRegisterModalOpen(false);
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, user => {
      user ? setAuthUser(user) : setAuthUser(null);
    });
    return () => listen();
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(()=> toast.success('See you soon!', {
        duration: 5000,
        position: 'top-right',
        icon: '✌',
      }))
      .catch(error => toast.error(`Something went wrong! ${error}`, {
        duration: 5000,
        position: 'top-right',
      }));
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
                <svg width={20} height={20}>
                  <use xlinkHref={`${SpriteIcons}#icon-log-out`} />
                </svg>
                <span>Log out</span>
              </BtnAuth>
            </>
          ) : (
            <RegBar>
              <BtnAuth onClick={openLoginModal}>
                <svg width={20} height={20}>
                  <use xlinkHref={`${SpriteIcons}#icon-log-in`} />
                </svg>
                <span>Log in</span>
              </BtnAuth>
            <BtnReg onClick={openRegisterModal}>Registration</BtnReg>
            </RegBar>
          )}

          <AuthModal id='log' isOpen={isLoginModalOpen} onRequestClose={closeLoginModal}>
            <Login onRequestClose={closeLoginModal} />
          </AuthModal>

          <AuthModal
            id='reg'
            isOpen={isRegisterModalOpen}
            onRequestClose={closeRegisterModal}
          >
            <SignUp onRequestClose={closeRegisterModal} />
          </AuthModal>
        </div>
      </Navigation>
    </HeaderBox>
  );
};
