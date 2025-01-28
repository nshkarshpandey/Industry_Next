// pages/index.js
import React from "react";
import Header from "../../components/header";
import Home from "../pages/home";
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

export default function Index() {
  return (
    <>
    <main className={montserrat.className}>
      <Header />
      <Home />
    </main>
    </>
  );
}
