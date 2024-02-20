import { NavLink } from 'react-router-dom';
import mainImg from '../../images/home.png';

export const WelcomeBoard = () => {
  return (
    <section>
      <div>
        <div>
          <h1>
            Unlock your potential with the best{' '}
            <span>
              <i>language</i>
            </span>{' '}
            tutors
          </h1>
          <p>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <NavLink to="/teacher">Get started</NavLink>
        </div>
        <img src={mainImg} alt="home" />
      </div>
      <ul>
        <li>
          <h2>32,000 +</h2>
          <p width="96px">Experienced tutors</p>
        </li>
        <li>
          <h2>300,000 +</h2>
          <p>5-star tutor reviews</p>
        </li>
        <li>
          <h2>120 +</h2>
          <p>Subjects taught</p>
        </li>
        <li>
          <h2>200 +</h2>
          <p>Tutor nationalities</p>
        </li>
      </ul>
    </section>
  );
};
