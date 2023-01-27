import React, { useEffect } from 'react';
import {
  Overlay,
  ModalForm,
  ModalTitle,
  Modal,
  Input,
  Btn,
  ModalBtnClose,
} from './HeaderModal.styled';

function HeaderModal({ closeModal }) {
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };
  return (
    <div>
      <Overlay onClick={handleBackdropClick}>
        <Modal>
          <ModalTitle>Обратная связь</ModalTitle>
          <ModalForm>
            <Input type="text" placeholder="Your name" />
            <Input type="tel" placeholder="Your phone" />
            <Input type="email" placeholder="Your email" />
            <Input
              type="text"
              style={{ height: '120px', marginBottom: '0' }}
              placeholder="Your message"
            />
            <Btn type="submit">Отправить</Btn>
          </ModalForm>
          <ModalBtnClose onClick={closeModal}>x</ModalBtnClose>
        </Modal>
      </Overlay>
    </div>
  );
}

export default HeaderModal;
