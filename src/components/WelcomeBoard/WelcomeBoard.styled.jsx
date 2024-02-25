import { theme } from 'components/theme';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Hero = styled.img`
  max-inline-size: 568px;
`;

export const SideBoard = styled.div`
  margin-block-end: ${theme.spacing(12)};
  display: inline-flex;
  gap: ${theme.spacing(12)};
`;

export const BoardContainer = styled.div`
  padding: ${theme.spacing(49)} ${theme.spacing(32)};
  background-color: ${theme.colors.back};
  border-radius: ${theme.radii.l};

  p {
    margin-block-end: ${theme.spacing(32)};
    max-inline-size: 470px;
    line-height: 1.375;
  }
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
  margin-block-end: ${theme.spacing(16)};
  padding: ${theme.spacing(20)} ${theme.spacing(61)};
  display: flex;
  justify-content: space-between;
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
