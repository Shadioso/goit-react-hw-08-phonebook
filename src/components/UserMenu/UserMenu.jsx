import { useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { logOut } from 'services/api';
import {
  Item,
  NavLinkStyled,
  ItemNav,
  Title,
  Stroke,
} from 'components/Navigation/Navigation.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <>
      <Title>Welcome, {user.name} 😎</Title>
      <ItemNav>
        <NavLinkStyled to="/contacts">CONTACTS</NavLinkStyled>
      </ItemNav>
      <li>
        <Stroke>✉️ {user.email}</Stroke>
      </li>
      <Item>
        <NavLinkStyled to="/" onClick={handleLogOut}>
          LOG OUT
        </NavLinkStyled>
      </Item>
    </>
  );
};
