import styled from '@emotion/styled';

export const Section = styled.section`
  margin: 96px auto 0;
  background: #2b2b2b;
  padding: 40px 58px 20px;
  width: 1366px;
`;
export const MainBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const LeftBox = styled.div`
  width: 330px;
  margin-right: 185px;
`;
export const RightBox = styled.div`
  display: grid;
  grid-template-columns: 229px 201px 222px 83px;
`;
export const Column = styled.div``;
export const MainText = styled.p`
  margin: 0;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: white;
  margin-bottom: 30px;
`;
export const MainText1 = styled.p`
  margin: 0;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  color: white;
  margin-bottom: 5px;
`;
export const Text = styled.p`
  margin: 0;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  color: white;
  &:not(:first-child) {
    margin-top: 15px;
  }
`;
export const Text1 = styled.p`
  margin: 0;
  line-height: 25px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: white;
`;
export const IconsBlock = styled.div`
  display: flex;
  margin-top: 12px;
`;
export const IconLink = styled.a`
  &:not(:last-child) {
    margin-right: 25px;
  }
`;
export const Icon = styled.svg`
  width: 24px;
  height: 24px;
`;
export const AddBlock = styled.div`
  display: flex;
  width: 1366px;
  padding: 21px 58px;
  justify-content: space-between;
  background: #212121;
  margin: 0 auto;
`;
export const AddText = styled.span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: white;
`;
export const TextBox = styled.div``;
