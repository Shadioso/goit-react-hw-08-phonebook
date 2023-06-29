import { useState } from 'react';
import { Form } from './Login.styled';
import { useDispatch } from 'react-redux';
import { register } from 'services/api';
import { Input, Button, Label } from 'components/PhoneBook/PhoneBook.styled';
import { FormTitle } from './Login.styled';

const Register = () => {
  const [name, setName] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const dispatch = useDispatch();

  const state = {
    name,
    email,
    password,
  };

  const onSubmit = data => {
    console.log(data);
    dispatch(register(data));
  };

  const submitForm = evt => {
    evt.preventDefault();
    onSubmit(state);
    setEmail(``);
    setName(``);
    setPassword(``);
  };

  const changeInput = evt => {
    const { name } = evt.target;
    switch (name) {
      case `name`:
        setName(evt.target.value);
        break;
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
      <FormTitle> Sign up 👨‍💻</FormTitle>
      <Form onSubmit={submitForm}>
        <Label>
          Name
          <Input
            type="name"
            name="name"
            value={name}
            //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={changeInput}
          />
        </Label>
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

        <Button type="submit" disabled={!email || !name || !password}>
          Done🚀
        </Button>
      </Form>
    </>
  );
};

export default Register;
