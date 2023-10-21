// import styled from '@emotion/styled';
import styled from '@emotion/styled/macro';
import { ReactComponent as InstagramIcon } from '../../images/instagram.svg';
import { ReactComponent as LinkedinIcon } from '../../images/linkedin.svg';
import { ReactComponent as FacebookIcon } from '../../images/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../images/twitter.svg';

// ===========================================================
export const AboutContainer = styled.div`
  position: relative;
  display: flex;
  padding-top: ${props => props.paddingTop || `0px`};
  padding-bottom: ${props => props.paddingBottom || `0px`};
`;
// ===========================================================

export const TitleContainer = styled.div`
  display: block;
  width: ${props => props.width || '498px'};
  height: ${props => props.height || '302px'};
  margin-left: ${props => props.marginLeft || `0px`};
  margin-top: ${props => props.marginTop || `0px`};
`;
// ===========================================================
export const AboutTitle = styled.h1`
  color: #121212;
  font-family: Poppins;
  font-size: 60px;
  font-weight: 400;
  line-height: 72px;
  margin: 0px;
  margin-bottom: 34px;
  letter-spacing: -0.5px;
  margin-top: ${props => props.marginTop || `0px`};
`;
// ===========================================================
export const AboutSubTitle = styled.p`
  margin: 0px;
  color: #21383e;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.5px;
`;
// ===========================================================
export const AboutImg = styled.img`
  display: block;
  width: ${props => props.width || `200px`};
  height: ${props => props.height || `200px`};
  margin-left: ${props => props.marginLeft || `94px`};
  border-radius: ${props => props.borderRadius || `0px 0px 0px 0px`};
  margin-top: ${props => props.marginTop || `0px`};
`;
// ===========================================================
export const LinkList = styled.ul`
  list-style: none;
  margin: 0px;
  margin-left: 178px;
`;
// ===========================================================

export const Link = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
`;
// ===========================================================
export const Instagram = styled(InstagramIcon)`
  ${Link}:hover & {
    transform: rotateY(360deg);
    & path {
      fill: #fff;
    }
  }
  width: 30px;
  height: 30px;
  z-index: 3;
  transition: 0.5s;
`;
// ===========================================================
export const Linkedin = styled(LinkedinIcon)`
  ${Link}:hover & {
    transform: rotateY(360deg);
    & path {
      fill: #fff;
    }
  }
  z-index: 3;
  width: 30px;
  height: 30px;
  transition: 0.5s;
`;
// ===========================================================
export const Facebook = styled(FacebookIcon)`
  ${Link}:hover & {
    transform: rotateY(360deg);
    & path {
      fill: #fff;
    }
  }
  width: 30px;
  height: 30px;
  z-index: 3;

  transition: 0.5s;
`;
// ===========================================================
export const Twitter = styled(TwitterIcon)`
  ${Link}:hover & {
    transform: rotateY(360deg);
    & path {
      fill: #fff;
    }
  }
  width: 30px;
  height: 30px;
  z-index: 3;

  transition: 0.5s;
`;
// ===========================================================

export const LinkItem = styled.li`
  margin-top: 0px;
  margin-bottom: 20px;
  &:after {
    display: block;
    content: '';
    height: 1px;
    margin-top: 30px;
    width: 100%;
    background: rgb(209 208 205);
  }
`;

// ===========================================================
export const IconBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgb(209 208 205);
  &:before {
    ${Link}:hover & {
      top: 0%;
      background: #0077b5;
    }
    content: '';
    position: absolute;
    top: 100%;
    left: 0%;
    width: 100%;
    height: 100%;
    background: #fff;
    transition: 0.5s;
    z-index: 2;
  }
`;
// ===========================================================

export const ListTitle = styled.h2`
  margin: 0px;
  margin-left: 94px;
  color: #000;
  font-family: Poppins;
  font-size: 35px;
  font-weight: 400;
  line-height: 70px;
  letter-spacing: 0.833px;
  transition: 0.1s;
  ${Link}:hover & {
    scale: 1.1;
    transition: 0.1s;
  }
`;
// ===========================================================
export const Footer = styled.div`
  width: 100%;
  height: 30px;
  background-color: rgb(209 208 205);
`;
