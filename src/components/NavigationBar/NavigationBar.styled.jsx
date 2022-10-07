import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Menu = styled.div`
  padding: 8px;
`;

export const MenuLink = styled(NavLink)`
  font-size: 26px;
  color: black;
  text-decoration: none;
  padding: 5px;

  &.active {
    color: orange;
  }
`;
