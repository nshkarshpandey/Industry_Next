import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
// import Image from "next/image";
import HeroBanner from './HeroBanner';
import Ban_2 from "./Ban_2";

const LargeHome = () => {
  return (
    <div className="">
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
            < Ban_2 />
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-center pt-2">
            <HeroBanner/>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default LargeHome;
