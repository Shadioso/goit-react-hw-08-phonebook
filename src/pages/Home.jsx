import { selectLoggedUser, selectUser } from 'redux/selectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import About from 'components/About/About';
import { Main } from './Pages.styled';
//
const Home = () => {
  const isLoggedIn = useSelector(selectLoggedUser);
  const user = useSelector(selectUser);

  return (
    <Main>
      <About />
    </Main>
  );
};

export default Home;
