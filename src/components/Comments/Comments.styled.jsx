import styled from '@emotion/styled/macro';
// ==================================================================

export const AuthContainer = styled.div`
  position: absolute;
  top: 84%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 670px;
  height: 115px;
  background-color: #fff;
  border-radius: 64px;
  ${'' /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */}
  box-shadow:0px 30px 80px rgba(47, 65, 88, 0.20);
  z-index: 10;
`;
// ==================================================================

export const AuthTitle = styled.h2`
  color: #000;
  font-family: Poppins;
  font-size: 23px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0.23px;
`;
// ==================================================================
export const AuthButton = styled.button`
  width: 190px;
  height: 67px;
  color: #fff;
  background-color: #725ba1;
  padding: 23px 64px;
`;
