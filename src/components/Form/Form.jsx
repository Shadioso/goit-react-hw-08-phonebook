import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PhoneBook } from 'components/PhoneBook/PhoneBook';
import { addContact } from 'services/api';
import { selectContactList } from 'redux/selectors';

//
const Form = () => {
  const contactList = useSelector(selectContactList);
  const dispatch = useDispatch();
  const [contact, setContact] = useState({ name: ``, number: `` });

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
    onSubmit(contact);
    setContact({ name: ``, number: `` });
  };

  const changeInput = evt => {
    setContact(prevState => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));
  };

  return (
    <PhoneBook
      SubmitForm={submitForm}
      ChangeInput={changeInput}
      options={contact}
    />
  );
};

export { Form };
