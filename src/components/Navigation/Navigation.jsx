import {
  NavList,
  Item,
  NavLinkStyled,
  Header,
  LogoBox,
  Nav,
  LogoIcon,
  LogoElement,
  LogoTitle,
} from './Navigation.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { selectLoggedUser } from 'redux/selectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(selectLoggedUser);

  return (
    <Header>
      <Nav>
        <LogoBox>
          <LogoIcon>
            <LogoElement>P</LogoElement>
          </LogoIcon>
          <LogoTitle>Phonebook</LogoTitle>
        </LogoBox>
        <NavList style={{ marginLeft: `70px` }}>
          <Item>
            <NavLinkStyled to="/">About us</NavLinkStyled>
          </Item>
        </NavList>

        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <>
            <NavList style={{ marginLeft: `auto` }}>
              <Item>
                <NavLinkStyled to="/register">Sign up</NavLinkStyled>
              </Item>
              <Item
                style={{
                  borderRadius: `0px 0px 0px 50px`,
                  backgroundColor: ` #F5F2EC`,
                  backgroundColorHover: ` #fff`,
                }}
              >
                <NavLinkStyled to="/login">Login</NavLinkStyled>
              </Item>
            </NavList>
          </>
        )}
      </Nav>
    </Header>
  );
};

export default Navigation;
