import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import Laptop from "../../asset/images/laptop.svg";

// Components
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="section">
          <div className="homepage__title-box">
            <h1>
              Create an amazing
              <br />
              <span>Github profile </span>
              in minutes
            </h1>
            <p>
              Show off your skills, experience and projects. Generate markdown
              for your profile with just a few clicks!
            </p>
          </div>

          <div className="homepage__btns">
            <Link to="/readme/project" className="secondary-btn project__btn">
              Create Readme for my Project
            </Link>
            <Link to="/readme/protfolio" className="primary-btn protfolio__btn">
              Create Protfolio
            </Link>
          </div>

          <div className="homepage__image-box">
            <img src={Laptop} alt="laptop" className="homepage__image" />
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
