import styled from '@emotion/styled';

export const Nav = styled.nav``;

export const NavList = styled.ul`
  padding: 0;
`;
export const NavItem = styled.li`
  list-style-type: none;
`;
export const NavItemLink = styled.a`
  font-size: 15px;
  font-family: 'Open Sans';
  font-weight: 600;
  &:not(:last-child) {
    margin-right: 50px;
  }
`;
