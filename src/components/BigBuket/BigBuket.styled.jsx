import styled from '@emotion/styled';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { BsCircleFill } from 'react-icons/bs';

export const Section = styled.section`
  margin-top: 120px;
  display: flex;
  padding: 0 93px 0 85px;
  align-items: center;
`;
export const SectionPart = styled.div`
  &:not(:first-of-type) {
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
// export const Img2 = styled.img`
//   display: block;
//   margin: 25px auto;
// `;
export const BtnRight = styled.button`
  background-color: transparent;
  border-color: transparent;
`;
export const BtnLeft = styled.button`
  background-color: transparent;
  border-color: transparent;
`;
export const IconBack = styled(MdArrowBackIos)`
  width: 25px;
  height: 26px;
`;
export const IconForw = styled(MdArrowForwardIos)`
  width: 25px;
  height: 26px;
`;
export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  width: max-content;
  margin: 25px auto 0;
`;
export const Li = styled.li`
  &:not(:first-of-type) {
    margin-left: 15px;
  }
  list-style-type: none;
`;
export const Circ = styled(BsCircleFill)`
  width: 10px;
  fill: red;
`;
