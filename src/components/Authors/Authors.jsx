import React from 'react';
import Container from 'components/Container/Container';
import {
  Section,
  SectionName,
  CardsBox,
  Card,
  CardImg,
  Position,
  AuthorName,
  SectionBtn,
  Linc,
} from './Authors.styled';
import aut1 from '../../images/aut1.jpg';
import aut2 from '../../images/aut2.jpg';
import aut3 from '../../images/aut3.jpg';
import aut4 from '../../images/aut4.jpg';

function Authors() {
  return (
    <Container>
      <Section>
        <Linc href="#" name="Authors"></Linc>
        <SectionName>Популярные авторы</SectionName>
        <CardsBox>
          <Card>
            <CardImg src={aut1} />
            <Position>Писатель</Position>
            <AuthorName>Наталья Рунова</AuthorName>
          </Card>
          <Card>
            <CardImg src={aut2} />
            <Position>Писатель</Position>
            <AuthorName>Наталья Рунова</AuthorName>
          </Card>
          <Card>
            <CardImg src={aut3} />
            <Position>Писатель</Position>
            <AuthorName>Наталья Рунова</AuthorName>
          </Card>
          <Card>
            <CardImg src={aut4} />
            <Position>Писатель</Position>
            <AuthorName>Наталья Рунова</AuthorName>
          </Card>
        </CardsBox>
        <SectionBtn>Просмотреть еще</SectionBtn>
      </Section>
    </Container>
  );
}

export default Authors;
