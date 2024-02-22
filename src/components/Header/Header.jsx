import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { AuthModal } from 'components/AuthModal/AuthModal';
import SpriteIcons from '../../images/sprite.svg';
import { Login } from 'components/Auth/Login';
import { SignUp } from 'components/Auth/SignUp';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClick, setIsClick] = useState(null);

  const openModal = () => {
    setIsClick(true);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsClick(null);
    setIsModalOpen(false);
    document.body.style.overflow = '';
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
          <button onClick={() => openModal()}>
            <svg width={20} height={20}>
              <use xlinkHref={`${SpriteIcons}#icon-log-in`} />
            </svg>
            Log in
          </button>
          {isModalOpen && (
            <AuthModal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              card={isClick}
            >
              <Login/>
            </AuthModal>
          )}
          <button onClick={() => openModal()}>Registration</button>
          {isModalOpen && (
            <AuthModal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              card={isClick}
            >
              <SignUp/>
            </AuthModal>
          )}
        </>
      </nav>
    </header>
  );
};
