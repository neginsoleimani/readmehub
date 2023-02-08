import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <h1>
          README<span>hub</span>
        </h1>
      </div>
      <div>
        <a href="" className="secondary-btn create__profile">
          Create Profile
        </a>
        <a href="" className="secondary-outline-btn create__profile-icon">
          <i className=" bi-chevron-down"></i>
        </a>
      </div>
    </div>
  );
}
