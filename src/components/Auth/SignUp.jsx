import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import {
  BtnSubmit,
  ErrMsg,
  EyeBtn,
  PasswordLabel,
  StyledForm,
  StyledInput,
  Title,
} from 'components/Auth/Auth.styled';
import SpriteIcons from '../../images/sprite.svg';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'components/firebase';
import toast from 'react-hot-toast';

const registerSchema = Yup.object({
  userName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(7, 'At least 7 simbols')
    .max(20, 'At most 20 simbols')
    .required('Required'),
});

export const SignUp = ({onRequestClose}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = ({ userName, email, password }, { resetForm }) => {
    console.log(userName);
    
    createUserWithEmailAndPassword(auth, email, password)
      .then(
        toast.success(`Welcome, ${userName}`, {
          duration: 5000,
          position: 'top-right',
          icon: '👋',
        }),
        resetForm(),
        onRequestClose(),
      )
      .catch(error => toast.error(error, {
        duration: 5000,
        position: 'top-right',
      }));
  };

  const handleTogglePassword = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <Formik
      initialValues={{ userName: '', email: '', password: '' }}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <Title>Registration</Title>
        <p>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>

        <label aria-label="Name for registration">
          <StyledInput type="text" name="userName" placeholder="Name" />
          <ErrMsg name="userName" component="div" />
        </label>

        <label aria-label="Email for registration">
          <StyledInput type="email" name="email" placeholder="Email" />
          <ErrMsg name="email" component="div" />
        </label>

        <PasswordLabel aria-label="Password for registration">
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
          <span>Sign Up</span>
        </BtnSubmit>
      </StyledForm>
    </Formik>
  );
};
