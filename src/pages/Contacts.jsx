import { Form } from 'components/Form/Form';
import { Wrapper, Title } from './Contacts.styled';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/Contacts/ContactList';

const Contacts = () => {
  return (
    <>
      <Wrapper>
        <Title>Phonebook</Title>
        <Form />
        <Title>Contacts</Title>
        <Filter />
        <ContactList />
      </Wrapper>
    </>
  );
};

export default Contacts;
