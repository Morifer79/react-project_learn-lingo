import { theme } from 'components/theme';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  padding: 0 ${theme.spacing(32)} ${theme.spacing(10)} ;
  margin: 0 auto;
  max-inline-size: 1440px;
  inline-size: 100%;
`;

export const SideBoard = styled.div`
  margin-block-end: ${theme.spacing(12)};
  display: inline-flex;
  gap: ${theme.spacing(12)};
`;

export const BoardContainer = styled.div`
  padding: 98px 108px 98px 64px;
  background-color: ${theme.colors.back};
  border-radius: ${theme.radii.l};

  p {
    margin-block-end: ${theme.spacing(32)};
    max-inline-size: 470px;
    line-height: 1.375;
  }
`;

export const HeroImg = styled.img`
  max-inline-size: 968px;
  border-radius: ${theme.radii.l};
`;

export const BoardTitle = styled.h1`
  display: block;
  margin-block-end: ${theme.spacing(16)};
  font-size: 48px;
  font-weight: 500;

  i {
    font-weight: 400;
    border-radius: 8px;
    background-color: #fbe9ba;
  }
`;

export const BtnTeachers = styled(NavLink)`
  display: inline-block;
  padding: ${theme.spacing(8)} ${theme.spacing(44)};
  border-radius: ${theme.radii.xs};
  background: ${theme.colors.primary};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.555;
  transition: background-color ${theme.transition};

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

export const BoardList = styled.ul`
  max-inline-size: 1312px;
  padding: ${theme.spacing(20)};
  display: flex;
  justify-content: center;
  gap: ${theme.spacing(50)};
  border: 1.5px dashed ${theme.colors.primary};
  border-radius: ${theme.radii.l};

  li {
    display: flex;
    align-items: center;
    gap: ${theme.spacing(8)};
  }

  p {
    max-inline-size: 96px;
    font-size: 14px;
    line-height: 1.285;
    color: rgba(18, 20, 23, 0.7);
  }
`;
