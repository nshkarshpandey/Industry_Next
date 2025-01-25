import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';


function Services() {
  return (
    <div className="py-5" id="ser" style={{ backgroundColor: "#FFFDF8" }}>
  <h2 className="text-center mb-5 font-mon ser-font">
    Our <span style={{ color: "#D68E00" }}>Services</span>
  </h2>
  <div className="container font-mon">
    <div className="row text-center">
      <div className="col-md-4 mb-4">
        <div className="card border-0 h-100 p-3" style={{ backgroundColor: "#FFFDF8" }}>
          <div className="d-flex justify-content-center align-items-center mb-3">
            <Image
           
              width={80} 
              height={80}
               loading="eager"
              src={"/images/ser-img-1.png"}
              className="rounded-circle"
              alt="Service 1"
              style={{ width: "80px", height: "80px" }}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title font-weight-bold mb-2 ser-txt">Custom Transformers</h5>
            <p className="card-text text-muted ser-para">
              16 KVA to 2500 KVA Transformers
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
       <div className="card border-0 h-100 p-3" style={{ backgroundColor: "#FFFDF8" }}>
          <div className="d-flex justify-content-center align-items-center mb-3">
            <Image
               loading="eager"
              width={80} 
              height={80}
              src={"/images/ser-img-2.png"}
              className="rounded-circle"
              alt="Service 2"
              style={{ width: "80px", height: "80px" }}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title font-weight-bold mb-2 ser-txt">Repair Services</h5>
            <p className="card-text text-muted ser-para">
              We offer repair services for all our products
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card border-0 h-100 p-3" style={{ backgroundColor: "#FFFDF8" }}>
          <div className="d-flex justify-content-center align-items-center mb-3">
            <Image
             loading="eager"
              width={80} 
              height={80} 
              src={"/images/ser-img-3.png"}
              className="rounded-circle"
              alt="Service 3"
              style={{ width: "80px" , height: "80px" }}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title font-weight-bold mb-2 ser-txt">Energy Solutions</h5>
            <p className="card-text text-muted ser-para">
              Provide technical knowledge
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Services
