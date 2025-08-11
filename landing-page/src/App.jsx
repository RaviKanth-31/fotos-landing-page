// App.js
import React from "react";
import "./App.css";
import Header from "./Header";
import CameraBrands from "./CameraBrands";
import Pricing from "./Pricing";
import Reviews from "./Reviews";
import Footer from "./Footer";
import FreeTrial from "./FreeTrial";
export default function App() {
  return (
    <div className="container">
      <Header></Header>
      <CameraBrands></CameraBrands>
      <Pricing></Pricing>
      <Reviews></Reviews>
      <FreeTrial></FreeTrial>
      <Footer></Footer>
    </div>
  );
}
