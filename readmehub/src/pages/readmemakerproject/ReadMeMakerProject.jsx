import React from "react";
import { Link } from "react-router-dom";

// Components
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function ReadMeMakerProject() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="section">
        <h1>ReadMe Maker for my Project</h1>
        <br />
        <br />
        <br />
        <Link to="/" className="secondary-outline-btn">
          Back to Homepage
        </Link>
      </div>
    </div>
    <Footer/>
    </>
  );
}
