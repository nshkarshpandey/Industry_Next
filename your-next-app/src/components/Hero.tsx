"use client";


import React, { useEffect, useState } from "react";
import LargeHome from "./LargeHome";
import SmallHome from "./SmallHome";

export const Hero = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };
    handleResize(); // Initialize on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmallScreen ? <SmallHome /> : <LargeHome />;
};


