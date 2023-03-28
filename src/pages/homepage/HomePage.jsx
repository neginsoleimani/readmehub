import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import Laptop from "../../asset/images/laptop.png";
import Lamp from "../../asset/images/lamp.svg"

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
          
        {/* write here */}
          <div className="writereadme__box">
          <Fade triggerOnce={"true"} duration={4000} delay={800}>
              <div className="writereadme__title-box">
                <h1>
                How to write a good <span>README </span>
                </h1>
                <p>When you're writing your project's README, it should be able to answer the what, why, and the how of the project.</p>
              </div>
            </Fade>
          <div className="writereadme_dec">
            <div className="writereadme_img"><img src={Lamp} alt="lamp img" /></div>
            <div className="writereadme_info">
            <p>A good README is essential for any project. It is a summary of your project and gives users instructions & important information. This is a simple guide to help you make an accessible guide for your project.<br></br><br></br>
            A very important thing to note is that there's not one right way to structure a good README. But there is one very wrong way, and that is to not include a README at all.<br></br><br></br>
            Before we get started, it is also important to note that when you're writing your project's README, it should be able to answer the what, why, and the how of the project.<br></br><br></br>
            Here are some guide questions that will help you out:<br></br>
           <span>1.</span> What was your motivation?<br></br>
           <span>2.</span> Why did you build this project?<br></br>
           <span>3.</span> What problem does it solve?<br></br>
           <span>4.</span> What did you learn?<br></br>
           <span>5.</span> What makes your project stand out?<br></br><br></br>
            At this point I am confident that you are in a position to add an interactive and inforamative guide to your next project or even an existing one and make your project standout.</p></div>
          </div>

          </div>


        </div>
      </div>
      <Footer />
    </>
  );
}
