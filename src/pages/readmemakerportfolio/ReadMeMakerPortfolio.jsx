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
    skills:"", 
    icon1:"",
    icon2:"",
    icon3:"",
    icon4:"",
    icon5:"",
    gmail:"",
    instagram:"",
    telegram:"",
    linkedin:"", 
    firstColor:"",
    secondColor:"",
    thirdColor:"",
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
        "&langs_count=10&title_color="+data.firstColor+"&text_color="+data.secondColor+"&icon_color="+data.secondColor+"&bg_color="+data.thirdColor+"&locale=en&hide_border=true&custom_title=Top%20%Languages' alt='Top Languages'/>" +
        `\n\n`+"<p align='left'>"+"<img src='"+data.icon1+"' width='32px'>"
        +"<img src='"+data.icon2+"' width='32px'>"
        +"<img src='"+data.icon3+"' width='32px'>"
        +"<img src='"+data.icon4+"' width='32px'>"
        +"<img src='"+data.icon5+"' width='32px'>"
        +"</p>"+`\n\n`+data.skills+
        "</br></br></br></br></br></br></br></br></br></br>" +
        "<h1 align='center'>Socials</h1>" +
        "<p align='center'>"+
        `\n`+"<a src='"+data.gmail+"' >"+
        "<img src='https://img.icons8.com/?size=512&id=UVMl6gMRl2Sq&format=png' width='54px'>"+
        "</a>"+`\n`+
        "<a src='"+data.telegram+"' >"+"<img src='https://img.icons8.com/?size=512&id=Ai1GT4W6UPLG&format=png' width='54px'>"+"</a>"+
        `\n`+
        "<a src='"+data.linkedin+"' >"+"<img src='https://img.icons8.com/?size=512&id=WyB8Jtm9PZoo&format=png' width='54px'>"+"</a>"+
        `\n`+
        "<a src='"+data.instagram+"' >"+"<img src='https://img.icons8.com/?size=512&id=Plswr633TJUP&format=png' width='54px'>"+"</a>"+
        "</p>"+
        "<h1 align='center'>Stats</h1>" +       
        "<p align='center'>" +
        "<img height='165px' src='https://github-readme-stats.vercel.app/api?username=" +
        data.githubUser +
        "&show_icons=true&bg_color="+data.thirdColor+"&color="+data.firstColor+"&line=c792ea&point="+data.secondColor+"&title_color="+data.firstColor+"&icon_color="+data.firstColor+"&text_color="+data.secondColor+"&hide_border=true'>" +
        `\n` +
        "<img height='165px' src='https://streak-stats.demolab.com/?user=" +
        data.githubUser +
        "&stroke="+data.firstColor+"&&background="+data.thirdColor+"&ring="+data.firstColor+"&fire="+data.firstColor+"&currStreakNum="+data.secondColor+"&currStreakLabel="+data.secondColor+"&sideNums="+data.secondColor+"&sideLabels="+data.secondColor+"&dates="+data.secondColor+"&hide_border=true' >" +
        "</p>"+`\n`+`\n`+
        "![Anurag's GitHub stats](https://github-readme-activity-graph.cyclic.app/graph?username="+data.githubUser+"&show_icons=true&bg_color="+data.thirdColor+"&color="+data.secondColor+"&line="+data.firstColor+"&point="+data.secondColor+"&custom_title=GitHub%20Commits%20Graph&hide_border=true)"
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
                <h4>Skills icon </h4>
                <input
                  name="icon1"
                  type="text"
                  placeholder={"Url"}
                  value={data.icon1}
                  onChange={changeHandler}
                />
                 <input
                  name="icon2"
                  type="text"
                  placeholder={"Url"}
                  value={data.icon2}
                  onChange={changeHandler}
                />
                 <input
                  name="icon3"
                  type="text"
                  placeholder={"Url"}
                  value={data.icon3}
                  onChange={changeHandler}
                />
                 <input
                  name="icon4"
                  type="text"
                  placeholder={"Url"}
                  value={data.icon4}
                  onChange={changeHandler}
                />
                 <input
                  name="icon5"
                  type="text"
                  placeholder={"Url"}
                  value={data.icon5}
                  onChange={changeHandler}
                />

                <h4>Write about your skills</h4>
                <textarea
                  type="text"
                  cols="20"
                  rows="5"
                  name="skills"
                  value={data.skills}
                  placeholder={"Write ..."}
                  onChange={changeHandler}
                />
              </div>

              <div>
                <h2>Socials</h2>
                <h4>Gmail</h4>
                <input
                  name="gmail"
                  type="text"
                  placeholder={"Example@gmail.com"}
                  value={data.gmail}
                  onChange={changeHandler}
                />
                <h4>Instagram</h4>
                <input
                  name="instagram"
                  type="text"
                  placeholder={"Url"}
                  value={data.instagram}
                  onChange={changeHandler}
                />
                <h4>Linkedin</h4>
                <input
                  name="linkedin"
                  type="text"
                  placeholder={"Url"}
                  value={data.linkedin}
                  onChange={changeHandler}
                />
                <h4>Telegram</h4>
                <input
                  name="telegram"
                  type="text"
                  placeholder={"Url"}
                  value={data.telegram}
                  onChange={changeHandler}
                />
              </div>

              <div>
                <h2>Stats customize</h2>
                <h4>Icon color</h4>
                <input
                  name="firstColor"
                  type="text"
                  placeholder={"#Hex"}
                  value={data.firstColor}
                  onChange={changeHandler}
                />
                <h4>Text color</h4>
                <input
                  name="secondColor"
                  type="text"
                  placeholder={"#Hex"}
                  value={data.secondColor}
                  onChange={changeHandler}
                />
                <h4>Background color</h4>
                <input
                  name="thirdColor"
                  type="text"
                  placeholder={"#Hex"}
                  value={data.thirdColor}
                  onChange={changeHandler}
                />
                <h4>Github username</h4>
                <input
                  name="githubUser"
                  type="text"
                  placeholder={"Username"}
                  value={data.githubUser}
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
