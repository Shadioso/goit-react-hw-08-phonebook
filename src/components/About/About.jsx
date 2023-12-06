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
import AuthMsg from 'components/Comments/AuthMsg';
import Message from 'components/Comments/Message';
import {
  AboutContainer,
  AboutTitle,
  AboutImg,
  AboutSubTitle,
  TitleContainer,
  LinkList,
  Link,
  LinkItem,
  ListTitle,
  Instagram,
  Linkedin,
  IconBox,
  Footer,
  Facebook,
  Twitter,
  WebAlert,
} from './About.styled';
const About = () => {
  return (
    <>
      <AboutContainer>
        <TitleContainer>
          <AboutTitle>
            Use the Phonebook and add contacts of your business partners
          </AboutTitle>
        </TitleContainer>

        <AboutImg
          loading="lazy"
          srcSet={`${KGirl} 1x,${KGirlL} 2x`}
          src={KGirl}
          alt="Опис зображення й"
          height={`390px`}
          width={`390px`}
          borderRadius={`190px 190px 0px 0px`}
        />
        <AuthMsg />
      </AboutContainer>
      <AboutContainer>
        <AboutImg
          loading="lazy"
          srcSet={`${AGirl} 1x,${AGirlL} 2x`}
          src={AGirl}
          alt="Опис зображення й"
          height={`450px`}
          width={`501px`}
          borderRadius={`0px 0px 250px 250px`}
        />
        <AboutImg
          loading="lazy"
          srcSet={`${AsGirl} 1x,${AsGirlL} 2x`}
          src={AsGirl}
          alt="Опис зображення й"
          height={`328px`}
          width={`328px`}
          borderRadius={`0px 0px 250px 250px`}
          marginLeft={`296px`}
        />
      </AboutContainer>
      <AboutContainer>
        <TitleContainer width={`442px`} height={`482px`}>
          <AboutTitle marginTop={`90px`}>
            Add new phone numbers in one click
          </AboutTitle>
          <AboutSubTitle>
            While potential business partners are browsing your page, you can
            share your contacts with them for cooperation
          </AboutSubTitle>
        </TitleContainer>
        <AboutImg
          loading="lazy"
          srcSet={`${AmGirl} 1x,${AmGirlL} 2x`}
          src={AmGirl}
          alt="Опис зображення й"
          height={`433px`}
          width={`348px`}
          marginTop={`433px`}
          borderRadius={`0px 0px 190px 190px`}
        />
        <AboutImg
          loading="lazy"
          srcSet={`${EGirl} 1x,${EGirlL} 2x`}
          src={EGirl}
          alt="Опис зображення й"
          height={`433px`}
          width={`348px`}
          marginLeft={`0px`}
          borderRadius={`190px 190px 0px 0px`}
        />
        <Message />
        <WebAlert />
      </AboutContainer>
      <AboutContainer>
        <AboutImg
          loading="lazy"
          srcSet={`${OGirl} 1x,${OGirlL} 2x`}
          src={OGirl}
          alt="Опис зображення й"
          height={`650px`}
          width={`400px`}
          marginLeft={`0px`}
          borderRadius={`190px 190px 190px 190px`}
        />
        <TitleContainer marginLeft={`219px`} marginTop={`164px`}>
          <AboutTitle>
            It’s possible to check,how many people have saved your phone number
          </AboutTitle>
          <AboutSubTitle>
            This is a great opportunity to check the number of encouraged people
            in cooperation and the activity of users on the website
          </AboutSubTitle>
        </TitleContainer>
      </AboutContainer>
      <AboutContainer paddingTop={`100px`} paddingBottom={`30px`}>
        <TitleContainer>
          <AboutTitle>Browse our team and partners</AboutTitle>
          <AboutSubTitle>
            This is a redesigned demo version of the website, builded using the
            React.js library.If you are interested in my works, visit one of the
            proposed social networks.
          </AboutSubTitle>
        </TitleContainer>
        <LinkList>
          <LinkItem>
            <Link
              href="https://www.linkedin.com/in/shadi-abumutair"
              target="blank"
            >
              <IconBox>
                <Linkedin />
              </IconBox>
              <ListTitle>Linkedin</ListTitle>
            </Link>
          </LinkItem>
          <LinkItem>
            <Link
              href="https://www.facebook.com/profile.php?id=100033617282668"
              target="blank"
            >
              <IconBox>
                <Facebook />
              </IconBox>
              <ListTitle>Facebook</ListTitle>
            </Link>
          </LinkItem>
          <LinkItem>
            <Link
              href="https://instagram.com/shaaaa_di?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr"
              target="blank"
            >
              <IconBox>
                <Instagram />
              </IconBox>
              <ListTitle>Instagram</ListTitle>
            </Link>
          </LinkItem>
          <LinkItem>
            <Link
              href="https://www.linkedin.com/in/shadi-abumutair"
              target="blank"
            >
              <IconBox>
                <Twitter />
              </IconBox>
              <ListTitle>Twitter</ListTitle>
            </Link>
          </LinkItem>
        </LinkList>
      </AboutContainer>
      <Footer />
    </>
  );
};

export default About;
