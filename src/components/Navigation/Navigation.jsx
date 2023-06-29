import { NavList, Item, NavLinkStyled, ItemUser } from './Navigation.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { selectLoggedUser } from 'redux/selectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(selectLoggedUser);
  // const isLoggedIn = true;

  return (
    <nav>
      <NavList>
        <Item>
          <NavLinkStyled to="/">Home</NavLinkStyled>
        </Item>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <>
            <ItemUser>
              <NavLinkStyled to="/register">SIGN UP</NavLinkStyled>
            </ItemUser>
            <Item>
              <NavLinkStyled to="/login">LOGIN</NavLinkStyled>
            </Item>
          </>
        )}
      </NavList>
    </nav>
  );
};

export default Navigation;
