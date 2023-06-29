import { Form } from 'components/Form/Form';
import { Wrapper, Title, Container } from './Contacts.styled';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/Contacts/ContactList';

const Contacts = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Title>Phonebook</Title>
          <Form />
        </Container>
        <Container>
          <Title>Contacts</Title>
          <Filter />
          <ContactList />
        </Container>
      </Wrapper>
    </>
  );
};

export default Contacts;
