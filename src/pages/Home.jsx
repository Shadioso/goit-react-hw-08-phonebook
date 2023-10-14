import { selectLoggedUser, selectUser } from 'redux/selectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import KGirl from '../images/korean-girl-1x.png';
import KGirlL from '../images/korean-girl-2x.png';
import AGirl from '../images/afro-girl-1x.png';
import AGirlL from '../images/afro-girl-2x.png';

import {
  HelloTitle,
  Main,
  ConnectContainer,
  ConnectTitle,
  ConnectImg,
  ConnectSubTitle,
  TitleContainer,
} from './Pages.styled';

const Home = () => {
  const isLoggedIn = useSelector(selectLoggedUser);
  const user = useSelector(selectUser);

  return (
    <Main>
      <ConnectContainer>
        <TitleContainer>
          <ConnectTitle>
            Let’s Connect with Your Visitors in Real Time
          </ConnectTitle>
          <ConnectSubTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </ConnectSubTitle>
        </TitleContainer>

        <ConnectImg
          srcSet={`${KGirl} 1x,${KGirlL} 2x`}
          src={KGirl}
          alt="Опис зображення й"
          style={{
            height: `390px`,
            width: `390px`,
            borderRadius: `190px 190px 0px 0px`,
          }}
        />
      </ConnectContainer>
      <ConnectContainer>
        <ConnectImg
          srcSet={`${AGirl} 1x,${AGirlL} 2x`}
          src={AGirl}
          alt="Опис зображення й"
          style={{
            height: `450px`,
            width: `501px`,
            borderRadius: `0px 0px 250px 250px`,
          }}
        />
      </ConnectContainer>
    </Main>
  );
};

export default Home;
