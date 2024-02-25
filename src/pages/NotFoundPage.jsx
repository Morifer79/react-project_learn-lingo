import styled from 'styled-components';
import nf from 'images/error1.png';
import nf1 from 'images/four.png';
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
  right: 24%;
  transform: rotateY(30deg);
`;

const BtnBack = styled(NavLink)`
  background-color: ${theme.colors.cherry};
  color: ${theme.colors.light};
  font-size: 65px;
  position: absolute;
  top: 65%;
  right: 16%;
  transform: rotateY(-80deg);
  transition: color ${theme.transition} background-color ${theme.transition};

  &:hover {
    background-color: transparent;
    color: ${theme.colors.cherry};
  }
`;

export default function NotFoundPage() {
  return (
    <Thumb>
      <img src={nf} alt="error" />
      <Four src={nf1} alt="error" />
      <Msg>PAGE NOT FOUND</Msg>
      <BtnBack to="/teachers">GO BACK</BtnBack>
    </Thumb>
  );
}
