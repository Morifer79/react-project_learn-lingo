import { useState } from 'react';
import { AuthModal } from 'components/AuthModal/AuthModal';
import { Login } from 'components/Auth/Login';
import { SignUp } from 'components/Auth/SignUp';
import { AuthDetails } from 'components/Auth/AuthDetails';
import { BtnLog, BtnReg, HeaderBox, LogoBox, NavList, Navigation, StyledLink } from './Header.styled';
import SpriteIcons from '../../images/sprite.svg';

export const Header = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

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
          {/* {authUser && (
          <li>
            <StyledLink to="/favorites">Favorites</StyledLink>
          </li>
          )} */}
        </NavList>
        <div>
        <AuthDetails/>
          <BtnLog onClick={openLoginModal}>
            <svg width={20} height={20}>
              <use xlinkHref={`${SpriteIcons}#icon-log-in`} />
            </svg>
            <span>Log in</span>
          </BtnLog>
          <BtnReg onClick={openRegisterModal}>Registration</BtnReg>

          <AuthModal isOpen={isLoginModalOpen} onRequestClose={closeLoginModal}>
            <Login />
          </AuthModal>

          <AuthModal isOpen={isRegisterModalOpen} onRequestClose={closeRegisterModal}>
            <SignUp />
          </AuthModal>
        </div>
      </Navigation>
    </HeaderBox>
  );
};
