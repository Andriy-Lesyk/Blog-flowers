import React, { useState } from 'react';
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
  Ul,
  Li,
  Circ,
  BtnLeft,
  BtnRight,
  IconBack,
  IconForw,
} from './BigBuket.styled';
import Roses from '../../images/Roses.jpg';

import data from '../../data.json';

function BigBuket() {
  const [text, setText] = useState(data[1].discript);
  const arr = data;

  let ind = data.indexOf(data.find(({ discript }) => discript === text));

  function left() {
    if (ind > 0) {
      setText(data[ind - 1].discript);
    }
  }
  function right() {
    if (ind < data.length - 1) {
      setText(data[ind + 1].discript);
    }
  }
  return (
    <Container>
      <Section>
        <BtnLeft type="button" onClick={left}>
          <IconBack
            style={{
              color: ind === 0 ? '#d5dbdb' : 'black',
            }}
          />
        </BtnLeft>
        <SectionPart style={{ alignItems: 'center' }}>
          <Img src={Roses} />
          <Title>Целой серии</Title>
          <Number>12</Number>
        </SectionPart>
        <SectionPart>
          <SectionName>Большой букет</SectionName>
          <Discription>{text}</Discription>
          <Btn>Читать далее</Btn>
        </SectionPart>
        <BtnRight type="button" onClick={right}>
          <IconForw
            style={{
              color: ind === data.length - 1 ? '#d5dbdb' : 'black',
            }}
          />
        </BtnRight>
      </Section>
      <Ul>
        {arr.map(({ id, discript }, i) => (
          <Li key={id}>
            <Circ style={{ fill: ind === i ? 'black' : '#d5dbdb' }} />
          </Li>
        ))}
      </Ul>
    </Container>
  );
}

export default BigBuket;
