import React from 'react';
import { Img, Name, Titl } from './Title.styled';
import Logo from '../../images/photo.jpeg';

function Title() {
  return (
    <Titl>
      <Img src={Logo} />
      <Name>Аленький цветочек</Name>
    </Titl>
  );
}

export default Title;
