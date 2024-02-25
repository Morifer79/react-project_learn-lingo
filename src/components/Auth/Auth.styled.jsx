import { theme } from 'components/theme';
import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const Title = styled.h2`
  margin-block-end: ${theme.spacing(10)};
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-inline-size: 440px;

  p {
    margin-block-end: ${theme.spacing(10)};

    color: rgba(18, 20, 23, 0.8);
    font-weight: 400;
    line-height: 1.375;
  }
`;

export const StyledInput = styled(Field)`
  inline-size: 100%;
  margin-block-end: ${theme.spacing(9)};
  padding: ${theme.spacing(8)} ${theme.spacing(9)};
  border-radius: ${theme.radii.xs};
  border: 1px solid rgba(18, 20, 23, 0.1);
  outline: none;
`;

export const ErrMsg = styled(ErrorMessage)`
  font-size: 12px;
  color: ${theme.colors.error};
  margin-block-end: ${theme.spacing(9)};
`;

export const PasswordLabel = styled.label`
  position: relative;
`;

export const EyeBtn = styled.button`
  border: none;
  background: none;
  position: absolute;
  top: 30px;
  right: 18px;
  transform: translateY(-50%);
  transition: fill ${theme.transition};

  &:hover {
    fill: ${theme.colors.primary};
  }
`;

export const BtnSubmit = styled.button`
  margin-block-start: ${theme.spacing(11)};
  padding-block: ${theme.spacing(8)};

  border: none;
  border-radius: ${theme.radii.xs};
  background-color: ${theme.colors.primary};
  transition: background-color ${theme.transition};

  &:hover {
    background-color: ${theme.colors.secondary};
  }

  span {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.555;
    white-space: nowrap;
  }
`;
