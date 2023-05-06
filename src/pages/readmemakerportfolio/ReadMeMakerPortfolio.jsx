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
    job: "",
    country: "",
    about:
      " - 🔭 I'm currently ... \n - 🌱 I'm currently ... \n - 👩‍💻 I'm looking to Collaborate on ... \n",
    githubUser: "",
  });

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const [value, setValue] = useState();

  useEffect(() => {
    setValue(
      "<p align='" +
        data.banner_align +
        "'>" +
        `\n` +
        "<img src='" +
        data.banner +
        "' width='" +
        data.banner_width +
        "' height='" +
        data.banner_height +
        "'/>" +
        `\n` +
        "</p>" +
        `\n` +
        "<h1 align='center'>" +
        "Hi I'm " +
        data.fullName +
        "</br>" +
        " A " +
        data.job +
        " From " +
        data.country +
        "</h1>" +
        `\n` +
        "<p>" +
        `\n` +
        `\n` +
        data.about +
        "</p>" +
        "<img align='left' src='https://github-readme-stats.vercel.app/api/top-langs/?username=" +
        data.githubUser +
        "&langs_count=10&title_color=57bcda&text_color=ffffff&icon_color=facc15&bg_color=20232a&locale=en&hide_border=true&custom_title=Top%20%Languages' alt='Top Languages'/>" +
        "</br></br></br></br></br></br></br></br></br></br>" +
        "<h1 align='center'>Socials</h1>" +
        "<h1 align='center'>Stats</h1>" +
        "<p align='center'>" +
        "<img height='165px' src='https://github-readme-stats.vercel.app/api?username=" +
        data.githubUser +
        "&show_icons=true&bg_color=20232a&color=57bcda&line=c792ea&point=ffffff&title_color=57bcda&icon_color=00c4ff&text_color=ffffff&hide_border=true'>" +`\n`+
        "<img height='165px' src='https://streak-stats.demolab.com/?user="+data.githubUser+"&stroke=ffffff&&background=20232a&ring=54b6d2&fire=5fd4f4&currStreakNum=ffffff&currStreakLabel=5fd4f4&sideNums=ffffff&sideLabels=ffffff&dates=ffffff&hide_border=true' >"
        +"</p>"
    );
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
                  <input
                    type="text"
                    name="banner_align"
                    placeholder="Left,center,right"
                    value={data.banner_align}
                    onChange={changeHandler}
                  />
                </div>
                <div className="image_dimension">
                  <h4>Banner image dimension</h4>
                  <input
                    type="text"
                    name="banner_width"
                    placeholder="Width"
                    value={data.banner_width}
                    onChange={changeHandler}
                  />
                  <input
                    type="text"
                    name="banner_height"
                    placeholder="Height"
                    value={data.banner_height}
                    onChange={changeHandler}
                  />
                </div>
                <h4>Full name</h4>
                <input
                  name="fullName"
                  type="text"
                  placeholder={"Your full name"}
                  value={data.fullName}
                  onChange={changeHandler}
                />
                <h4>Job</h4>
                <input
                  name="job"
                  type="text"
                  placeholder={"Write ..."}
                  value={data.job}
                  onChange={changeHandler}
                />
                <h4>Country</h4>
                <input
                  name="country"
                  type="text"
                  placeholder={"Write ..."}
                  value={data.country}
                  onChange={changeHandler}
                />
              </div>

              <div>
                <h2>More information</h2>
                <h4>Write more about your experiences</h4>
                <textarea
                  type="text"
                  cols="20"
                  rows="5"
                  name="about"
                  value={data.about}
                  placeholder={"Write ..."}
                  onChange={changeHandler}
                />
              </div>

              <div>
                <h2>Skills</h2>
                <h4>Choose your skills :</h4>
                <h4>Top languages</h4>
                <input
                  name="githubUser"
                  type="text"
                  placeholder={"Github username"}
                  value={data.githubUser}
                  onChange={changeHandler}
                />
              </div>

              <div>
                <h2>Socials</h2>
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
