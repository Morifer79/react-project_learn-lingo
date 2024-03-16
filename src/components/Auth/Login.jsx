import { Formik } from 'formik';
import * as Yup from 'yup';

import SpriteIcons from '../../images/sprite.svg';
import {
  BtnSubmit,
  ErrMsg,
  EyeBtn,
  PasswordLabel,
  StyledForm,
  StyledInput,
  Title,
} from './Auth.styled';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import toast from 'react-hot-toast';

const loginSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('This is a required field'),
  password: Yup.string()
    .min(7, 'At least 7 simbols')
    .max(20, 'At most 20 simbols')
    .required('This is a required field'),
});

export const Login = ({ onRequestClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = ({ email, password }, { resetForm }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(user => {
        toast.success(`Welcome, ${user.user.email}`, {
          duration: 5000,
          position: 'top-right',
          icon: '👋',
        });
        resetForm();
        onRequestClose();
      })
      .catch(error =>
        toast.error(`Something went wrong, ${error}`, {
          duration: 5000,
          position: 'top-right',
        })
      );
  };

  const handleTogglePassword = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <Title>Log In</Title>
        <p>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>

        <label aria-label="Email for login">
          <StyledInput type="email" name="email" placeholder="Email" />
          <ErrMsg name="email" component="div" />
        </label>

        <PasswordLabel aria-label="Password for login">
          <StyledInput
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
          />
          <ErrMsg name="password" component="div" />
          <EyeBtn onClick={() => handleTogglePassword()} type="button">
            <svg width="18" height="18">
              <use
                xlinkHref={
                  showPassword
                    ? `${SpriteIcons}#icon-eye`
                    : `${SpriteIcons}#icon-eye-off`
                }
              />
            </svg>
          </EyeBtn>
        </PasswordLabel>

        <BtnSubmit type="submit">
          <span>Log In</span>
        </BtnSubmit>
      </StyledForm>
    </Formik>
  );
};
