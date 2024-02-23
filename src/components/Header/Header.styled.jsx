import { theme } from 'components/theme';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderBox = styled.header`
  padding: ${theme.spacing(10)} ${theme.spacing(32)};
  block-size: 88px;
  inline-size: 100%;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(4)};

  span {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -2%;
  }
`;

export const StyledLink = styled(NavLink)`
  line-height: 1.25;
  transition: color ${theme.transition};

  &:hover {
    color: ${theme.colors.secondary};
  }
  &.active {
    color: ${theme.colors.primary};
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: ${theme.spacing(14)};
`;

export const BtnLog = styled.button`
  border: none;
  background-color: transparent;

  &:hover svg {
    fill: ${theme.colors.secondary};
  }

  svg {
    transition: fill ${theme.transition};
    transform: translateY(3px);
    fill: ${theme.colors.primary};
  }
  span {
    margin-inline-start: ${theme.spacing(4)};
    font-weight: 700;
    line-height: 1.25;
  }
`;

export const BtnReg = styled.button`
  padding: ${theme.spacing(7)} ${theme.spacing(19.5)};
  margin-inline-start: ${theme.spacing(8)};
  border: none;
  border-radius: ${theme.radii.xs};
  color: ${theme.colors.light};
  background-color: ${theme.colors.main};
  transition: opacity ${theme.transition};

  &:hover {
    opacity: 0.85;
  }
`;
