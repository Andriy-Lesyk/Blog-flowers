import React from 'react';
import sprite from '../../images/sprite.svg';
import {
  Section,
  MainBox,
  LeftBox,
  RightBox,
  MainText,
  MainText1,
  Column,
  Text,
  Text1,
  IconsBlock,
  IconLink,
  Icon,
  AddBlock,
  AddText,
  TextBox,
} from './Footer.styled';

function Footer() {
  return (
    <div>
      <Section>
        <MainBox>
          <LeftBox>
            <MainText1>Consequat orci, risus</MainText1>
            <Text1>
              Nulla tellus diam ornare id purus et nisi facilisis nec. Orci
              nullam ornare quisque mollis sollicitudin. Ante risus lorem
              pellentesque orci.
            </Text1>
            <Text1 style={{ marginTop: '25px' }}>Join the community</Text1>
            <IconsBlock>
              <IconLink href="#">
                <Icon>
                  <use href={sprite + '#1'} />
                </Icon>
              </IconLink>
              <IconLink href="#">
                <Icon>
                  <use href={sprite + '#2'} />
                </Icon>
              </IconLink>
              <IconLink href="#">
                <Icon>
                  <use href={sprite + '#3'} />
                </Icon>
              </IconLink>
              <IconLink href="#">
                <Icon>
                  <use href={sprite + '#4'} />
                </Icon>
              </IconLink>
              <IconLink href="#">
                <Icon>
                  <use href={sprite + '#5'} />
                </Icon>
              </IconLink>
              <IconLink href="#">
                <Icon>
                  <use href={sprite + '#6'} />
                </Icon>
              </IconLink>
            </IconsBlock>
          </LeftBox>
          <RightBox>
            <Column>
              <MainText>Marketplace</MainText>
              <Text>Shop</Text>
              <Text>About</Text>
              <Text>Gallery</Text>
              <Text>Contact</Text>
            </Column>
            <Column>
              <MainText>Resource</MainText>
              <Text>Sed</Text>
              <Text>Vitae</Text>
              <Text>Tellus</Text>
              <Text>Dui</Text>
            </Column>
            <Column>
              <MainText>My Account</MainText>
              <Text>Congue</Text>
              <Text>Augue</Text>
              <Text>Posuere</Text>
              <Text>Molestie</Text>
            </Column>
            <Column>
              <MainText>Company</MainText>
              <Text>Cras</Text>
              <Text>Tincidunt</Text>
              <Text>Gravida</Text>
              <Text>Mattis</Text>
            </Column>
          </RightBox>
        </MainBox>
      </Section>
      <AddBlock>
        <AddText>Copyright ® 2021</AddText>
        <TextBox>
          <AddText style={{ marginRight: '50px' }}>Policy</AddText>
          <AddText>Security</AddText>
        </TextBox>
      </AddBlock>
    </div>
  );
}

export default Footer;
