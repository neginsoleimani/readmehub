import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import Docnav from "../../components/docnav/Docnav";
import Footer from "../../components/footer/Footer";
import "./readmemakerportfolio.css";

export default class ReadMeMakerPortfolio extends Component {
  render() {
    return (
      <>
        <Docnav />
        <div className="container">
          <div className="readmeprotfolio__container">
            <div className="readmeportfolio__input-box">
              <div className="readmeportfolio__input">
                <h2>Title </h2>
                <div>
                  <h4>Hi 👋, I'm </h4>
                  <input type="text" value={"name"} id="" />
                </div>

                <div>
                  <h2>Subtitle</h2>
                  <input type="text" value={"name"} id="" />
                </div>

                <div>
                  <h2>Work</h2>
                  <div className="readmeportfolio__input">
                    <div>
                      <h4>🔭 I’m currently working on</h4>
                      <input type="text" value={"project name"} />
                      <input type="text" value={"project link"} />
                    </div>
                  </div>
                  <div className="readmeportfolio__input">
                    <div>
                      <h4>👯 I’m looking to collaborate on</h4>
                      <input type="text" value={"project name"} />
                      <input type="text" value={"project link"} />
                    </div>
                  </div>
                  <div className="readmeportfolio__input">
                    <div>
                      <h4>🤝 I’m looking for help with</h4>
                      <input type="text" value={"project name"} />
                      <input type="text" value={"project link"} />
                    </div>
                  </div>
                  <div className="readmeportfolio__input">
                    <div>
                      <h4>🌱 I’m currently learning</h4>
                      <input type="text" value={"framework, courses etc."} />
                    </div>
                  </div>
                  <div className="readmeportfolio__input">
                    <div>
                      <h4>💬 Ask me about</h4>
                      <input type="text" value={"react, vue and gsap"} />
                    </div>
                  </div>
                  <div className="readmeportfolio__input">
                    <div>
                      <h4>📫 How to reach me</h4>
                      <input type="text" value={"exsample@gmail.com"} />
                    </div>
                  </div>
                  <div className="readmeportfolio__input">
                    <div>
                      <h4>👨‍💻 All of my projects are available at</h4>
                      <input type="text" value={"protfolio link"} />
                    </div>
                  </div>
                  <div className="readmeportfolio__input">
                    <div>
                      <h4>📝 I regularly write articles on</h4>
                      <input type="text" value={"blog link"} />
                    </div>
                  </div>
                  <div className="readmeportfolio__input">
                    <div>
                      <h4>📄 Know about my experiences</h4>
                      <input type="text" value={"resume link"} />
                    </div>
                  </div>
                  <div className="readmeportfolio__input">
                    <div>
                      <h4>⚡ Fun fact</h4>
                      <input type="text" value={"I think I'm funny"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="readmeportfolio__result-box">

            </div>
            
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
