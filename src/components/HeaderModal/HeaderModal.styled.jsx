import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Modal = styled.div`
  position: relative;
  width: 610px;
  height: 422px;
  border-radius: 30px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

export const ModalTitle = styled.h2`
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 21px;
  margin: 20px 0;
`;

export const Input = styled.input`
  width: 570px;
  height: 36px;
  border-radius: 30px;
  padding: 0 15px;
  display: block;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  &::placeholder {
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 13px;
  }
`;
export const Btn = styled.button`
  height: 40px;
  width: 570px;
  background: #eb174a;
  border-radius: 30px;
  color: white;
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 15px;
  border-color: #eb174a;
  margin-top: 30px;
`;
export const ModalBtnClose = styled.button`
  background-color: transparent;
  width: 15px;
  height: 14px;
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 25px;
  border-color: transparent;
  position: absolute;
  top: 10px;
  left: 560px;
`;
