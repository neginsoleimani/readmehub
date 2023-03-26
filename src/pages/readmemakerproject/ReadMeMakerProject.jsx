import React from "react";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";

// Components
import Docnav from "../../components/docnav/Docnav";
import Footer from "../../components/footer/Footer";
import "../readmemakerportfolio/readmemakerportfolio.css";
import MDEditor, { image } from "@uiw/react-md-editor";

export default function ReadMeMakerProject() {

  const [data , setData]=useState({
    logo :"Url",
    title:"Project name",
    demo:"Url",
    info:"Write ...",
    tec:"JavaScript,Python,...",
    challenges:"Write ...",
    future:"Write ...",
    dec:"Write ...",
    dec_img:"Url",
  })

  const changeHandler = event =>{
    setData({...data,[event.target.name]:event.target.value})
    console.log(data)
  }

  const [value, setValue] = useState()

  useEffect(()=>{
    setValue("![Project Image]("+data.logo+")" + "</br>" + "***" + data.title +"***"+"</br> "+data.info + "</br>" + data.tec+ "</br>" +data.challenges+ "</br>" + data.future + "</br>" + data.dec+ "</br>" +data.dec_img)
  },[data])

  return (
    <>
      <Docnav />
      <div className="container">
        <div className="readmeprotfolio__container">
          <div className="readmeportfolio__input-box">
            <div className="readmeportfolio__input">
              <h2>Project Title </h2>

              <div>
                <h4>Logo</h4>
                <input
                name="logo"
                  type="text"
                  value={data.logo}
                  onChange={changeHandler}
                />
              </div>

              <div>
                <h4>Title</h4>
                <input type="text" name="title" value={data.title}
                  onChange={changeHandler}/>
              </div>

              <div>
                <h4>Demo</h4>
                <input
                name="demo"
                  type="text"
                  value={data.demo}
                  onChange={changeHandler}
                />
              </div>

              <h2>badges</h2>

              <div>
                <h4>Image</h4>
                <input type="text" value={"url"} id="" />
              </div>

              <div>
                <h4>Link</h4>
                <input type="text" value={"url"} id="" />
              </div>

              <div>
                <h2>Project description</h2>

                <div>
                  <h4>What is your application does?</h4>
                  <textarea type="text" cols="20" rows="5" name="info" value={data.info}
                  onChange={changeHandler}/>
                </div>

                <div>
                  <h4>The technologies</h4>
                  <textarea type="text" cols="20" rows="5" name="tec" value={data.tec}
                  onChange={changeHandler} />
                </div>

                <div>
                  <h4>Some of the challenges your face it</h4>
                  <textarea type="text" cols="20" rows="5" name="challenges" value={data.challenges}
                  onChange={changeHandler} />
                </div>

                <div>
                  <h4>Features you hope to implement in future</h4>
                  <textarea type="text" cols="20" rows="5" name="future" value={data.future}
                  onChange={changeHandler} />
                </div>
              </div>

              <div className="table__content">
                <h2>Table of content</h2>
                <div>
                  <h5>
                    If your README file is very long you might want to add table
                    of the content.
                  </h5>
                </div>

                <h2>How to install and run project</h2>

                <div>
                  <h4>Description</h4>
                  <textarea type="text" cols="20" rows="5" name="dec" value={data.dec}
                  onChange={changeHandler} />
                </div>

                <div>
                  <h4>Image</h4>
                  <input type="text" value={data.dec_img} name={"dec_img"} />
                </div>

                <h2>How to use the project</h2>

                <div>
                  <h4>Image</h4>
                  <input type="text" value={"url"} id="" />
                </div>

                <div>
                  <h4>Description</h4>
                  <input type="text" value={""} id="" />
                </div>

                <h2>Include the credits</h2>

                <div>
                  <h4>Image</h4>
                  <input type="text" value={"url"} id="" />
                </div>

                <div>
                  <h4>Description</h4>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>

                <div>
                  <h4>Link</h4>
                  <input type="text" value={"url"} id="" />
                </div>

                <h2>Add license</h2>
                <div>
                  <h4>Description</h4>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>

                <div>
                  <h4>Link</h4>
                  <input type="text" value={"url"} id="" />
                </div>

                <h2>How to contribute the project</h2>

                <div>
                  <h4>Description</h4>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>

                <div>
                  <h4>Link</h4>
                  <input type="text" value={"url"} id="" />
                </div>

                <h2>Include test</h2>

                <div>
                  <h4>Description</h4>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>

                <div>
                  <h4>Link</h4>
                  <input type="text" value={"url"} id="" />
                </div>
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
