import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import Docnav from "../../components/docnav/Docnav";
import Footer from "../../components/footer/Footer";
import "./readmemakerportfolio.css";

export default class ReadMeMakerPortfolio extends Component {
  render() {
    return (
      <>
        <Docnav />
        <div className="container">
        </div>
        <Footer />
      </>
    );
  }
}
