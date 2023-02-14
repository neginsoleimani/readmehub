import React from "react";
import {Flip,Roll ,Zoom,Bounce,Rotate,Slide, Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";


export default function Docnav() {
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
        <a href="" className="primary-outline-btn create__profile-icon">
          <i className=" bi-chevron-down"></i>
        </a>
      </div>
      </Fade>
    </div>
  );
}
