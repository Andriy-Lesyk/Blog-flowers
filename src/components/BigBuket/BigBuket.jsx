import Container from 'components/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../../redux/store';
import {
  Section,
  SectionPart,
  SectionName,
  Img,
  Discription,
  Btn,
  Title,
  Number,
  Ol,
  Li,
  Circ,
  BtnLeft,
  BtnRight,
  IconBack,
  IconForw,
} from './BigBuket.styled';
import Roses from '../../images/Roses.jpg';

function BigBuket() {
  let tex = useSelector(state => state.text);
  const dat = useSelector(state => state.data);
  const dispatch = useDispatch();

  let ind = dat.indexOf(dat.find(({ discript }) => discript === tex));

  function left() {
    if (ind > 0) {
      tex = dat[ind - 1].discript;
    }
    return tex;
  }
  function right() {
    if (ind < dat.length - 1) {
      tex = dat[ind + 1].discript;
    }
    return tex;
  }
  function handleClickDot(e) {
    if (typeof e.target.parentElement.parentElement.value === 'number') {
      tex = dat[e.target.parentElement.parentElement.value].discript;
    }
    return tex;
  }
  return (
    <Container>
      <Section>
        <BtnLeft type="button" onClick={() => dispatch(increment(left()))}>
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
          <Discription>{tex}</Discription>
          <Btn>Читать далее</Btn>
        </SectionPart>
        <BtnRight type="button" onClick={() => dispatch(increment(right()))}>
          <IconForw
            style={{
              color: ind === dat.length - 1 ? '#d5dbdb' : 'black',
            }}
          />
        </BtnRight>
      </Section>
      <Ol onClick={e => dispatch(increment(handleClickDot(e)))}>
        {dat.map(({ id, discript }, i) => (
          <Li key={id} value={i}>
            <Circ style={{ fill: ind === i ? 'black' : '#d5dbdb' }} />
          </Li>
        ))}
      </Ol>
    </Container>
  );
}

export default BigBuket;
