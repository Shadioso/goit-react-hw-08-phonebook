// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { register } from 'services/api';
// import { Input, Button, Label } from 'components/PhoneBook/PhoneBook.styled';
// import { FormTitle, AuthLoginForm } from './Login.styled';

// const Register = () => {
//   const [contact, setContact] = useState({ name: ``, email: ``, password: `` });
//   const dispatch = useDispatch();

//   const onSubmit = data => {
//     dispatch(register(data));
//   };

//   const submitForm = evt => {
//     evt.preventDefault();
//     onSubmit(contact);
//     setContact({ name: ``, email: ``, password: `` });
//   };

//   const changeInput = evt => {
//     setContact(prevState => ({
//       ...prevState,
//       [evt.target.name]: evt.target.value,
//     }));
//   };

//   return (
//     <>
//       <FormTitle> Sign up 👨‍💻</FormTitle>
//       <AuthLoginForm onSubmit={submitForm}>
//         <Label>
//           Name
//           <Input
//             type="name"
//             name="name"
//             value={contact.name}
//             //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={changeInput}
//           />
//         </Label>
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

//         <Button
//           type="submit"
//           disabled={!contact.email || !contact.name || !contact.password}
//         >
//           Done🚀
//         </Button>
//       </AuthLoginForm>
//     </>
//   );
// };

// export default Register;
import React from 'react';
import { Formik } from 'formik';
import { validateSchema } from '../services/authSignUpSchema';
import { NavLinkStyled } from './Login.styled';
import {
  AuthForm,
  AuthInput,
  AuthLabel,
  Text,
  FormTitle,
  FormText,
  SubmitButton,
  IconForm,
  ErrorIcon,
  SuccesIcon,
  Box,
} from './Login.styled';
import { register } from '../services/api';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

//
const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Box>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: ``,
        }}
        validationSchema={validateSchema}
        onSubmit={async values => {
          const result = await dispatch(register(values));
          !result?.error
            ? Notify.success('Welcome!')
            : Notify.failure('You are not signed up');
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
          <AuthForm>
            <FormTitle>Sign Up</FormTitle>
            {touched.name && errors.name ? (
              <AuthLabel>
                <FormText color={'#DA1414'}>Name</FormText>
                <AuthInput
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  $border={'1px solid #DA1414'}
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  style={{ marginBottom: '8px' }}
                />
                <ErrorIcon />
                <Text color="#DA1414">{errors.name}</Text>
              </AuthLabel>
            ) : (
              <AuthLabel>
                <FormText
                  color={values.name.length > 1 ? ' #3CBC81' : undefined}
                >
                  Name
                </FormText>
                <AuthInput
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  $border={
                    values.name.length > 1 && !errors.name
                      ? '1px solid #3CBC81'
                      : undefined
                  }
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
                {values.name !== `` && !errors.name && <SuccesIcon />}
              </AuthLabel>
            )}
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
                  value={values.password}
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
                  value={values.password.trim()}
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
              Sign Up <IconForm />
            </SubmitButton>
          </AuthForm>
        )}
      </Formik>
      <NavLinkStyled to="/login" style={{ marginTop: `15px` }}>
        Log In
      </NavLinkStyled>
    </Box>
  );
};

export default RegisterForm;
