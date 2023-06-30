import { useState } from 'react';
import { Form } from './Login.styled';
import { useDispatch } from 'react-redux';
import { register } from 'services/api';
import { Input, Button, Label } from 'components/PhoneBook/PhoneBook.styled';
import { FormTitle } from './Login.styled';

const Register = () => {
  const [contact, setContact] = useState({ name: ``, email: ``, password: `` });
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(register(data));
  };

  const submitForm = evt => {
    evt.preventDefault();
    onSubmit(contact);
    setContact({ name: ``, email: ``, password: `` });
  };

  const changeInput = evt => {
    setContact(prevState => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));
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
            value={contact.name}
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

        <Button
          type="submit"
          disabled={!contact.email || !contact.name || !contact.password}
        >
          Done🚀
        </Button>
      </Form>
    </>
  );
};

export default Register;
