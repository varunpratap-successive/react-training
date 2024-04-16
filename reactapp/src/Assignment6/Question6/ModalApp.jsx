
import React, { useState } from 'react';
import Modal from './Modal';

function ModalApp() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <p>This is the modal content.</p>
      </Modal>
    </div>
  );
}

export default ModalApp;
