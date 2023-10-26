// import { Form } from './Login.styled';
// import { useDispatch } from 'react-redux';
// import { useState } from 'react';
// import { login } from 'services/api';
// import { Input, Button, Label } from 'components/PhoneBook/PhoneBook.styled';
// import { FormTitle } from './Login.styled';
// const Login = () => {
//   const [contact, setContact] = useState({ email: ``, password: `` });
//   const dispatch = useDispatch();

//   const onSubmit = data => {
//     console.log(data);
//     dispatch(login(data));
//   };

//   const submitForm = evt => {
//     evt.preventDefault();
//     onSubmit(contact);
//     setContact({ email: ``, password: `` });
//   };

//   const changeInput = evt => {
//     setContact(prevState => ({
//       ...prevState,
//       [evt.target.name]: evt.target.value,
//     }));
//   };

//   return (
//     <>
//       <FormTitle>Login 👨‍💻</FormTitle>
//       <Form onSubmit={submitForm}>
//         <Label>
//           Email
//           <Input
//             type="email"
//             name="email"
//             value={contact.email}
//             //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             onChange={changeInput}
//           />
//         </Label>
//         <Label>
//           Password
//           <Input
//             type="password"
//             name="password"
//             value={contact.password}
//             //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             onChange={changeInput}
//           />
//         </Label>

//         <Button type="submit" disabled={!contact.email || !contact.password}>
//           Done🚀
//         </Button>
//       </Form>
//     </>
//   );
// };

// export default Login;
import React from 'react';
import { Formik } from 'formik';
import { validateSchema } from '../services/authLogInSchema';
import {
  AuthInput,
  AuthLabel,
  Text,
  FormTitle,
  FormText,
  SubmitButton,
  IconForm,
  ErrorIcon,
  SuccesIcon,
  AuthLoginForm,
  BoxLogin,
  NavLinkStyled,
  AuthImage,
} from './Login.styled';
import { useDispatch } from 'react-redux';
import { login } from 'services/api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import LoginImg from '../images/loginImg.png';

//
const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <BoxLogin>
      <Formik
        initialValues={{
          email: '',
          password: ``,
        }}
        validationSchema={validateSchema}
        onSubmit={async values => {
          const result = await dispatch(login(values));
          !result?.error
            ? Notify.success('Welcome!')
            : Notify.failure('You are not logged in');
        }}
      >
        {({
          touched,
          errors,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <AuthLoginForm>
            <FormTitle>Log In</FormTitle>
            {touched.email && errors.email ? (
              <AuthLabel>
                <FormText color={'#DA1414'}>Email</FormText>
                <AuthInput
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  $border={'1px solid #DA1414'}
                  type="text"
                  name="email"
                  placeholder="Enter email"
                  style={{ marginBottom: '8px' }}
                />
                <ErrorIcon />

                <Text color="#DA1414">{errors.email}</Text>
              </AuthLabel>
            ) : (
              <AuthLabel>
                <FormText
                  color={
                    values.email !== `` && !errors.email
                      ? ' #3CBC81'
                      : undefined
                  }
                >
                  Email
                </FormText>
                <AuthInput
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  type="text"
                  name="email"
                  $border={
                    values.email !== `` && !errors.email
                      ? '1px solid #3CBC81'
                      : undefined
                  }
                  placeholder="Enter email"
                />
                {values.email !== `` && !errors.email && <SuccesIcon />}
              </AuthLabel>
            )}
            {touched.password && errors.password ? (
              <AuthLabel>
                <FormText color={'#DA1414'}>Password</FormText>
                <AuthInput
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password.trim()}
                  $border={'1px solid #DA1414'}
                  type="text"
                  name="password"
                  placeholder="Enter password"
                  style={{ marginBottom: '8px' }}
                />
                <ErrorIcon />
                <Text color="#DA1414">{errors.password}</Text>
              </AuthLabel>
            ) : (
              <AuthLabel>
                <FormText
                  color={
                    values.password !== `` && !errors.password
                      ? ' #3CBC81'
                      : undefined
                  }
                >
                  Password
                </FormText>
                <AuthInput
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  type="password"
                  name="password"
                  style={{ marginBottom: '32px' }}
                  $border={
                    values.password !== `` && !errors.password
                      ? ' 1px solid #3CBC81'
                      : undefined
                  }
                  placeholder="Enter password"
                />
                {values.password !== `` && !errors.password && <SuccesIcon />}
              </AuthLabel>
            )}
            <SubmitButton type="submit" onClick={handleSubmit}>
              Log In <IconForm />
            </SubmitButton>
          </AuthLoginForm>
        )}
      </Formik>
      <AuthImage src={LoginImg} alt="photo" />
      <NavLinkStyled to="/register">Sign Up</NavLinkStyled>
    </BoxLogin>
  );
};

export default LoginForm;
