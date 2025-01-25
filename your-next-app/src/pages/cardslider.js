import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from 'next/image';

import Button from 'react-bootstrap/Button';

const CardSlider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  const products = [
    {
      image: "/images/prod-1.png",
      title: "C.V.T (0.5KVA - 20KVA)",
    },
    {
      image: "/images/prod-2.png",
      title: "Single Phase - Three Phase Panels",
    },
    {
      image: "/images/prod-3.png",
      title: "Three Phase Distribution Transformer Level 2 (16KVA - 2500KVA)",
    },
    {
      image: "/images/prod-4.png",
      title: "CT-PT",
    },
    {
      image: "/images/prod-5.png",
      title: "Automatic Voltage Stabiliser (1KVA - 10KVA)",
    },
    {
      image: "/images/prod-6.png",
      title: "Servo Voltage Stabiliser (3KVA - 1000KVA)",
    },
  ];

  const CustomLeftArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="custom-arrow-left sli-arr"
      style={{
        position: "absolute",
        top: "50%",
        left: "10px",
        transform: "translateY(-50%)",
        backgroundColor: "#FFF",
        border: "none",
        borderRadius: "20%",
        width: "40px",
        height: "40px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <i className="fa fa-chevron-left" style={{ color: "#000", fontSize: "16px" }}></i>
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="custom-arrow-right sli-arr"
      style={{
        position: "absolute",
        top: "50%",
        right: "10px",
        transform: "translateY(-50%)",
        backgroundColor: "#FFF",
        border: "none",
        borderRadius: "20%",
        width: "40px",
        height: "40px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <i className="fa fa-chevron-right" style={{ color: "#000", fontSize: "16px" }}></i>
    </button>
  );

  return (
    <div className="container py-5">
      <p className="mb-5 sli-head">
        Our Electrical <span style={{ color: "#EB9D00" }}>Products</span>
      </p>
      <Carousel
        responsive={responsive}
        infinite={true}
        showDots={false}
        arrows={true}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        swipeable={true}
        draggable={true}
        autoPlay={false}
        slidesToSlide={1}
      >
        {products.map((product, index) => (
          <div key={index} className="card mx-2 position-relative" style={{ border: "none" }}>
            {/* Image with Overlay */}
            <div className="image-container position-relative" style={{ overflow: "hidden" }}>
              <Image
                src={product.image}
                alt={product.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div
                className="overlay d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <Button
                  className="btn btn-light sli-butt"
                  style={{ borderRadius: "20px", fontWeight: "bold" }}
                  href="tel:9419140984"
                >
                  Enquire Now
                </Button>
              </div>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title sli-title">{product.title}</h5>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CardSlider;
