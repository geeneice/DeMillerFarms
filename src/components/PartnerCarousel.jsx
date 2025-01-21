import React from "react";
import "./PartnersCarousel.css";

const PartnersCarousel = ({ logos }) => {
  return (
    <div className="partners-section-horizontal">
      <h1 className="section-title-horizontal">Our Trusted Partners</h1>
      <div className="horizontal-scroll">
        {logos.map((logo, index) => (
          <div key={index} className="logo-container-horizontal">
            <img src={logo} alt={`Partner ${index + 1}`} className="logo-horizontal" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersCarousel;
