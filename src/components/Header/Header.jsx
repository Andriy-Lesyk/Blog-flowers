import React from 'react';
import Title from '../Title/Title';
import Navigation from 'components/Navigation/Navigation';
import RedButton from '../RedButton/RedButton';
import { Head } from './Header.styled';

function Header() {
  return (
    <Head>
      <Title />
      <Navigation />
      <RedButton />
    </Head>
  );
}

export default Header;
