// pages/_app.js
import "./globals.css"; // Import global styles
import Header from "../../components/header";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
     <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"/>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
 