import React from 'react';
import Container from 'components/Container/Container';
import {
  Section,
  Card,
  CardImg,
  CardName,
  CardDiscript,
  CardBtn,
} from './Article1.styled';
import Art1 from '../../images/art1.jpg';
import Art2 from '../../images/art2.jpg';
import Art3 from '../../images/Art3.jpg';
import Art4 from '../../images/Art4.jpg';
import Art5 from '../../images/Art5.jpg';

function Article1() {
  return (
    <Container>
      <Section>
        <Card>
          <CardImg src={Art1} />
          <CardName>Окрестности Тулы оросил далёкий барабанный бой</CardName>
          <CardDiscript>
            Для современного мира социально-экономическое развитие обеспечивает
            актуальность экономической целесообразности принимаемых решений. А
            также сделанные на базе интернет-аналитики выводы.
          </CardDiscript>
          <CardBtn>Читать далее</CardBtn>
        </Card>
        <Card>
          <CardImg src={Art2} />
          <CardName>Сложно сказать, почему предприниматели в сети</CardName>
          <CardDiscript>
            Постоянное информационно-пропагандистское обеспечение нашей
            деятельности требует анализа стандартных подходов. Прежде всего,
            курс на социально-ориентированный национальный проект
          </CardDiscript>
          <CardBtn>Читать далее</CardBtn>
        </Card>
      </Section>
      <Section>
        <Card>
          <CardImg src={Art3} />
          <CardName>Воистину радостный звук: далёкий барабанный бой</CardName>
          <CardDiscript>
            Каждый из нас понимает очевидную вещь: внедрение современных методик
            предполагает независимые способы реализации{' '}
          </CardDiscript>
          <CardBtn>Читать далее</CardBtn>
        </Card>
        <Card>
          <CardImg src={Art4} />
          <CardName>
            На двадцатом съезде партии прозвучало поразительное
          </CardName>
          <CardDiscript>
            Вот вам яркий пример современных тенденций - семантический разбор
            внешних противодействий представляет собой
          </CardDiscript>
          <CardBtn>Читать далее</CardBtn>
        </Card>
        <Card>
          <CardImg src={Art5} />
          <CardName>Был сорван доклад председателя совхоза</CardName>
          <CardDiscript>
            Идейные соображения высшего порядка, а также существующая теория
            является качественно новой ступенью модели развития.
          </CardDiscript>
          <CardBtn>Читать далее</CardBtn>
        </Card>
      </Section>
    </Container>
  );
}

export default Article1;
