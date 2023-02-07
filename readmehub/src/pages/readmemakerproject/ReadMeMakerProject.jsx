import React from "react";
import { Link } from "react-router-dom";
export default function ReadMeMakerProject() {
  return (
    <div className="container">
      <div className="section">
        <h1>ReadMe Maker for my Project</h1>
        <br />
        <br />
        <br />
        <Link to="/" className="primary-outline-btn">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
