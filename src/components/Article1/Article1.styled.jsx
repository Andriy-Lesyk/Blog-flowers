import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  &:not(:first-child) {
    margin-top: 40px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  //width: 610px;
  &:not(:last-child) {
    margin-right: 30px;
  }
`;
export const CardImg = styled.img`
  // width: 610px;
`;
export const CardName = styled.p`
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 20px;
  margin: 25px 0 0 0;
`;
export const CardDiscript = styled.span`
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 16px;
  margin-top: 8px;
`;
export const CardBtn = styled.button`
  width: 146px;
  height: 39px;
  border-radius: 30px;
  border: 1px solid #202020;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 14px;
  margin-top: 15px;
`;
