import { theme } from "components/theme";
import { ErrorMessage } from "formik";
import styled from "styled-components";

export const PasswordLabel = styled.label`
  position: relative;
`;

export const ErrMsg = styled(ErrorMessage)`
  font-size: 12px;
  color: ${theme.colors.error};
`;

export const EyeBtn = styled.button`
  border: none;
  background: none;
  position: absolute;
  top: 13px;
  right: 10px;
  transform: translateY(-50%);
`;