import React, { useState } from 'react';
import Title from '../Title/Title';
import Navigation from 'components/Navigation/Navigation';
import Container from 'components/Container/Container';
import HeaderModal from 'components/HeaderModal/HeaderModal';

import { Head, Btn } from './Header.styled';

function Header() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <Container>
      <Head>
        <Title />
        <Navigation />
        <Btn onClick={openModal}>Обратная связь</Btn>
        {showModal && <HeaderModal closeModal={closeModal} />}
      </Head>
    </Container>
  );
}

export default Header;
