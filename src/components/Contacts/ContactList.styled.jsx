import styled from '@emotion/styled';

export const List = styled.ul`
  max-width: calc(100% - 40px);
  padding: 0 20px 20px;
`;

export const Item = styled.li`
  display: flex;
  cursor: pointer;
  justify-content: start;
  align-items: center;
  font-weight: 500;
  margin-bottom: 10px;
  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background-color: #000000;
    border-radius: 50%;
    margin-right: 10px;
  }
  & > button {
    display: none;
    cursor: pointer;
    width: 80px;
    border-radius: 10px;
    background-color: transparent;
    margin-left: 20px;

    &:hover {
      background-color: aqua;
    }
  }
  &:hover > button {
    display: block;
  }
`;

export const Name = styled.span`
  width: 160px;
`;

export const Number = styled.span`
  width: 80px;
`;

export const Message = styled.li`
  margin: 0px;
  margin-left: 10px;
`;

export const NoteBook = styled.div`
  font: 16px 'AmericanTypewriter', Cambria, Georgia;
  color: #282625;
  margin: 0 auto;
  ${'' /* width: 100%; */}
  padding: 18px 30px 26px;
  position: relative;
  border-radius: 0px 0px 15px 15px;
  border: 1px solid #b5b5b5;
  background: white;
  background: -webkit-linear-gradient(top, #dfe8ec 0%, white 8%) 0 57px;
  background: -moz-linear-gradient(top, #dfe8ec 0%, white 8%) 0 57px;
  background: linear-gradient(top, #dfe8ec 0%, white 8%) 0 57px;
  -webkit-background-size: 100% 30px;
  -moz-background-size: 100% 30px;
  -ms-background-size: 100% 30px;
  background-size: 100% 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &:after {
    content: '';
    position: absolute;
    width: 0px;
    top: 0;
    left: 39px;
    bottom: 0;
    border-left: 1px solid #f8d3d3;
  }
`;

export const NoteBookElement = styled.div`
  margin-top: 30px;
  height: 40px;
  border: 1px solid #b5b5b5;
  border-bottom: none;
  background-color: rgba(255, 240, 0);
  border-radius: 15px 15px 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
