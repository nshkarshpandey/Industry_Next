"use client";

import React, { useState } from "react";
import styles from "./popupform.module.css";
import Image from "next/image";
import emailjs from "emailjs-com";

interface PopupFormProps {
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  const validatePhoneNumber = (num: string) => {
    const regex = /^[6-9]\d{9}$/;
    return regex.test(num);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email || !phone) {
      setError("All fields are required.");
      return;
    }

    if (!validatePhoneNumber(phone)) {
      setError("Enter a valid 10-digit Indian mobile number.");
      return;
    }

    const templateParams = {
      email,
      phone,
    };

    try {
      const response = await emailjs.send(
        'service_d9b37wc', 
        'template_j70jglf', 
        templateParams,
        'gU60jRdet83OlCBMT' 
      );

      if (response.status === 200) {
        setMessage("Your message has been sent successfully!");
        setEmail("");
        setPhone("");
      } else {
        setError("Failed to send your message. Please try again.");
      }
    } 
    catch (error) {
      console.error("Failed to send the message:", error); // ✅ Logs error to console
      } 
  };

  return (
    isOpen && (
      <div className={styles.overlay}>
        {/* Close Button */}
        <div className={styles.closeBtnContainer}>
          <button className={styles.closeBtn} onClick={handleClose}>
            &times;
          </button>
        </div>

        <div className={styles.popup}>
          {/* Small Icon */}
          <div className={styles.smallImage}>
            <Image src="/images/pop.png" alt="Small Icon" width={31} height={26.46} />
          </div>

          {/* Main Image */}
          <div className={styles.imageContainer}>
            <Image
              src="/images/about.png"
              alt="Popup Image"
              width={16}
              height={9}
              layout="responsive"
              style={{ borderRadius: "21px", paddingBottom: "14px", marginTop: "10px" }}
            />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Contact Number</label>
              <input
                type="tel"
                placeholder="Enter your number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            {/* Error & Success Messages */}
            {error && <p className={styles.error}>{error}</p>}
            {message && <p className={styles.success}>{message}</p>}

            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default PopupForm;
