import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PhoneBook } from 'components/PhoneBook/PhoneBook';
import { addContact } from 'services/api';
import { selectContactList } from 'redux/selectors';

//
const Form = () => {
  const contactList = useSelector(selectContactList);
  const dispatch = useDispatch();
  const [name, setName] = useState(``);
  const [number, setNumber] = useState(``);
  const state = {
    name,
    number,
  };

  const onSubmit = data => {
    if (contactList.find(({ name }) => name === data.name)) {
      alert(`${data.name} is already in contacts`);
      return contactList;
    }
    console.log(data);
    dispatch(addContact(data));
  };

  const submitForm = evt => {
    evt.preventDefault();
    onSubmit(state);
    setName(``);
    setNumber(``);
  };

  const changeInput = evt => {
    const { name } = evt.target;
    switch (name) {
      case `name`:
        setName(evt.target.value);
        break;
      case `number`:
        setNumber(evt.target.value);
        break;
      default:
        return;
    }
  };

  return (
    <PhoneBook
      SubmitForm={submitForm}
      ChangeInput={changeInput}
      options={state}
    />
  );
};

export { Form };
