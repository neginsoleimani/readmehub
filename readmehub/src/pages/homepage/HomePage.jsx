import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="container">
      <div className="section">
        <h1>HomePage</h1>
        <br />
        <br />
        <br />
        <Link to="/readme/protfolio" className="primary-btn">
          Make README.md as Portfolio{" "}
        </Link>
        <br />
        <br />
        <br />
        <Link to="/readme/project" className="primary-btn">
          Make README.md for my Project
        </Link>
        <br />
        <br />
        <br />
        <a href="https://github.com/mammaddrik/readmehub"><i className=" bi-github"></i></a>
      </div>
    </div>
  );
}
