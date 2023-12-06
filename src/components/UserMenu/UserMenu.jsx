import { useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { logOut } from 'services/api';
import {
  Item,
  NavLinkStyled,
  UserMenuItem,
  Stroke,
  UserMenuBox,
} from 'components/Navigation/Navigation.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <>
      <UserMenuItem>
        <NavLinkStyled to="/contacts">CONTACTS</NavLinkStyled>
      </UserMenuItem>
      <UserMenuBox>
        <UserMenuItem>
          <Stroke>✉️ {user.email}</Stroke>
        </UserMenuItem>
        <Item>
          <NavLinkStyled to="/" onClick={handleLogOut}>
            LOG OUT
          </NavLinkStyled>
        </Item>
      </UserMenuBox>
    </>
  );
};
