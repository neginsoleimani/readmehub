import React from "react";
import { Link } from "react-router-dom";

// Components
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";


export default function ReadMeMakerPortfolio() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="section">
        <h1>ReadMe Maker as portfolio</h1>
        <br />
        <br />
        <br />
        <Link to="/" className="secondary-outline-btn" >
          Back to HomePage
        </Link>
      </div>
    </div>
    <Footer/>
    </>
  );
}
