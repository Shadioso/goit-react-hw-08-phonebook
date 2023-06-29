import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  margin-left: 20px;
  border-radius: 20px;
  background-color: darkgrey;
  color: white;
`;
export const ItemNav = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  margin-right: auto;
  margin-left: 10px;
  border-radius: 20px;
  background-color: darkgrey;
  color: white;
`;

export const ItemUser = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  margin-left: auto;
  border-radius: 20px;
  background-color: darkgrey;
  color: white;
`;

export const NavList = styled.ul`
  position: relative;
  background-color: dodgerblue;
  list-style: none;
  padding: 20px;
  margin: 0px;
  display: flex;
`;

export const NavLinkStyled = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: 700;
  &.active {
    color: white;
  }
`;

export const Title = styled.h1`
  position: absolute;
  top: 5%;
  left: 43%;
`;

export const Stroke = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
