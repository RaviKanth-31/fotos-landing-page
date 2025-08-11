import React from "react";
import "./CameraBrands.css";
import { FaCheckCircle } from "react-icons/fa";
import moreCamerasImg from "./images/more-cameras.png"; // replace with your image path

export default function CameraBrands() {
  const sony = [
    "Alpha 1", "Alpha 9", "Alpha 9 II", "Alpha 9 III", "Alpha 7 III", "Alpha 7 IV",
    "Alpha 7R III", "Alpha 7R IV", "Alpha 7R V", "Alpha 7CR", "Alpha 7C", "Alpha 7C II", "Alpha 7S III*"
  ];
  const nikon = [
    "Z9", "Z8", "Zf", "Z7*", "Z6*", "Z6 II*", "Z7 II*", "D5*", "D6*", "D7200*", "D750*", "D780*", "D810*", "D850*"
  ];
  const canon = [
    "R1", "R3", "R5", "R5C", "R5 Mark II", "5D Mark IV",
    "R6 Mark II", "R6", "R", "1DX Mark III", "1DX Mark I*", "1DX Mark II*"
  ];

  const renderList = (items) => {
    return (
      <div className="list">
        {items.map((item, index) => (
          <div key={index} className="list-item">
            <FaCheckCircle className="tick" /> {item}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="brands-section">
      <h2>All pro Cameras works!</h2>
      <p>Supports 39+ pro cameras built for efficiency and art!</p>

      <div className="cards">
        <div className="brand-card">
          <div className="brand-name">SONY</div>
          {renderList(sony)}
        </div>

        <div className="brand-card">
          <div className="brand-name">Nikon</div>
          {renderList(nikon)}
        </div>

        <div className="brand-card">
          <div className="brand-name">Canon</div>
          {renderList(canon)}
        </div>

        <div className="more-card">
          <img src={moreCamerasImg} alt="More cameras" />
          <p>More cameras coming soon!</p>
        </div>
      </div>
      <p style={{padding:'30px'}}>*Requires attachable transmitter device sold separately by the camera company</p>
    </section>
  );
}
