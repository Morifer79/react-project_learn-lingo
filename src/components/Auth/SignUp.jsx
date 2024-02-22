import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { ErrMsg, EyeBtn, PasswordLabel } from 'components/Auth/Auth.styled';
import SpriteIcons from '../../images/sprite.svg';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'components/firebase';

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

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = ({ userName, email, password }, { resetForm }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log(user);
        resetForm();
      })
      .catch(error => console.log(error));
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
      <Form>
        <h2>Registration</h2>
        <p>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
        <label aria-label="Name for registration">
          <Field type="text" name="userName" placeholder="Name" />
          <ErrMsg name="userName" component="div" />
        </label>
        <label aria-label="Email for registration">
          <Field type="email" name="email" placeholder="Email" />
          <ErrMsg name="email" component="div" />
        </label>
        <PasswordLabel aria-label="Password for registration">
          <Field
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="password"
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
        <button type="submit">Sign Up</button>
      </Form>
    </Formik>
  );
};
