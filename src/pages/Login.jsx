import { Form } from './Login.styled';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from 'services/api';
import { Input, Button, Label } from 'components/PhoneBook/PhoneBook.styled';
import { FormTitle } from './Login.styled';

const Login = () => {
  const [contact, setContact] = useState({ email: ``, password: `` });
  const dispatch = useDispatch();

  const onSubmit = data => {
    console.log(data);
    dispatch(login(data));
  };

  const submitForm = evt => {
    evt.preventDefault();
    onSubmit(contact);
    setContact({ email: ``, password: `` });
  };

  const changeInput = evt => {
    setContact(prevState => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));
  };

  return (
    <>
      <FormTitle>Login 👨‍💻</FormTitle>
      <Form onSubmit={submitForm}>
        <Label>
          Email
          <Input
            type="email"
            name="email"
            value={contact.email}
            //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={changeInput}
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            name="password"
            value={contact.password}
            //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={changeInput}
          />
        </Label>

        <Button type="submit" disabled={!contact.email || !contact.password}>
          Done🚀
        </Button>
      </Form>
    </>
  );
};

export default Login;
