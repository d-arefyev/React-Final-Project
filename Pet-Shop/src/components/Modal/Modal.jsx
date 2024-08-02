import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  // Если модальное окно не открыто, ничего не рендерим
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.Modal} onClick={onClose}>
      <div 
        className={styles.ModalContent} 
        onClick={(e) => e.stopPropagation()} // Останавливаем событие клика на содержимом модального окна
      >
        <button 
          className={styles.CloseButton} 
          onClick={onClose} 
          aria-label="Close modal" // Доступность: описываем действие кнопки для экранных читалок
        >
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
            <path d="M33 11L11 33" stroke="none" strokeWidth="3.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 11L33 33" stroke="none" strokeWidth="3.66667" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;