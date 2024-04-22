import { theme } from 'components/theme';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  padding-block-end: ${theme.spacing(16)};
`;

export const HomeFlexBox = styled.div`
  display: flex;

  @media screen and (max-width: 1439px) {
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (min-width: 1440px) {
    flex-wrap: wrap;
  }
`;

export const BoardContainer = styled.div`
  margin-block-end: ${theme.spacing(12)};

  display: flex;
  gap: ${theme.spacing(12)};
  @media screen and (max-width: 1439px) {
    flex-direction: column;
  }
`;

export const SideBoard = styled.div`
  padding: ${theme.spacing(12)} ${theme.spacing(8)};
  margin-block-end: ${theme.spacing(3)};
  background-color: ${theme.colors.back};
  border-radius: ${theme.radii.l};

  @media screen and (min-width: 768px) {
    padding: ${theme.spacing(24.5)} ${theme.spacing(16)};
    margin-block-end: 0;
  }

  @media screen and (min-width: 1440px) {
    padding: ${theme.spacing(49)} ${theme.spacing(32)};
    margin-block-end: 0;
  }

  p {
    margin-block-end: ${theme.spacing(32)};
    line-height: 1.375;
  }
`;

export const HeroImg = styled.img`
  border-radius: ${theme.radii.l};
`;

export const BoardTitle = styled.h1`
  display: block;
  margin-block-end: ${theme.spacing(16)};
  font-size: 36px;
  font-weight: 500;
  line-height: 1.166;

  @media screen and (min-width: 1440px) {
    font-size: 48px;
  }

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
  padding: ${theme.spacing(3)} ${theme.spacing(10)};
  display: flex;
  justify-content: center;
  gap: ${theme.spacing(10)};

  border: 1.5px dashed ${theme.colors.primary};
  border-radius: ${theme.radii.l};

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1440px) {
    padding: ${theme.spacing(20)} ${theme.spacing(61.5)};
    gap: ${theme.spacing(50)};
  }

  h2 {
    white-space: nowrap;
  }

  li {
    display: flex;
    align-items: center;
    gap: ${theme.spacing(8)};
    @media screen and (max-width: 1439px) {
      justify-content: space-between;
    }
  }

  p {
    max-inline-size: 96px;
    font-size: 14px;
    line-height: 1.285;
    color: rgba(18, 20, 23, 0.7);
  }
`;
