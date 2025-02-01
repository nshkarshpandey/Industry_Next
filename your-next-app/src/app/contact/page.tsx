"use client"

import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Image from 'next/image';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
  });
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    };

    emailjs
      .send(
        'service_d9b37wc', 
        'template_j70jglf', 
        templateParams,
        'gU60jRdet83OlCBMT' 
      )
      .then(
        () => {
          setSuccessMessage('Your message has been sent successfully!');
          setErrorMessage('');
          setFormData({ name: '', email: '', phone: '' });
        },
        () => {
          setErrorMessage('Failed to send your message. Please try again.');
        }
      );
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className="mb-4 cont-head">
            Get in <span style={{ color: '#B48230' }}>Touch</span>
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
          {successMessage && <p className="mt-3" style={{ color: '#28a745' }}>{successMessage}</p>}
          {errorMessage && <p className="mt-3" style={{ color: '#dc3545' }}>{errorMessage}</p>}
        </div>
        <div className="col-md-6">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.0026416069963!2d74.8549826!3d32.685975299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e9b1d78a48dd5%3A0x841ee1b1e2123871!2sAccurate%20Industries%20Jammu!5e0!3m2!1sen!2sin!4v1737363363916!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: '0', borderRadius: '8px' }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
