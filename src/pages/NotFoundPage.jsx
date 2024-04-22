import styled from 'styled-components';
import fourty from '../images/error1.png';
import four from '../images/error2.png';
import { NavLink } from 'react-router-dom';
import { theme } from 'components/theme';

const Thumb = styled.div`
  display: flex;
  justify-content: center;
  transform-style: preserve-3d;
  perspective: 400px;
`;

const Four = styled.img`
  position: absolute;
  inline-size: 80px;
  block-size: 80px;
  top: 20px;
  right: 56px;

  @media screen and (min-width: 768px) {
    inline-size: 180px;
    block-size: 180px;
    top: 70px;
    right: 160px;
  }

  @media screen and (min-width: 1440px) {
    top: 68px;
    right: 465px;
  }
`;

const Msg = styled.h1`
  font-size: 30px;
  position: absolute;
  top: 140px;
  transform: rotateY(37deg);

  @media screen and (min-width: 768px) {
    font-size: 60px;
    top: 330px;
    right: 60px;
  }

  @media screen and (min-width: 1440px) {
    top: 360px;
    right: 390px;
  }
`;

const BtnBack = styled(NavLink)`
  background-color: ${theme.colors.cherry};
  color: ${theme.colors.light};
  font-size: 30px;
  position: absolute;
  top: 180px;
  right: 35px;
  transform: rotateY(-58deg);
  transition: color ${theme.transition} background-color ${theme.transition};

  &:hover {
    background-color: transparent;
    color: ${theme.colors.cherry};
  }
  @media screen and (min-width: 768px) {
    font-size: 60px;
    transform: rotateY(-88deg);
    top: 325px;
    right: -18px;
  }

  @media screen and (min-width: 1440px) {
    top: 350px;
    right: 310px;
  }
`;

export default function NotFoundPage() {
  return (
    <Thumb>
      <img src={fourty} alt="error" />
      <Four src={four} alt="error" />
      <Msg>PAGE NOT FOUND</Msg>
      <BtnBack to="/teachers">GO BACK</BtnBack>
    </Thumb>
  );
}
