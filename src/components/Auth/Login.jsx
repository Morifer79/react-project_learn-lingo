import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';

import SpriteIcons from '../../images/sprite.svg';
import { ErrMsg, EyeBtn, PasswordLabel } from './Auth.styled';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'components/firebase';

const loginSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(7, 'At least 7 simbols')
    .max(20, 'At most 20 simbols')
    .required('Required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = ({ email, password }, { resetForm }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log(user);
        resetForm();
      })
      .catch(error => console.log(error))
  };

  const handleTogglePassword = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <h2>Log In</h2>
        <p>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
        <label aria-label="Email for login">
          <Field type="email" name="email" placeholder="Email" />
          <ErrMsg name="email" component="div" />
        </label>
        <PasswordLabel aria-label="Password for login">
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
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};
