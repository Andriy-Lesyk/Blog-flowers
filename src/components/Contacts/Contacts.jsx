import React from 'react';
import { Formik } from 'formik';
import Container from 'components/Container/Container';
import {
  Section,
  SectionName,
  ContentBox,
  ContentColumn,
  MainText,
  Text,
  Text1,
  ContactForm,
  Input,
  FormBtn,
  Linc,
  Coment,
} from './Contacts.styled';

function Contacts() {
  const handleSubmit = (values, { resetForm }) => {
    console.log('submit');
    resetForm();
  };
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{ name: '', phone: '', email: '', message: '' }}
    >
      {({ values, handleChange }) => (
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

              <ContactForm>
                <Input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                />
                <Input
                  type="tel"
                  placeholder="Your phone"
                  name="phone"
                  onChange={handleChange}
                  value={values.phone}
                />
                <Input
                  type="email"
                  placeholder="Your email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
                <Coment
                  placeholder="Message"
                  type="text"
                  name="message"
                  onChange={handleChange}
                  value={values.message}
                />
                <FormBtn type="submit">Отправить</FormBtn>
              </ContactForm>
            </ContentBox>
          </Section>
        </Container>
      )}
    </Formik>
  );
}

export default Contacts;
