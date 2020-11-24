import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FooterIcons from "./components/FooterIcons";
import Main from "./components/Main";

export default function App() {
  return (
    <>
      <Navbar />
      <Main />
      <FooterIcons />
      <Footer />
    </>
  );
}
