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
    logo :"",
    logo_align:"",
    logo_width:"",
    logo_height:"",
    title:"",
    subtitle:"",
    demo:"",
    demo_align:"",
    demo_width:"",
    demo_height:"",
    bag_img:"",
    bad_align:"",
    bad_width:"",
    bad_height:"",
    bag_link:"",
    info:"",
    tec:"- item1\n- item2",
    challenges:"",
    future:"",
    install_dec_img:"",
    install_align:"",
    install_width:"",
    install_height:"",
    install_note:"",
    install_dec:"",
    use_dec:"",
    use_dec_img:"",
    use_align:"",
    use_width:"",
    use_height:"",
    credits_dec:"",
    credits_dec_link:"",
    credits_dec_img:"",
    contribute_dec:"",
    contribute_dec_link:"",
    test_dec:"",
    test_dec_link:"",
    license_dec:"",
    license_link_name:"",
    license_dec_link:""
  })

  const changeHandler = event =>{
    setData({...data,[event.target.name]:event.target.value})
  }

  const align_left =()=>{
    data.logo_align = "left"
  }
 
   const align_center =()=>{
     data.logo_align = "center"
  }

    const align_right =()=>{
      data.logo_align = "right"
 }


  const [value, setValue] = useState()

  useEffect(()=>{
    setValue("<h1 align='"+data.logo_align+"'>"+"<img src='"+data.logo+"' width='"+data.logo_width+"' height='"+data.logo_height+"'/>" + "</br>" + data.title +"<h3 align='center'>"+data.subtitle+"</h3>"
    +"<p align='"+data.bad_align+"'>"+"<a href='"+data.bag_link+"'>"+"<img src='"+data.bag_img+"' width='"+data.bad_width+"' height='"+data.bad_height+"'/>"+"</a>"+"</br>"+"</p>"
    +"<h1 align='"+data.demo_align+"'>"+"<img src='"+data.demo+"' width='"+data.demo_width+"' height='"+data.demo_height+"'/>"+"</h1>"
    +`\n`+"<details>"+`\n`+"<summary>Contents</summary>"+`\n`+`\n`+`\n`+"[Features](#features)"+"</br>"+"[Installation](#installation)"+"</br>"+"[Usage](#usage)"+"</br>"+"[License](#license)"+"</details>"+"\n"+"</br>"
    +data.info + "</br>"+"<h2>Features</h2>" +`\n`+`\n`+ data.tec+`\n`+`\n`+"</br>" +data.challenges+ "</br>" + data.future   
    +"<h2>Installation</h2>"+"<p align='"+data.install_align+"'>"+"<img src='"+data.install_dec_img+"' width='"+data.install_width+"' height='"+data.install_height+"'/>"+"</p>"+`\n`+`\n`+"> Note: "+data.install_note+`\n`+`\n`+`\n`+"```"+`\n`+data.install_dec+`\n`+"```"+`\n`
    +"<h2>Usage</h2>"+data.use_dec+"</br>" +"</br>"+"<p align='"+data.use_align+"'>"+"<img src='"+data.use_dec_img+"' width='"+data.use_width+"' height='"+data.use_height+"'/>"+"</br>"+"</p>"+"</br>"
    +"<h2>License</h2>"+data.license_dec+" "+"<a href='"+data.license_dec_link+"'>"+data.license_link_name+"</a>"+"</br>"+`\n`+"<p align='Right'>"+"<a href='#top'>Back to top</a>"+"</p>"
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
                <h4>Logo image</h4>
                <input
                name="logo"
                  type="text"
                  placeholder={"Url"}
                  value={data.logo}
                  onChange={changeHandler}
                />
              </div>

              <div className="logo_style">
                <div className="image_align">
                <h4>Logo align</h4>
                  <input type="text" name="logo_align" placeholder="Left,center,right" value={data.logo_align} onChange={changeHandler}/>
                </div>
                <div className="image_dimension">
                  <h4>Logo dimension</h4>
                  <input type="text" name="logo_width" placeholder="Width" value={data.logo_width}  onChange={changeHandler}/>
                  <input type="text" name="logo_height" placeholder="Height" value={data.logo_height}  onChange={changeHandler}/>
                </div>
              </div>

              <div>
                <h4>Title</h4>
                <input type="text" name="title" placeholder={"Project name"} 
                value={data.title}
                  onChange={changeHandler}/>
              </div>

              <div>
                <h4>Subtitle</h4>
                <input type="text" name="subtitle" placeholder={"About project"}
                value={data.subtitle}
                  onChange={changeHandler}/>
              </div>


              <h2>Badges</h2>

              <div>
                <h4>Image</h4>
                <input type="text" placeholder={"Url"} value={data.bag_img} name="bag_img" onChange={changeHandler}/>
              </div>

              <div className="image_align">
              <h4>Badges align</h4>
                  <input type="text" name="bad_align" placeholder="Left,center,right" value={data.bad_align} onChange={changeHandler}/>
              </div>
               <div className="image_dimension">
                  <h4>Badges dimension</h4>
                  <input type="text" name="bad_width" placeholder="Width" value={data.bad_width}  onChange={changeHandler}/>
                  <input type="text" name="bad_height" placeholder="Height" value={data.bad_height}  onChange={changeHandler}/>
                </div>
              <div>
                <h4>Link</h4>
                <input type="text" placeholder={"Url"} value={data.bag_link} name="bag_link" onChange={changeHandler}/>
              </div>

              <div>
                <h4>Demo image</h4>
                <input
                name="demo"
                  type="text"
                  placeholder={"Url"}
                  value={data.demo}
                  onChange={changeHandler}
                />
              </div>

                <div className="image_align">
                <h4>Demo align</h4>
                  <input type="text" name="demo_align" placeholder="Left,center,right" value={data.demo_align} onChange={changeHandler}/>
                </div>
                <div className="image_dimension">
                  <h4>Demo dimension</h4>
                  <input type="text" name="demo_width" placeholder="Width" value={data.demo_width}  onChange={changeHandler}/>
                  <input type="text" name="demo_height" placeholder="Height" value={data.demo_height}  onChange={changeHandler}/>
                </div>


              <div>
                <h2>Project description</h2>

                <div>
                  <h4>What is your application does?</h4>
                  <textarea type="text" cols="20" rows="5" name="info" value={data.info} placeholder={"Write ..."}
                  onChange={changeHandler}/>
                </div>

                <div>
                  <h4>The technologies</h4>
                  <textarea type="text" cols="20" rows="5" name="tec" value={data.tec} placeholder={"Write ..."} 
                  onChange={changeHandler} />
                </div>

                <div>
                  <h4>Some of the challenges your face it</h4>
                  <textarea type="text" cols="20" rows="5" name="challenges" value={data.challenges} placeholder={"Write ..."}
                  onChange={changeHandler} />
                </div>

                <div>
                  <h4>Features you hope to implement in future</h4>
                  <textarea type="text" cols="20" rows="5" name="future" value={data.future} placeholder={"Write ..."}
                  onChange={changeHandler} />
                </div>
              </div>


                <h2>How to install and run project</h2>

                <div>
                  <h4>Image</h4>
                  <input type="text" value={data.install_dec_img} placeholder={"Url"} name={"install_dec_img"} onChange={changeHandler}/>
                </div>

                <div className="image_align">
                <h4>Install image align</h4>
                  <input type="text" name="install_align" placeholder="Left,center,right" value={data.install_align} onChange={changeHandler}/>
                </div>
                <div className="image_dimension">
                  <h4>Install image dimension</h4>
                  <input type="text" name="install_width" placeholder="Width" value={data.install_width}  onChange={changeHandler}/>
                  <input type="text" name="install_height" placeholder="Height" value={data.install_height}  onChange={changeHandler}/>
                </div>

                <div>
                  <h4>Note</h4>
                  <textarea type="text" cols="20" rows="5" name="install_note" value={data.install_note} placeholder={"Write ..."}
                  onChange={changeHandler} />
                </div>

                <div>
                  <h4>Description</h4>
                  <textarea type="text" cols="20" rows="5" name="install_dec" value={data.install_dec} placeholder={"Write ..."}
                  onChange={changeHandler} />
                </div>



                <h2>How to use the project</h2>

                <div>
                  <h4>Description</h4>
                  <textarea type="text" cols="20" rows="5" name="use_dec" value={data.use_dec} placeholder={"Write ..."}
                  onChange={changeHandler} />
                </div>

                <div>
                  <h4>Image</h4>
                  <input type="text" placeholder={"Url"} value={data.use_dec_img} name="use_dec_img" onChange={changeHandler}/>
                </div>

                <div className="image_align">
                <h4>Usage image align</h4>
                  <input type="text" name="use_align" placeholder="Left,center,right" value={data.use_align} onChange={changeHandler}/>
                </div>
                <div className="image_dimension">
                  <h4>Usage image dimension</h4>
                  <input type="text" name="use_width" placeholder="Width" value={data.use_width}  onChange={changeHandler}/>
                  <input type="text" name="use_height" placeholder="Height" value={data.use_height}  onChange={changeHandler}/>
                </div>

                <h2>Add license</h2>
                <div>
                  <h4>Description</h4>
                  <textarea name="license_dec" cols="30" rows="10" value={data.license_dec} placeholder={"Write ..."} onChange={changeHandler}></textarea>
                </div>

                <div>
                  <h4>Link</h4>
                  <input type="text" placeholder={"Write ..."} value={data.license_link_name} name="license_link_name" onChange={changeHandler}/>
                  <input type="text" placeholder={"Url"} value={data.license_dec_link} name="license_dec_link" onChange={changeHandler}/>
                </div>

                <div>
                 {/* back to top check box */}
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
