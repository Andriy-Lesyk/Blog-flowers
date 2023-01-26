import styled from '@emotion/styled';

export const Section = styled.section`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SectionName = styled.h2`
  margin: 0;
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 32px;
`;
export const GallaryBox = styled.div`
  margin-top: 40px;
  display: flex;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:first-child) {
    margin-left: 15px;
  }
`;
export const Img = styled.img`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Btn = styled.button`
  width: 173px;
  height: 44px;
  border-radius: 30px;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 15px;
  margin-top: 40px;
`;
