import React from 'react';
import Container from 'components/Container/Container';
import {
  Section,
  SectionPart,
  SectionName,
  Img,
  Discription,
  Btn,
  Title,
  Number,
  Img2,
} from './BigBuket.styled';
import Roses from '../../images/Roses.jpg';
import bul from '../../images/bullits.jpg';

function BigBuket() {
  return (
    <Container>
      <Section>
        <SectionPart style={{ alignItems: 'center' }}>
          <Img src={Roses} />
          <Title>Целой серии</Title>
          <Number>12</Number>
        </SectionPart>
        <SectionPart>
          <SectionName>Большой букет</SectionName>
          <Discription>
            Но стремящиеся вытеснить традиционное производство, нанотехнологии,
            которые представляют собой яркий пример континентально-европейского
            типа политической культуры, будут подвергнуты целой серии
            независимых исследований. Значимость этих проблем настолько
            очевидна, что существующая
          </Discription>
          <Btn>Читать далее</Btn>
        </SectionPart>
      </Section>
      <Img2 src={bul} />
    </Container>
  );
}

export default BigBuket;
