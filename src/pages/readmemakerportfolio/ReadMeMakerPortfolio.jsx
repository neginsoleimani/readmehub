import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import Docnav from "../../components/docnav/Docnav";
import Footer from "../../components/footer/Footer";
import "../readmemakerportfolio/readmemakerportfolio.css";
import MDEditor, { image } from "@uiw/react-md-editor";

export default function ReadMeMakerPortfolio() {
  const [data, setData] = useState({
    banner: "",
    banner_align: "",
    banner_width: "",
    banner_height: "",
    fullName: "",
  });

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const [value, setValue] = useState();

  useEffect(() => {
    setValue("");
  }, [data]);

  return (
    <>
      <Docnav />
      <div className="container">
        <div className="readmeprotfolio__container">
          <div className="readmeportfolio__input-box">
            <div className="readmeportfolio__input">
              <h2>About</h2>
              <div>
                <h4>Banner image</h4>
                <input
                  name="banner"
                  type="text"
                  placeholder={"Url"}
                  value={data.banner}
                  onChange={changeHandler}
                />
                <div className="image_align">
                <h4>Banner image align</h4>
                  <input type="text" name="banner_align" placeholder="Left,center,right" value={data.banner_align} onChange={changeHandler}/>
                </div>
                <div className="image_dimension">
                  <h4>Banner image dimension</h4>
                  <input type="text" name="banner_width" placeholder="Width" value={data.banner_width}  onChange={changeHandler}/>
                  <input type="text" name="banner_height" placeholder="Height" value={data.banner_height}  onChange={changeHandler}/>
                </div>
                <h4>Full name</h4>
                <input
                  name="fullName"
                  type="text"
                  placeholder={"Your full name"}
                  value={data.fullName}
                  onChange={changeHandler}
                />
              </div>
            </div>
          </div>

          <div className="readmeportfolio__result-box">
            <MDEditor
              value={value}
              onChange={setValue}
              style={{ zIndex: "1" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
