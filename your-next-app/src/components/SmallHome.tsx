import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

import HeroBanner from './HeroBanner';

// import CardSlider from "./cardslider";
// import SmallServices from "./SmallServices";
// import Info from "./info";
// import Fifth from "./fifth";
// import Btmnav from "./btmnav";


const SmallHome = () => {
  return (
   <div className="container-fluid">
      <div
        className="container d-flex align-items-center pt-4"
        style={{ marginBottom: "50px" }}
      >
        <div className="row w-100">
          <div className="col-md-6 d-flex flex-column home-font">
            <p className="font-mon">
              Enquire Now for <span style={{ color: "#D68E00" }}>Power</span>{" "}
              Solutions!
            </p>
            <p className="home-font-1">
              Powering your world with reliable, BIS-certified transformers.
            </p>
            <Button
              variant="outline-secondary"
              id="btn-1"
              href="tel:9419140984"
            >
              Enquire Now
            </Button>
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-center pt-2">
           <HeroBanner/>
          </div>
        </div>
      </div>

      {/* <section id="services" className="py-5 bg-light">
        <SmallServices />
      </section>
      <section id="about" className="py-5">
        <Info />
      </section>
      <CardSlider />
      <Fifth />
      <Btmnav /> */}
    </div>
  );
};

export default SmallHome;
