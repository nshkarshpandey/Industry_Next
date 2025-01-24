import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import info_img from '../../public/images/about.png';

function Info() {
  return (
    <div>
      <div className=""  id='inf'>
        <div className="row align-items-center">
          {/* Left Side: Image */}
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src={"/images/about.png"}// Replace with your image path
              alt="About Us"
              className="img-fluid"
            />
          </div>

          {/* Right Side: Header and Text */}
          <div className="col-md-6 inf-cont" >
            <p className='inf-txt'>About Accurate Industries</p>
            <p className='inf-para'>
              We specialize in supplying high-quality distribution transformers with ranging <span style={{fontWeight:"bold"}}>16 KVA to 2500 KVA</span> , catering to various 
              industrial and commercial needs. All our products are <span style={{fontWeight:"bold"}}>BIS certified</span>, ensuring compliance with the latest safety and 
              quality regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
