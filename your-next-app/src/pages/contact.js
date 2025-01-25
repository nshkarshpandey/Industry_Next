// pages/contact.js

import { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  // EmailJS template parameters
  const templateParams = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
  };

  // Sending email using EmailJS
  emailjs
    .send(
      'service_d9b37wc', // Replace with your EmailJS service ID
      'template_j70jglf', // Replace with your EmailJS template ID
      templateParams,
      'gU60jRdet83OlCBMT' // Replace with your EmailJS public key
    )
    .then(
      () => {
        // Handle success without using the 'response' variable
        setSuccessMessage('Your message has been sent successfully!');
        setErrorMessage('');
        setFormData({ name: '', email: '', phone: '' }); // Reset form fields
      },
      () => {
        // Handle error without using the 'error' variable
        setErrorMessage('Failed to send your message. Please try again.');
      }
    );
};
  return (
    <div className="container py-5">
      {/* Row for Top Layout */}
      <div className="row">
        {/* Left Section: Get in Touch and Form */}
        <div className="col-md-6">
          <h1 className="mb-4 cont-head">
            Get in <span style={{ color: '#D68E00' }}>Touch</span>
          </h1>
          <p className="cont-para">
            Reach out to us for electrical transformer solutions! Share your
            email, phone number, and name to connect.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name*"
                required
                style={{
                  borderRadius: '10px',
                  padding: '10px',
                  border: '1px solid #ccc',
                  fontSize: '16px',
                }}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
                required
                style={{
                  borderRadius: '10px',
                  padding: '10px',
                  border: '1px solid #ccc',
                  fontSize: '16px',
                }}
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number*"
                required
                style={{
                  borderRadius: '10px',
                  padding: '10px',
                  border: '1px solid #ccc',
                  fontSize: '16px',
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-warning w-100"
              style={{
                backgroundColor: '#f4a71f',
                border: 'none',
                padding: '10px',
                fontSize: '16px',
                borderRadius: '10px',
                color: '#fff',
                fontWeight: 'bold',
              }}
            >
              Send
            </button>
          </form>

          {/* Success & Error Messages */}
          {successMessage && (
            <p className="mt-3" style={{ color: '#28a745' }}>
              {successMessage}
            </p>
          )}
          {errorMessage && (
            <p className="mt-3" style={{ color: '#dc3545' }}>
              {errorMessage}
            </p>
          )}

          {/* Contact Info Below the Form */}
          <div className="mt-4 row">
            {/* Phone Section */}
            <div className="col-12 col-md-6 d-flex align-items-center mb-3 mb-md-0">
              <div
                style={{
                  backgroundColor: '#fdeedc',
                  borderRadius: '10px',
                  padding: '10px',
                  marginRight: '10px',
                }}
              >
                <Image src="/images/pho.png" 
               
              width={24} 
              height={24} 
               loading="eager"
              alt="Phone" style={{ height: '24px', width: '24px' }} />
              </div>
              <div>
                <p style={{ margin: 0, color: '#f4a71f', fontWeight: 'bold' }}>Phone</p>
                <p style={{ margin: 0, color: '#555' }}>+91 94191-40984</p>
              </div>
            </div>

            {/* Email Section */}
            <div className="col-12 col-md-6 d-flex align-items-center">
              <div
                style={{
                  backgroundColor: '#fdeedc',
                  borderRadius: '10px',
                  padding: '10px',
                  marginRight: '10px',
                }}
              >
                <Image src="/images/mai.png" 
                
              width={24} 
              height={24} 
               loading="eager"
              alt="Email" style={{ height: '24px', width: '24px' }} />
              </div>
              <div>
                <p style={{ margin: 0, color: '#f4a71f', fontWeight: 'bold' }}>Email</p>
                <p style={{ margin: 0, color: '#555' }}>
                  <a
                    href="mailto:parveenkohli12@gmail.com"
                    style={{ textDecoration: 'none', color: '#555' }}
                  >
                    parveenkohli12@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Map */}
        <div className="col-md-6">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.0026416069963!2d74.8549826!3d32.685975299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e9b1d78a48dd5%3A0x841ee1b1e2123871!2sAccurate%20Industries%20Jammu!5e0!3m2!1sen!2sin!4v1737363363916!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: '0', borderRadius: '8px' }}
            allowfullscreen=""
            // loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
