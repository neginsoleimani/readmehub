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
    subtitle:"About project",
    demo:"Url",
    bag_img:"Url",
    bag_link:"Url",
    info:"Write ...",
    tec:"JavaScript,Python,...",
    challenges:"Write ...",
    future:"Write ...",
    install_dec:"Write ...",
    install_dec_img:"Url",
    use_dec:"Write ...",
    use_dec_img:"Url",
    credits_dec:"Write ...",
    credits_dec_link:"Url",
    credits_dec_img:"Url",
    contribute_dec:"Write ...",
    contribute_dec_link:"Url",
    test_dec:"Write",
    test_dec_link:"Url",
    license_dec:"Write ...",
    license_dec_link:"Url"
  })

  const changeHandler = event =>{
    setData({...data,[event.target.name]:event.target.value})
    console.log(data)
  }

  const [value, setValue] = useState()

  useEffect(()=>{
    setValue("![Project Logo]("+data.logo+")" + "</br>" + "***" + data.title +"***"+"</br> "+data.subtitle+"</br> "+"![Project Demo]("+data.demo+")" +"</br> "
    +"![badges image]("+data.bag_img+")"+ "</br>"+"[Click here]("+data.bag_link+")"+"</br>"
    +data.info + "</br>" + data.tec+ "</br>" +data.challenges+ "</br>" + data.future + "</br>"  
    +data.install_dec+ "</br>"+"![Install image]("+data.install_dec_img+")" + "</br>" 
    +data.use_dec+"</br>" +"![How to use image]("+data.use_dec_img+")"+"</br>"
    +data.credits_dec+"</br>"+"[Click here]("+data.credits_dec_link+")"+"</br>"+"![credits image]("+data.credits_dec_img+")"
    +data.contribute_dec+"<br/>"+"[Click here]("+data.contribute_dec_link+")"+"<br/>"
    +data.test_dec+"<br/>"+"[Click here]("+data.test_dec_link+")"+"<br/>"
    +data.license_dec+"</br>"+"[Click here]("+data.license_dec_link+")"+"<br/>"
    )
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
                <h4>Subtitle</h4>
                <input type="text" name="subtitle" value={data.subtitle}
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
                <input type="text" value={data.bag_img} name="bag_img" onChange={changeHandler}/>
              </div>

              <div>
                <h4>Link</h4>
                <input type="text" value={data.bag_link} name="bag_link" onChange={changeHandler}/>
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
                  <textarea type="text" cols="20" rows="5" name="install_dec" value={data.install_dec}
                  onChange={changeHandler} />
                </div>

                <div>
                  <h4>Image</h4>
                  <input type="text" value={data.install_dec_img} name={"install_dec_img"} onChange={changeHandler}/>
                </div>

                <h2>How to use the project</h2>

                <div>
                  <h4>Description</h4>
                  <textarea type="text" cols="20" rows="5" name="use_dec" value={data.use_dec}
                  onChange={changeHandler} />
                </div>


                <div>
                  <h4>Image</h4>
                  <input type="text" value={data.use_dec_img} name="use_dec_img" onChange={changeHandler}/>
                </div>

                <h2>Include the credits</h2>

                <div>

                <div>
                  <h4>Description</h4>
                  <textarea name="credits_dec" cols="30" rows="10" value={data.credits_dec} onChange={changeHandler}></textarea>
                </div>

                <div>
                  <h4>Link</h4>
                  <input type="text" value={data.credits_dec_link} name="credits_dec_link" onChange={changeHandler}/>
                </div>

                  <h4>Image</h4>
                  <input type="text" value={data.credits_dec_img} name="credits_dec_img" onChange={changeHandler}/>
                </div>

    

                <h2>How to contribute the project</h2>

                <div>
                  <h4>Description</h4>
                  <textarea name="contribute_dec" cols="30" rows="10" value={data.contribute_dec} onChange={changeHandler}></textarea>
                </div>

                <div>
                  <h4>Link</h4>
                  <input type="text" value={data.contribute_dec_link} name="contribute_dec_link" onChange={changeHandler}/>
                </div>

                <h2>Include test</h2>

                <div>
                  <h4>Description</h4>
                  <textarea name="test_dec" cols="30" rows="10" value={data.test_dec} onChange={changeHandler}></textarea>
                </div>

                <div>
                  <h4>Link</h4>
                  <input type="text" value={data.test_dec_link} name="test_dec_link" onChange={changeHandler}/>
                </div>

                <h2>Add license</h2>
                <div>
                  <h4>Description</h4>
                  <textarea name="license_dec" cols="30" rows="10" value={data.license_dec} onChange={changeHandler}></textarea>
                </div>

                <div>
                  <h4>Link</h4>
                  <input type="text" value={data.license_dec_link} name="license_dec_link" onChange={changeHandler}/>
                </div>

                <h2>Back to top</h2>
                <div>
                 {/* back to top check box */}
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
