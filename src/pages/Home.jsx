import { selectLoggedUser, selectUser } from 'redux/selectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { HelloTitle } from './Pages.styled';

const Home = () => {
  const isLoggedIn = useSelector(selectLoggedUser);
  const user = useSelector(selectUser);

  return (
    <>
      {isLoggedIn ? (
        <HelloTitle>{user.name},this is your private account 💻</HelloTitle>
      ) : (
        <h1>Hi Anonymous 👤, Sign up or Login to start usage</h1>
      )}
    </>
  );
};

export default Home;
