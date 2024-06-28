import React from "react";
import "./PreLoader.css";

const Footer = (props) => {
  return (
    <div>
      {/* partial:index.partial.html */}
      <div className="container">
        <div className="liquid" />
        <div className="liquid" />
        <div className="liquid" />
        <div className="liquid" />
      </div>
      <svg>
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation={10} />
          <feColorMatrix
            values="
  1 0 0 0 0
  0 1 0 0 0
  0 0 1 0 0
  0 0 0 20 -10
  "
          />
        </filter>
      </svg>
      {/* partial */}
    </div>
  );
};

export default Footer;
