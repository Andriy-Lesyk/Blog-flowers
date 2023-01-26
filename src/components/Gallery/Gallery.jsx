import React from 'react';
import Container from 'components/Container/Container';
import {
  Section,
  SectionName,
  GallaryBox,
  Column,
  Img,
  Btn,
} from './Gallery.styled';
import g1 from '../../images/1.jpg';
import g2 from '../../images/2.jpg';
import g3 from '../../images/3.jpg';
import g4 from '../../images/4.jpg';
import g5 from '../../images/5.jpg';
import g6 from '../../images/6.jpg';
import g7 from '../../images/7.jpg';
import g8 from '../../images/8.jpg';
import g9 from '../../images/9.jpg';
import g10 from '../../images/10.jpg';
import g11 from '../../images/11.jpg';

function Gallery() {
  return (
    <Container>
      <Section>
        <SectionName>Галерея</SectionName>
        <GallaryBox>
          <Column>
            <Img src={g1} />
            <Img src={g2} />
            <Img src={g3} />
            <Img src={g4} />
          </Column>
          <Column>
            <Img src={g5} />
            <Img src={g6} />
            <Img src={g7} />
            <Img src={g8} />
          </Column>
          <Column>
            <Img src={g9} />
            <Img src={g10} />
            <Img src={g11} />
          </Column>
        </GallaryBox>
        <Btn>Загрузить еще</Btn>
      </Section>
    </Container>
  );
}

export default Gallery;
