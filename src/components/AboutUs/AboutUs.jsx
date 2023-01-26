import React from 'react';
import Container from 'components/Container/Container';
import {
  Section,
  SectionName,
  MainBox,
  ContentBox,
  Img,
  TextName,
  MidleText,
  Text,
} from './AboutUs.styled';
import About from '../../images/AboutUs.jpg';

function AboutUs() {
  return (
    <Container>
      <Section>
        <SectionName>О нас</SectionName>
        <MainBox>
          <ContentBox>
            <TextName>Органический трафик</TextName>
            <Text>
              Интерактивные прототипы рассмотрены исключительно в разрезе
              маркетинговых и финансовых предпосылок. Внезапно, представители
              современных социальных резервов объединены в целые кластеры себе
              подобных. Учитывая ключевые сценарии поведения, постоянное
              информационно-пропагандистское
            </Text>
            <Text>
              Обеспечение нашей деятельности требует определения и уточнения
              глубокомысленных рассуждений. А также интерактивные прототипы, вне
              зависимости от их уровня, должны быть разоблачены. Интерактивные
              прототипы неоднозначны должны быть разоблачены. Интерактивные
              прототипы неоднозначны
            </Text>
            <MidleText>
              Но существующая теория, а также свежий взгляд.
            </MidleText>
            <Text>
              Повседневная практика показывает, что консультация с широким
              активом, а также свежий взгляд на привычные вещи
            </Text>
          </ContentBox>
          <ContentBox>
            <Img src={About} />
          </ContentBox>
        </MainBox>
      </Section>
    </Container>
  );
}

export default AboutUs;
