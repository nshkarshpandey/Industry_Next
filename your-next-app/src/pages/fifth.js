import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import 'bootstrap/dist/css/bootstrap.min.css';



function Fifth() {
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare data for EmailJS
    const templateParams = {
      email,
      contactNumber,
    };

    // Send email using EmailJS
    emailjs
      .send(
        'service_d9b37wc', // Replace with your EmailJS service ID
        'template_1sbvepb', // Replace with your EmailJS template ID
        templateParams,
        'gU60jRdet83OlCBMT' // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSuccessMessage('Your information was sent successfully!');
          setErrorMessage('');
          setEmail('');
          setContactNumber('');
        },
        (error) => {
          console.error('FAILED...', error);
          setErrorMessage('Failed to send your information. Please try again.');
        }
      );
  };

  return (
    <div>
      <div
        className="container-fluid py-5 position-relative text-white fif-bg"
        style={{
          backgroundImage: 'url(/images/contact.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="row align-items-center justify-content-between px-5">
          {/* Left Section: Text */}
          <div className="col-md-6">
            <p className="fif-txt-1">Accurate Industries welcomes you!!</p>
            <p className="fif-para-1">
              Share your E-mail & Contact No. — let&apos;s team up! 🚀
            </p>
          </div>

          {/* Right Section: Form */}
          <div className="col-md-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    borderRadius: '20px',
                    padding: '10px 15px',
                    fontSize: '16px',
                    border: 'none',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                    fontFamily: 'Montserrat',
                    color: '#555',
                  }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Contact Number..."
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  required
                  style={{
                    borderRadius: '20px',
                    padding: '10px 15px',
                    fontSize: '16px',
                    border: 'none',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                    fontFamily: 'Montserrat',
                    color: '#555',
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-dark fif-btn"
                style={{
                  width: '40%',
                  borderRadius: '12px',
                  fontSize: '16px',
                  backgroundColor: 'transparent',
                  border: '1px solid #fff',
                  color: '#fff',
                }}
              >
                Share Now
              </button>
            </form>
            {successMessage && (
              <p
                className="mt-3"
                style={{
                  color: '#28a745',
                  fontFamily: 'Montserrat',
                  fontSize: '14px',
                }}
              >
                {successMessage}
              </p>
            )}
            {errorMessage && (
              <p
                className="mt-3"
                style={{
                  color: '#dc3545',
                  fontFamily: 'Montserrat',
                  fontSize: '14px',
                }}
              >
                {errorMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fifth;
