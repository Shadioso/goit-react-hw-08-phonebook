import KGirl from '../../images/korean-girl-1x.png';
import KGirlL from '../../images/korean-girl-2x.png';
import AGirl from '../../images/afro-girl-1x.png';
import AGirlL from '../../images/afro-girl-2x.png';
import AsGirl from '../../images/asia-girl-1x.png';
import AsGirlL from '../../images/asia-girl-2x.png';
import EGirl from '../../images/eng-girl-1x.png';
import EGirlL from '../../images/eng-girl-2x.png';
import AmGirl from '../../images/americ-girl-1x.png';
import AmGirlL from '../../images/americ-girl-2x.png';
import OGirl from '../../images/office-girl-1x.png';
import OGirlL from '../../images/office-girl-2x.png';

import {
  AboutContainer,
  AboutTitle,
  AboutImg,
  AboutSubTitle,
  TitleContainer,
  LinkList,
  LinkIcon,
  LinkItem,
  ListTitle,
  LinkArrow,
  Footer,
} from './About.styled';
const About = () => {
  return (
    <>
      <AboutContainer>
        <TitleContainer>
          <AboutTitle>Let’s Connect with Your Visitors in Real Time</AboutTitle>
          <AboutSubTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </AboutSubTitle>
        </TitleContainer>

        <AboutImg
          srcSet={`${KGirl} 1x,${KGirlL} 2x`}
          src={KGirl}
          alt="Опис зображення й"
          style={{
            height: `390px`,
            width: `390px`,
            borderRadius: `190px 190px 0px 0px`,
          }}
        />
      </AboutContainer>
      <AboutContainer>
        <AboutImg
          srcSet={`${AGirl} 1x,${AGirlL} 2x`}
          src={AGirl}
          alt="Опис зображення й"
          style={{
            height: `450px`,
            width: `501px`,
            borderRadius: `0px 0px 250px 250px`,
          }}
        />
        <AboutImg
          srcSet={`${AsGirl} 1x,${AsGirlL} 2x`}
          src={AsGirl}
          alt="Опис зображення й"
          style={{
            height: `328px`,
            width: `328px`,
            borderRadius: `0px 0px 250px 250px`,
            marginLeft: `296px`,
          }}
        />
      </AboutContainer>
      <AboutContainer>
        <TitleContainer
          style={{
            width: `442px`,
            height: `412px`,
          }}
        >
          <AboutTitle style={{ marginTop: `160px` }}>
            Chat with visitors while they browse your site
          </AboutTitle>
          <AboutSubTitle>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.”
          </AboutSubTitle>
        </TitleContainer>
        <AboutImg
          srcSet={`${AmGirl} 1x,${AmGirlL} 2x`}
          src={AmGirl}
          alt="Опис зображення й"
          style={{
            height: `433px`,
            width: `348px`,
            marginTop: `433px`,
            borderRadius: `0px 0px 190px 190px`,
          }}
        />
        <AboutImg
          srcSet={`${EGirl} 1x,${EGirlL} 2x`}
          src={EGirl}
          alt="Опис зображення й"
          style={{
            height: `433px`,
            width: `348px`,
            marginLeft: `0px`,
            borderRadius: `190px 190px 0px 0px`,
          }}
        />
      </AboutContainer>
      <AboutContainer>
        <AboutImg
          srcSet={`${OGirl} 1x,${OGirlL} 2x`}
          src={OGirl}
          alt="Опис зображення й"
          style={{
            height: `650px`,
            width: `400px`,
            marginLeft: `0px`,
            borderRadius: `190px 190px 190px 190px`,
          }}
        />
        <TitleContainer style={{ marginLeft: `219px`, marginTop: `164px` }}>
          <AboutTitle>
            It’s possible to do video call with your customers
          </AboutTitle>
          <AboutSubTitle>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.”
          </AboutSubTitle>
        </TitleContainer>
      </AboutContainer>
      <AboutContainer style={{ paddingTop: `100px`, paddingBottom: `30px` }}>
        <TitleContainer>
          <AboutTitle>Browse our Case Study</AboutTitle>
          <AboutSubTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </AboutSubTitle>
        </TitleContainer>
        <LinkList>
          <LinkItem>
            <LinkIcon></LinkIcon>
            <ListTitle>Linkedin</ListTitle>
            <LinkArrow></LinkArrow>
          </LinkItem>
          <LinkItem>
            <LinkIcon></LinkIcon>
            <ListTitle>Facebook</ListTitle>
          </LinkItem>
          <LinkItem>
            <LinkIcon></LinkIcon>
            <ListTitle>Telegram</ListTitle>
          </LinkItem>
          <LinkItem>
            <LinkIcon></LinkIcon>
            <ListTitle>Instagram</ListTitle>
          </LinkItem>
        </LinkList>
      </AboutContainer>
      <Footer />
    </>
  );
};

export default About;
