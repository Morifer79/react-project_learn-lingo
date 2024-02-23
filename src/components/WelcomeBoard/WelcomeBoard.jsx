import mainImg from '../../images/home.png';
import {
  BoardContainer,
  BoardList,
  BoardTitle,
  BtnTeachers,
  Hero,
  SideBoard,
} from './WelcomeBoard.styled';

export const WelcomeBoard = () => {
  return (
    <section>
      <SideBoard>
        <BoardContainer>
          <BoardTitle>
            Unlock your potential with <br />
            the best <i>language</i> tutors
          </BoardTitle>
          <p>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <BtnTeachers to="/teachers">Get started</BtnTeachers>
        </BoardContainer>

        <Hero src={mainImg} alt="home" />
      </SideBoard>
      <BoardList>
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
      </BoardList>
    </section>
  );
};
