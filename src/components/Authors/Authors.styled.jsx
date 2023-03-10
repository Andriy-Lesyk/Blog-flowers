import styled from '@emotion/styled';

export const Section = styled.section`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SectionName = styled.h1`
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 32px;
  margin: 0;
`;
export const CardsBox = styled.div`
  display: flex;
  margin-top: 40px;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:first-of-type) {
    margin-left: 30px;
  }
`;
export const CardImg = styled.img``;
export const Position = styled.span`
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 20px;
  margin-top: 20px;
`;
export const AuthorName = styled.span`
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 16px;
  margin-top: 10px;
`;
export const SectionBtn = styled.button`
  width: 196px;
  height: 44px;
  border-radius: 30px;
  margin-top: 30px;
  &:hover,
  &:focus {
    scale: 1.05;
  }
`;
export const Linc = styled.a``;
