// pages/_app.js
import "./globals.css"; // Import global styles
import Header from "../../components/header";
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function MyApp({ Component, pageProps }) {
  return (
    <>
    
      <Header />
      <Component {...pageProps} />
    </>
  );
}
 