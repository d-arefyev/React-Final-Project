import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.Modal} onClick={onClose}>
      <div className={styles.ModalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.CloseButton} onClick={onClose}>
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
            <path d="M33 11L11 33" stroke="none" stroke-width="3.66667" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11 11L33 33" stroke="none" stroke-width="3.66667" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
