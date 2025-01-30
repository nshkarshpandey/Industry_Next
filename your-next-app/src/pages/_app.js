import React, { useState, useEffect } from "react";
import "./globals.css"; // Import global styles
import Header from "../../components/header";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Script from 'next/script';
import PopupForm from "../../components/PopupForm";

export default function MyApp({ Component, pageProps }) {
  const [popupClosed, setPopupClosed] = useState(false);

  useEffect(() => {
    // Ensure popup appears on first load
    setPopupClosed(false);
  }, []);

  return (
    <>
      <Script
        src="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
      />
      
      {/* Show popup first, then load content */}
      {!popupClosed ? (
        <PopupForm onClose={() => setPopupClosed(true)} />
      ) : (
        <>
          <Header />
          <Component {...pageProps} />
        </>
      )}
    </>
  );
}
