import styled from '@emotion/styled';

// ===========================================================
export const AboutContainer = styled.div`
  display: flex;
`;
// ===========================================================

export const TitleContainer = styled.div`
  display: block;
  width: ${props => props.width || '498px'};
  height: ${props => props.height || '302px'};
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
`;
// ===========================================================
export const LinkList = styled.ul`
  list-style: none;
  margin: 0px;
  margin-left: 219px;
`;
// ===========================================================
export const LinkItem = styled.li`
  display: flex;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 10px;
`;
// ===========================================================
export const Link = styled.svg``;
// ===========================================================

export const LinkIcon = styled.a``;
// ===========================================================
export const ListTitle = styled.h2`
  margin: 0px;
  color: #000;
  font-family: Poppins;
  font-size: 35px;
  font-weight: 400;
  line-height: 70px;
  letter-spacing: 0.833px;
`;
// ===========================================================
export const Footer = styled.div`
  width: 100%;
  height: 30px;
  background-color: rgb(209 208 205);
`;
