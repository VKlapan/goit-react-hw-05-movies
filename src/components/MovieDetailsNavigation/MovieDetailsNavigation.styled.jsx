import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const DetailsMenu = styled.div`
  padding: 8px;
  border-bottom: solid 2px grey;
`;

export const DetailsLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 400;
  color: black;
  padding: 5px;

  &.active {
    color: orange;
  }
`;
