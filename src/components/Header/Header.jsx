import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { AuthModal } from 'components/AuthModal/AuthModal';
import { Login } from 'components/Auth/Login';
import { SignUp } from 'components/Auth/SignUp';
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
    <header>
      <nav>
        <>
          <svg width={28} height={28}>
            <use xlinkHref={`${SpriteIcons}#icon-ukraine`} />
          </svg>
          LearnLingo
        </>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/teachers">Teachers</NavLink>
          </li>
        </ul>
        <>
          <button onClick={openLoginModal}>
            <svg width={20} height={20}>
              <use xlinkHref={`${SpriteIcons}#icon-log-in`} />
            </svg>
            Log in
          </button>
          <button onClick={openRegisterModal}>Registration</button>
          <AuthModal isOpen={isLoginModalOpen} onRequestClose={closeLoginModal}>
            <Login />
          </AuthModal>

          <AuthModal
            isOpen={isRegisterModalOpen}
            onRequestClose={closeRegisterModal}
          >
            <SignUp />
          </AuthModal>
        </>
      </nav>
    </header>
  );
};
