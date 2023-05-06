import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import Laptop from "../../asset/images/laptop.png";
import Lamp from "../../asset/images/lamp.svg";
import responsive from "../../asset/images/responsive.svg"

import {
  Flip,
  Roll,
  Zoom,
  Bounce,
  Rotate,
  Slide,
  Fade,
} from "react-awesome-reveal";

// Components
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="landing__page">
          <div className="section">
            <Fade triggerOnce={"true"} duration={3000} delay={400}>
              <div className="homepage__title-box">
                <h1>
                  Create an amazing
                  <br />
                  <span>Github profile </span>
                  in minutes
                </h1>

                <p>
                  Show off your skills, experience and projects. Generate
                  markdown for your profile with just a few clicks!
                </p>
              </div>

              <div className="homepage__btns">
                <Link
                  to="/readme/project"
                  className="secondary-btn project__btn"
                >
                  Create Readme for my Project
                </Link>
                <Link
                  to="/readme/protfolio"
                  className="primary-btn protfolio__btn"
                >
                  Create Protfolio
                </Link>
              </div>
            </Fade>

            <Zoom triggerOnce={"true"} delay={600}>
              <div className="homepage__image-box">
                <img src={Laptop} alt="laptop" className="homepage__image" />
              </div>
            </Zoom>
          </div>

          <div className="feature">
            <Fade triggerOnce={"true"} duration={4000} delay={800}>
              <div className="feature__title-box">
                <h1>
                  About README<span>hub</span>
                </h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </Fade>
            <div className="feature__items">

            <Zoom triggerOnce={"true"} delay={1000}>
              <div className="feature__item">
                <div className="feature__icon">
                  <i className="bi bi-code-square"></i>
                </div>
                <h4>Show your skills</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </div>
              </Zoom>

              <Zoom triggerOnce={"true"} delay={1100}>
                <div className="feature__item">
                  <div className="feature__icon">
                    <i className="bi bi-lightning-charge-fill"></i>
                  </div>
                  <h4>Easy to use</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                </div>
              </Zoom>

              <Zoom triggerOnce={"true"} delay={1200}>
              <div className="feature__item">
                <div className="feature__icon">
                  <i className="bi bi-share-fill"></i>
                </div>
                <h4>Share your Social Network</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </div>
              </Zoom>

              <Zoom triggerOnce={"true"} delay={1300}>
              <div className="feature__item">
                <div className="feature__icon">
                  <i className="bi bi-graph-up"></i>
                </div>
                <h4>Analyze your State</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </div>
              </Zoom>

            </div>
          </div>
          <div className="homepage__image-box">
                <img src={responsive} alt="responsive" className="homepage__image" />
              </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
