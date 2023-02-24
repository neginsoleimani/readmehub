import React from "react";
import { Link } from "react-router-dom";

// Components
import Docnav from "../../components/docnav/Docnav";
import Footer from "../../components/footer/Footer";
import "../readmemakerportfolio/readmemakerportfolio.css";

export default function ReadMeMakerProject() {
  return (
    <>
      <Docnav />
      <div className="container">
        <div className="readmeprotfolio__container">
          <div className="readmeportfolio__input-box">
            <div className="readmeportfolio__input">
              <h2>Project Title </h2>

              <div>
                <h4>Image</h4>
                <input type="text" value={"url"} id="" />
              </div>

              <div>
                <h4>Title</h4>
                <input type="text" value={""} id="" />
              </div>

              <div>
                <h2>Project description</h2>

                <div>
                  <h4>What is your application does?</h4>
                  <input type="text" value={""} id="" />
                </div>

                <div>
                  <h4>The technologies</h4>
                  <input type="text" value={""} id="" />
                </div>

                <div>
                  <h4>Some of the challenges your face it</h4>
                  <input type="text" value={""} id="" />
                </div>

                <div>
                  <h4>Features you hope to implement in future</h4>
                  <input type="text" value={""} id="" />
                </div>
              </div>

              <div className="table__content">
                <h2>Table of content</h2>
                <div>
                  <h5>
                    If your README file is very long you might want to add table
                    of the content
                  </h5>
                </div>

                <h2>How to install and run project</h2>

                <div>
                  <h4>Image</h4>
                  <input type="text" value={"url"} id="" />
                </div>

                <div>
                  <h4>Description</h4>
                  <input type="text" value={""} id="" />
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

                <h2>badges</h2>

                <div>
                  <h4>Image</h4>
                  <input type="text" value={"url"} id="" />
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

          <div className="readmeportfolio__result-box"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
