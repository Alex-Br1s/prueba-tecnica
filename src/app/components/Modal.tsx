import React from "react";
import styles from "../styles/Modal.module.css";
import ContactForm from "./ContactForm";
import { IoClose } from "react-icons/io5";

interface ModalProps {
    onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          <IoClose size={25}/>
        </button>
        <ContactForm /> 
      </div>
    </div>
  );
};

export default Modal;
