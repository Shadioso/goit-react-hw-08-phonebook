import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
// ======================================================================================================
export const LogoBox = styled.div`
  display: flex;
  height: 30px;
  justify-content: center;
  align-items: center;
  height: auto;
`;

// ======================================================================================================

export const Nav = styled.nav`
  display: flex;
  width: 100%;
`;
// ======================================================================================================
export const LogoIcon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: black;
  border-radius: 15px;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #ffee10;
    transition: 0.5s;
    transform: scale(0.9);
    z-index: -1;
  }
  &:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 15px #ffee10;
  }
`;
// ======================================================================================================

export const LogoElement = styled.span`
  color: #fff;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 700;
  line-height: 12px;
`;
// ======================================================================================================

export const LogoTitle = styled.span`
  margin-left: 10px;
  color: #121212;
  text-transform: uppercase;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 1px;
`;
// ======================================================================================================

export const Header = styled.header`
  padding-left: 60px;
`;
// ======================================================================================================

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 100px;
  border-radius: ${props => props.borderRadius || '20px'};
  background-color: ${props => props.backgroundColor || 'white'};
  color: white;
`;
// ======================================================================================================
export const ItemNav = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  border-radius: 20px;
  background-color: darkgrey;
  color: white;
`;

// ======================================================================================================
export const NavList = styled.ul`
  position: relative;
  list-style: none;
  margin: 0px;
  padding: 0px;
  display: flex;
  margin-left: ${props => props.marginLeft || '24px'};
`;
// ======================================================================================================

export const NavLinkStyled = styled(NavLink)`
  position: relative;
  display: block;
  text-transform: uppercase;
  margin: 20px 0;
  padding: 10px 20px;
  text-decoration: none;
  color: #262626;
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 600;
  transition: 0.5s;
  z-index: 1;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-top: 2px solid #262626;
    border-bottom: 2px solid #262626;
    transform: scaleY(2);
    opacity: 0;
    transition: 0.3s;
  }
  &:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #262626;
    transform: scale(0);
    opacity: 0;
    transition: 0.3s;
    z-index: -1;
  }
  &:hover {
    color: #fff;
    &:before {
      transform: scaleY(1);
      opacity: 1;
    }
    &:after {
      transform: scaleY(1);
      opacity: 1;
    }
  }
`;
// ======================================================================================================
export const Title = styled.h1`
  position: absolute;
  top: 5%;
  left: 43%;
`;
// ======================================================================================================
export const Stroke = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
