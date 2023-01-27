import styled from '@emotion/styled';

export const Section = styled.section`
  margin-top: 120px;
  display: flex;
  padding: 0 118px 0 110px;
`;
export const SectionPart = styled.div`
  &:not(:first-child) {
    margin-left: 40px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Img = styled.img``;
export const SectionName = styled.h2`
  margin: 0;
`;
export const Discription = styled.span`
  margin-top: 15px;
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 17px;
  line-height: 27px;
`;
export const Btn = styled.button`
  width: 159px;
  height: 42px;
  margin-top: 25px;
  border-radius: 30px;
  background: #eb174a;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 16px;
`;
export const Title = styled.span`
  margin-top: 10px;
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 17px;
`;
export const Number = styled.span`
  margin-top: 5px;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 20px;
`;
export const Img2 = styled.img`
  display: block;

  margin: 25px auto;
`;
