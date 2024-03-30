import { theme } from 'components/theme';
import { Field } from 'formik';
import styled from 'styled-components';

export const TeacherWrapper = styled.div`
  display: flex;
  gap: ${theme.spacing(7)};
  margin-block-end: ${theme.spacing(20)};
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Avatar = styled.img`
  border-radius: ${theme.radii.xxl};
`;

export const ModalSuperscript = styled.span`
  color: ${theme.colors.accent};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.333;
`;

export const ModalName = styled.h3`
  font-weight: 500;
  line-height: 1.5;
`;

export const RadioTitle = styled.h2`
  margin-block-end: ${theme.spacing(10)};

  font-weight: 500;
  line-height: 1.5;
`;

export const RadioGroup = styled.div`
  margin-block-end: ${theme.spacing(20)};
  display: flex;
  flex-direction: column;
  gap: 16px;

  label {
    line-height: 1.375;
  }
`;

export const StyledRadio = styled(Field)`
  margin-inline-end: ${theme.spacing(4)};
  cursor: pointer;
  position: relative;
  top: 5px;
  block-size: 22px;
  inline-size: 22px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    inline-size: 24px;
    block-size: 24px;
    border-radius: ${theme.radii.xxl};
    transform: translate(-50%, -50%);
    background-color: white;
    border: 2px solid rgba(18, 20, 23, 0.1);
  }

  &:checked::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    inline-size: 24px;
    block-size: 24px;
    border-radius: ${theme.radii.xxl};
    border: 2px solid ${theme.colors.primary};
    transform: translate(-50%, -50%);
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    inline-size: 12px;
    block-size: 12px;
    border-radius: ${theme.radii.xxl};
    background-color: ${theme.colors.primary};
    transform: translate(-50%, -50%);
    visibility: visible;
  }
`;
