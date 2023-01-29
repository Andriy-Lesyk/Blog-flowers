import React from 'react';
import Container from 'components/Container/Container';
import {
  Section,
  SectionName,
  ContentBox,
  ContentColumn,
  MainText,
  Text,
  Text1,
  Form,
  Input,
  FormBtn,
  Linc,
} from './Contacts.styled';

function Contacts() {
  return (
    <Container>
      <Section>
        <Linc href="#" name="Contact"></Linc>
        <SectionName>Контакты</SectionName>
        <ContentBox>
          <ContentColumn>
            <MainText>
              <Text1>Адрес:</Text1> Moscow, Projected passage No. 7029
            </MainText>
            <MainText>
              <Text1>Телефон:</Text1> +7 (988) 888-88-88
            </MainText>
            <MainText>
              <Text1>Fax:</Text1> +7 (988) 888-88-88
            </MainText>
            <MainText style={{ marginTop: '25px' }}>Реквезиты:</MainText>
            <Text>ОКПО 00032547 </Text>
            <Text>ОКАТО 45293554001 </Text>
            <Text>ОКТМО 45397000001</Text>
          </ContentColumn>

          <Form>
            <Input type="text" placeholder="Your name" />
            <Input type="tel" placeholder="Your phone" />
            <Input type="email" placeholder="Your email" />
            <Input
              style={{ height: '150px' }}
              placeholder="Message"
              type="text"
            />
            <FormBtn>Отправить</FormBtn>
          </Form>
        </ContentBox>
      </Section>
    </Container>
  );
}

export default Contacts;
