// pages/_app.js
import "./globals.css"; // Import global styles
import Header from "../../components/header";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Script from 'next/script';
// import Head from 'next/head';




export default function MyApp({ Component, pageProps }) {
  return (
    <>
     <Script
        // strategy="beforeInteractive"
        src="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
      />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
 