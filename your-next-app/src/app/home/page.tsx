"use client";

import { useState } from "react";
import { Container } from "@/components/container";
import Services from "@/components/services";
import Info from "@/components/info";
import Fifth from "@/components/fifth";
import Btmnav from "@/components/btmnav";
import CardSlider from "@/components/cardslider";
import { Hero } from "@/components/Hero";
import PopupForm from "@/components/PopupForm"; // ✅ Import PopupForm

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(true); // ✅ Show popup on first load

  // Function to close popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <Container>
      {/* ✅ Show Popup Only on Home Page */}
      {showPopup && <PopupForm onClose={handleClosePopup} />}

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-5 bg-light">
        <Services />
      </section>

      {/* Info Section */}
      <section id="about" className="py-5">
        <Info />
      </section>

      {/* Product Section (CardSlider) */}
      <section id="products" className="py-5">
        <CardSlider />
      </section>

      {/* Fifth Section */}
      <Fifth />

      {/* Bottom Navigation Section */}
      <Btmnav />
    </Container>
  );
}
