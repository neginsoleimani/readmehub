import React from "react";
import "./document.css";
import { Link } from "react-router-dom";

// Components
import Docnav from "../../components/docnav/Docnav";
import Footer from "../../components/footer/Footer";



export default function Document() {
  return (
    <div className="document">
    <Docnav/>
    <div className="container">
      <div className="section">
        <h1>Document</h1>
        <br />
        <br />
        <br />
        <Link to="/" className="secondary-outline-btn" >
          Back to HomePage
        </Link>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
