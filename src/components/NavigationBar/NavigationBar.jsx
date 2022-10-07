import { Menu, MenuLink } from './NavigationBar.styled';

const NavigationBar = () => {
  return (
    <Menu>
      <MenuLink to="/" end>
        Home
      </MenuLink>
      <MenuLink to="/movies">Movies</MenuLink>
    </Menu>
  );
};

export default NavigationBar;
