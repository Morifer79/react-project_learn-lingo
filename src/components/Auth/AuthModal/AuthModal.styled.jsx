import { theme } from 'components/theme';
import styled from 'styled-components';

export const ModalHeader = styled.div`
  height: auto;
  display: flex;
  justify-content: space-between;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 10;
  padding: 0;
  border: none;
  background: transparent;

  & svg {
    stroke: ${theme.colors.main};
    transition: stroke ${theme.transition};
    transition: 1s;

    &:hover,
    &:focus {
      scale: 1;
      stroke: ${theme.colors.primary};
    }
  }
`;
