import { theme } from 'components/theme';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderBox = styled.header`
  @media screen and (min-width: 321px) {
    padding: ${theme.spacing(10)} ${theme.spacing(32)};
  }
`;

export const Navigation = styled.nav`
  display: flex;
  white-space: nowrap;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 320px) {
    padding: ${theme.spacing(3)};
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    gap: ${theme.spacing(3)};
    margin-bottom: ${theme.spacing(3)};
  }
`;

export const RegBar = styled.div`
  display: flex;
`;

export const LogoBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${theme.spacing(6)};
  transition: 1s;

  &:hover {
    transform: scale(1.2);
  }

  span {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    background: linear-gradient(0deg, #f7ca17 50%, #055ac2 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const StyledLink = styled(NavLink)`
  line-height: 1.25;
  transition: color ${theme.transition};

  &:hover {
    color: ${theme.colors.primary};
  }
  &.active {
    color: ${theme.colors.secondary};
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: ${theme.spacing(14)};
`;

export const BtnAuth = styled.button`
  margin-inline-start: ${theme.spacing(5)};
  border: none;
  background-color: transparent;
  transition: color ${theme.transition};

  &:hover svg {
    fill: ${theme.colors.secondary};
  }

  svg {
    transition: fill ${theme.transition};
    transform: translateY(3px);
    fill: ${theme.colors.primary};
  }

  &:hover {
    color: ${theme.colors.secondary};
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
  transition: color ${theme.transition}, background-color ${theme.transition},
    box-shadow ${theme.transition};

  &:hover {
    color: ${theme.colors.main};
    background-color: transparent;
    outline: 0;
    box-shadow: 0 0 10px 0 ${theme.colors.main} inset,
      0 0 10px 4px ${theme.colors.main};
  }
`;

export const UserSpan = styled.span`
  background: linear-gradient(0deg, #f7ca17 30%, #055ac2 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
