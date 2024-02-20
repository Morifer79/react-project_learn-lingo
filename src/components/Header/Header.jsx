import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <>
          <svg width={28} height={28}>
            <use href="../../images/sprite.svg#icon-ukraine" />
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
          <NavLink to="/login">
            <svg width={20} height={20}>
              <use href="../../images/sprite.svg#icon-log-in" />
            </svg>
            Log in
          </NavLink>
          <NavLink to="/register">
            Registration
          </NavLink>
        </>
      </nav>
    </header>
  );
};
