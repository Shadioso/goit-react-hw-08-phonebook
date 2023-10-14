import styled from '@emotion/styled';

export const HelloTitle = styled.h1`
  display: table;
  margin-left: auto;
  margin-right: auto;
`;

// ===========================================================
export const Main = styled.main`
  padding-top: 110px;
  padding-left: 130px;
`;
// ===========================================================
export const ConnectContainer = styled.div`
  display: flex;
`;
// ===========================================================

export const TitleContainer = styled.div`
  display: block;
  width: 498px;
  height: 302px;
`;
// ===========================================================
export const ConnectTitle = styled.h1`
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
export const ConnectSubTitle = styled.p`
  margin: 0px;
  color: #21383e;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.5px;
`;
// ===========================================================
export const ConnectImg = styled.img`
  display: block;
  width: ${props => props.width || `200px`};
  height: ${props => props.height || `200px`};
  margin-left: 94px;
  border-radius: ${props => props.borderRadius || `0px 0px 0px 0px`};
`;
