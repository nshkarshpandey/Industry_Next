"use client"; // Required for useState in Next.js (App Router)

import React, { useState } from "react";
import styles from "./popupform.module.css";

interface PopupFormProps {
  onClose: () => void; // ✅ Define prop type
}

const PopupForm: React.FC<PopupFormProps> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true); // ✅ Start with open popup

  const handleClose = () => {
    setIsOpen(false);
    onClose(); // ✅ Notify parent (HomePage) to remove popup
  };

  return (
    isOpen && (
      <div className={styles.overlay}>
        <div className={styles.popup}>
          <button className={styles.closeBtn} onClick={handleClose}>
            &times;
          </button>
          <h2>Enquire Now</h2>
          <form>
            <div className={styles.formGroup}>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className={styles.formGroup}>
              <label>Contact Number</label>
              <input type="tel" placeholder="Enter your number" required />
            </div>
            <button type="submit" className={styles.submitBtn} onClick={handleClose}>
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default PopupForm;
