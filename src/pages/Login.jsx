import { Form } from './Login.styled';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from 'services/api';
import { Input, Button, Label } from 'components/PhoneBook/PhoneBook.styled';
import { FormTitle } from './Login.styled';

const Login = () => {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const dispatch = useDispatch();

  const state = {
    email,
    password,
  };

  const onSubmit = data => {
    console.log(data);
    dispatch(login(data));
  };

  const submitForm = evt => {
    evt.preventDefault();
    onSubmit(state);
    setEmail(``);
    setPassword(``);
  };

  const changeInput = evt => {
    const { name } = evt.target;
    switch (name) {
      case `email`:
        setEmail(evt.target.value);
        break;
      case `password`:
        setPassword(evt.target.value);
        break;
      default:
        return;
    }
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
            value={email}
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
            value={password}
            //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={changeInput}
          />
        </Label>

        <Button type="submit" disabled={!email || !password}>
          Done🚀
        </Button>
      </Form>
    </>
  );
};

export default Login;
