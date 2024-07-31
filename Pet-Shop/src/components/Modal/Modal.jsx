import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.Modal} onClick={onClose}>
      <div className={styles.ModalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.CloseButton} onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
