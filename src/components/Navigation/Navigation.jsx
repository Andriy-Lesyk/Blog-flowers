import React from 'react';
import { Nav, NavList, NavItem, NavItemLink } from './Navigation.styled';

function Navigation() {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavItemLink href="#">Статьи</NavItemLink>
          <NavItemLink href="#AboutUs">О нас </NavItemLink>
          <NavItemLink href="#Authors">Авторы</NavItemLink>
          <NavItemLink href="#Contact">Контакты</NavItemLink>
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default Navigation;
