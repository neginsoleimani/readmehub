import React from "react";
import "./navbar.css";
import {Flip,Roll ,Zoom,Bounce,Rotate,Slide, Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div className="navbar">
      <Fade triggerOnce={'true'} delay={100}>
      <div>
        <h1>
          README<span>hub</span>
        </h1>
      </div>
      </Fade>
      <Fade triggerOnce={'true'}  delay={100}>
      <div>
        <Link to='/document'>
        <a href="" className="primary-btn create__profile">
          Document
        </a>
        </Link>
        <Link to='/document'>
        <a href="" className="primary-outline-btn create__profile-icon">
          <i className=" bi-chevron-down"></i>
        </a>
        </Link>
      </div>
      </Fade>
    </div>
  );
}
