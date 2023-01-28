import styled from '@emotion/styled';

export const Section = styled.section`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SectionName = styled.h2`
  margin: 0;
  margin-bottom: 40px;
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 32px;
`;
export const MainBox = styled.div`
  display: flex;
`;
export const ContentBox = styled.div`
  margin: 0;
  &:not(:first-of-type) {
    margin-left: 40px;
  }
`;
export const Img = styled.img``;
export const TextName = styled.p`
  margin: 0;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 32px;
  margin-bottom: 7px;
`;
export const MidleText = styled.p`
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 20px;
  margin: 20px 0 9px 0;
`;
export const Text = styled.p`
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 17px;
  line-height: 26px;
`;
