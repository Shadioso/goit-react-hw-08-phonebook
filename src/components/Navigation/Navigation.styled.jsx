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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: black;
  border-radius: 15px;
`;

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
// ======================================================================================================
// ======================================================================================================
// ======================================================================================================
// ======================================================================================================
// ======================================================================================================
// ======================================================================================================

export const Header = styled.header`
  padding-left: 60px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 100px;
  border-radius: {$props=>borderRadius || "20px"};
  bar
  background-color:{$props=>backgroundColor || "white"}; ;
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
  margin-left:{$props => props.marginLeft || '24px'}
`;
// ======================================================================================================
export const NavLinkStyled = styled(NavLink)`
  color: #553c16;
  font-family: Poppins;
  font-size: 13px;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0.5px;
  text-decoration: none;
  text-transform: uppercase;
  &.active {
    color: red;
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
