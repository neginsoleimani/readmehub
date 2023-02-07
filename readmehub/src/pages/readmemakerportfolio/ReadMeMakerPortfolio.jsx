import React from "react";
import { Link } from "react-router-dom";

export default function ReadMeMakerPortfolio() {
  return (
    <div className="container">
      <div className="section">
        <h1>ReadMe Maker as portfolio</h1>
        <br />
        <br />
        <br />
        <Link to="/" className="primary-outline-btn">
          Back to HomePage
        </Link>
      </div>
    </div>
  );
}
