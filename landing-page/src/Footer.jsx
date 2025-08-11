import React from "react";
import "./Footer.css";
import logo from "./images/fotos-icon.png"; // replace with your logo path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-logo">
          <img src={logo} alt="Fotos Logo" style={{marginLeft: '60/16rem'}}/>
        </div>


        <div className="footer-col">
          <h4>Quick links</h4>
          <ul>
            <li>How it works</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Supported Cameras</li>
            <li>FAQ's</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Sales</h4>
          <p>+91 9398171028</p>
          <p>shashank@getfotos.live</p>
        </div>


        <div className="footer-col">
          <h4>Support</h4>
          <p>+91 9398171028</p>
          <p>charan@getfotos.live</p>
        </div>


        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li>Terms and conditions</li>
            <li>Privacy policy</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom" style={{marginTop: '50px'}}>
        <p>
          © 2025 by Fotos ( Princo solutions Pvt Ltd )
        </p>
        <p>
          Developed by and for the photographers with <span className="heart">❤️</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
