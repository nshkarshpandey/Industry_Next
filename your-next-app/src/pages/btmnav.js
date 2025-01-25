import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';


function Btmnav() {
  return (
    <div>
      <div
        className="container-fluid py-4"
        style={{ backgroundColor: '#ffffff', color: '#000000', borderTop: '2px solid #007bff' }}
      >
        <div className="row text-center text-md-start">
          {/* Left Column: Navigation */}
          <div className="col-md-3">
           
            <ul className="list-unstyled">
            <li>
                <Link href="/home" className="text-decoration-none text-dark btm-txt">
                  Home
                </Link>
              </li>
              <li>
                <Link  href="/home" className="text-decoration-none text-dark btm-txt">
                  About
                </Link>
              </li>
              <li>
                <Link  href="/home" className="text-decoration-none text-dark btm-txt">
                  Services
                </Link>
              </li>
              <li>
                <Link  href="/contact" className="text-decoration-none text-dark btm-txt">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Middle Column: Contact Info */}
          <div className="col-md-6">
            <h5 className="btm-cont-head">Contact</h5>
            <p className="mb-0 btm-cont-para">50-A Digiana Industrial Area</p>
            <p className="mb-0 btm-cont-para">parveenkohli12@gmail.com</p>
            <p className="mb-0 btm-cont-para">+91 94191-40984</p>
          </div>

          {/* Right Column: Map */}
          <div className="col-md-3">
            <iframe 
            title='Google Map'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.0026416069963!2d74.8549826!3d32.685975299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e9b1d78a48dd5%3A0x841ee1b1e2123871!2sAccurate%20Industries%20Jammu!5e0!3m2!1sen!2sin!4v1737363363916!5m2!1sen!2sin" 
            width="100%" 
            height="200" 
            style={{border:"0", borderRadius :"8px"}}
            allowfullscreen="" 
            // loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="mb-0">Copyright @ 2025 accurateindustries</p>
        </div>
      </div>
    </div>
  );
}

export default Btmnav;
