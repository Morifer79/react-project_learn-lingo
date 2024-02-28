import {
  BtnSubmit,
  ErrMsg,
  StyledForm,
  StyledInput,
  Title,
} from 'components/Auth/Auth.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Avatar,
  ModalName,
  ModalSuperscript,
  RadioGroup,
  RadioTitle,
  StyledRadio,
  TeacherWrapper,
  TextWrapper,
} from './TeacherModal.styled';
import toast from 'react-hot-toast';

const userSchema = Yup.object({
  reason: Yup.string().required('Choose one of the answers'),
  fullName: Yup.string()
    .min(3, 'Minimum 3 characters')
    .max(30, 'Maximum 30 characters')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('This is a required field'),
  number: Yup.string()
    .min(9, 'Sample format: XXX-XX-XX')
    .max(9, 'Sample format: XXX-XX-XX')
    .required('This is a required field')
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Phone number must be digits and dashes.'
    ),
});

export const TeacherModal = ({ card, onRequestClose }) => {
  const handleSubmit = ({ reason, fullName, email, number }, { resetForm }) => {
    toast.success('The data was successfully sent.', {
      duration: 5000,
      position: 'top-right',
    });
    resetForm();
    onRequestClose();
  };

  return (
    <Formik
      initialValues={{ reason: '', fullName: '', email: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <StyledForm>
        <Title>Book trial lesson</Title>
        <p>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>

        <TeacherWrapper>
          <Avatar src={card.avatar_url} alt="avatar" width={44} height={44} />
          <TextWrapper>
            <ModalSuperscript>Your teacher</ModalSuperscript>
            <ModalName>
              {card.name} {card.surname}
            </ModalName>
          </TextWrapper>
        </TeacherWrapper>

        <label aria-label="Field for reason" name="reason">
          <RadioTitle>What is your main reason for learning English?</RadioTitle>
          <RadioGroup>
            <label>
              <StyledRadio type="radio" name="reason" value="One" />
              Career and business
            </label>
            <label>
              <StyledRadio type="radio" name="reason" value="Two" />
              Lesson for kids
            </label>
            <label>
              <StyledRadio type="radio" name="reason" value="Three" />
              Living abroad
            </label>
            <label>
              <StyledRadio type="radio" name="reason" value="Four" />
              Exams and coursework
            </label>
            <label>
              <StyledRadio type="radio" name="reason" value="Five" />
              Culture, travel or hobby
            </label>
          </RadioGroup>
          <ErrMsg name="reason" component="div" />
        </label>

        <label aria-label="Field for Full name">
          <StyledInput type="text" name="fullName" placeholder="Name" />
          <ErrMsg name="fullName" component="div" />
        </label>

        <label aria-label="Field for Email">
          <StyledInput type="email" name="email" placeholder="Email" />
          <ErrMsg name="email" component="div" />
        </label>

        <label aria-label="Field for Phone number">
          <StyledInput type="tel" name="number" placeholder="Phone number" />
          <ErrMsg name="number" component="div" />
        </label>

        <BtnSubmit type="submit">
          <span>Book</span>
        </BtnSubmit>
      </StyledForm>
    </Formik>
  );
};
