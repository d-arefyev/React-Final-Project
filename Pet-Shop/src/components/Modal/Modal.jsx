import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (isOpen) {
    return (
      <div className={styles.Modal} onClick={onClose}>
        <div className={styles.ModalContent}>{children}</div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
