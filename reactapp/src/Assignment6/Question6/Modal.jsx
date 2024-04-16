// src/components/Modal.js
import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
