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
  top: 14%;
  right: 36%;
  inline-size: 180px;
  block-size: 180px;
`;

const Msg = styled.h1`
  font-size: 75px;
  position: absolute;
  top: 65%;
  right: 30%;
  transform: rotateY(37deg);
`;

const BtnBack = styled(NavLink)`
  background-color: ${theme.colors.cherry};
  color: ${theme.colors.light};
  font-size: 65px;
  position: absolute;
  top: 65%;
  right: 26%;
  transform: rotateY(-88deg);
  transition: color ${theme.transition} background-color ${theme.transition};

  &:hover {
    background-color: transparent;
    color: ${theme.colors.cherry};
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
