import styled from '@emotion/styled';

export const Section = styled.section`
  margin-top: 164px;
  padding: 0 233px;
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
export const ContentBox = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 378px 406px;
`;
export const ContentColumn = styled.div``;
export const MainText = styled.p`
  margin: 0;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
`;
export const Text1 = styled.span`
  margin: 0;
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;
export const Text = styled.p`
  margin: 0;
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;
export const Form = styled.form``;
export const Input = styled.input`
  width: 406px;
  height: 40px;
  border: 1px solid #828282;
  border-radius: 5px;
  margin-bottom: 10px;
  padding-left: 15px;
  &::placeholder {
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 14px;
  }
`;
export const FormBtn = styled.button`
  width: 406px;
  height: 39px;
  background: #eb174a;
  border-radius: 5px;
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  border-color: #eb174a;
`;
