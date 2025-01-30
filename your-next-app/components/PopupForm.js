"use client"; // Required for useState and useEffect in Next.js (App Router)

import React, { useState, useEffect } from "react";
import styles from "./popupform.module.css";

const PopupForm = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true); // Starts open

  const handleClose = () => {
    setIsOpen(false);
    onClose(); // Notify parent to show content
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
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div className={styles.formGroup}>
              <label>Number</label>
              <input type="tel" placeholder="Enter your number" required />
            </div>
            <button type="submit" className={styles.submitBtn}>Submit</button>
          </form>
        </div>
      </div>
    )
  );
};

export default PopupForm;
