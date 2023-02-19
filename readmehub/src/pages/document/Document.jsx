import React from "react";
import "./document.css";
import { Link } from "react-router-dom";
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
import Docnav from "../../components/docnav/Docnav";
import Footer from "../../components/footer/Footer";
import Codeeditor from "../../components/codeeditor/Codeeditor";
import './document.css'
export default function Document() {
  return (
    <div className="document">
      <Fade triggerOnce={"true"} delay={300}>
        <Docnav />
      </Fade>
      <div>
        <div className="document__container">
          <Fade triggerOnce={"true"} delay={300}>
            <Codeeditor/>
          </Fade>
        </div>
      </div>
      <Footer />
    </div>
  );
}
