import React from 'react';
import { Nav, NavList, NavItem, NavItemLink } from './Navigation.styled';

function Navigation() {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavItemLink href="#">Статьи</NavItemLink>
          <NavItemLink href="#">О нас </NavItemLink>
          <NavItemLink href="#">Интересное</NavItemLink>
          <NavItemLink href="#">Контакты</NavItemLink>
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default Navigation;
