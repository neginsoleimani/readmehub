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
        <div className="landing__page">
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
              <Link
                to="/readme/protfolio"
                className="primary-btn protfolio__btn"
              >
                Create Protfolio
              </Link>
            </div>

            <div className="homepage__image-box">
              <img src={Laptop} alt="laptop" className="homepage__image" />
            </div>
          </div>

          <div className="feature">
            <div className="feature__title-box">
              <h1>
                About README<span>hub</span>
              </h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="feature__items">

              <div className="feature__item">
                <div className="feature__icon"><i class="bi bi-airplane"></i></div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus deserunt enim
                </p>
              </div>

                <div className="feature__item">
                <div className="feature__icon">10</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus deserunt enim
                </p>
              </div>

              <div className="feature__item">
                <div className="feature__icon">10</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus deserunt enim
                </p>
              </div>

              <div className="feature__item">
                <div className="feature__icon">10</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus deserunt enim
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
