import React, { useEffect } from 'react';
import { Formik, ErrorMessage } from 'formik';
import Validation from 'components/Validation/Validation';
import {
  Overlay,
  ModalForm,
  ModalTitle,
  Modal,
  Input,
  Btn,
  ModalBtnClose,
  Coment,
  Error,
  InputContainer,
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
  const handleSubmit = async (values, { resetForm }) => {
    console.log('submit');
    resetForm();
  };
  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ name: '', phone: '', email: '', message: '' }}
        validationSchema={Validation}
      >
        {({ values, handleChange, isSubmitting }) => (
          <Overlay onClick={handleBackdropClick}>
            <Modal>
              <ModalTitle>Обратная связь</ModalTitle>
              <ModalForm>
                <InputContainer>
                  <Input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                  />
                  <Error>
                    <ErrorMessage name="name" />
                  </Error>
                </InputContainer>
                <InputContainer>
                  <Input
                    type="tel"
                    placeholder="Your phone"
                    name="phone"
                    onChange={handleChange}
                    value={values.phone}
                  />
                  <Error>
                    <ErrorMessage name="phone" />
                  </Error>
                </InputContainer>
                <InputContainer>
                  <Input
                    type="email"
                    placeholder="Your email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  <Error>
                    <ErrorMessage name="email" />
                  </Error>
                </InputContainer>
                <InputContainer>
                  <Coment
                    type="text"
                    placeholder="Your message"
                    name="message"
                    onChange={handleChange}
                    value={values.message}
                  />
                  <Error>
                    <ErrorMessage name="message" />
                  </Error>
                </InputContainer>
                <Btn type="submit" disabled={isSubmitting}>
                  Отправить
                </Btn>
              </ModalForm>
              <ModalBtnClose onClick={closeModal}>x</ModalBtnClose>
            </Modal>
          </Overlay>
        )}
      </Formik>
    </div>
  );
}

export default HeaderModal;
