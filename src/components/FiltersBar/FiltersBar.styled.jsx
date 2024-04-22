import { theme } from 'components/theme';
import styled from 'styled-components';
import arrow from '../../images/chevron-down.svg';
import { Field, Form } from 'formik';

export const StyledForm = styled(Form)`
  @media screen and (max-width: 1439px) {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  @media screen and (min-width: 1440px) {
    white-space: nowrap;
  }
`;

export const StyledLabel = styled.label`
  color: ${theme.colors.accent};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.285;

  display: inline-flex;
  flex-direction: column;
`;

export const StyledSelect = styled(Field)`
  margin-block-start: ${theme.spacing(4)};
  margin-inline-end: ${theme.spacing(10)};
  padding: ${theme.spacing(7)} ${theme.spacing(9)};

  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.111;
  outline: none;
  border: none;
  border-radius: ${theme.radii.s};
  appearance: none;
  overflow: hidden;
  background:
    right 14px center no-repeat url(${arrow}),
    ${theme.colors.light};

  &#language {
    inline-size: 220px;
  }
  &#level {
    inline-size: 198px;
  }
  &#price {
    inline-size: 124px;
  }

  option {
    color: rgba(18, 20, 23, 0.2);
  }
`;

export const BtnRst = styled.button`
  padding-block: ${theme.spacing(7)};
  vertical-align: bottom;

  color: ${theme.colors.primary};
  background: transparent;
  border: none;

  &:hover {
    color: ${theme.colors.secondary};
  }
`;
