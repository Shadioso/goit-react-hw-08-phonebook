import styled from '@emotion/styled/macro';
// ==================================================================

export const AuthContainer = styled.div`
  position: absolute;
  top: 84%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 615px;
  height: 115px;
  padding-left: 40px;
  padding-right: 28px;

  background-color: #fff;
  border-radius: 12px;
  ${'' /* box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.35); */}
  box-shadow:0px 30px 80px rgba(47, 65, 88, 0.20);
  z-index: 10;
`;
// ==================================================================

export const AuthTitle = styled.h2`
  color: dimgray;
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
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.323px;
  background-color: #725ba1;
  padding: 23px 64px;
  border: none;
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    scale: 1.1;
    transition: 0.3s;
  }
`;
// ==================================================================
export const TextMsgBox = styled.div`
  position: absolute;
  width: ${props => props.width || `234px`};
  height: ${props => props.height || `94px`};
  background-color: ${props => props.backColor || `rgba(114, 105, 133, 1)`};
  border-radius: ${props => props.borderRadius || `20px 20px 0px 20px`};
  top: ${props => props.top || `0%`};
  left: ${props => props.left || `0%`};
`;
// ==================================================================
export const TextMsg = styled.p`
  display: block;
  margin: 0px;
  color: #fff;
  font-family: Poppins;
  font-size: 14px;
  padding: 14px 30px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.3px;
`;
