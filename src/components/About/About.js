import React from 'react'
import "./About.scss";
import "../../animate.scss";

const frontend = ["react", "javascript", "sass", "css", "jQuery", "bootstrap", "html"];
const backend = ["node", "expressjs", "rails", "postgreSQL", "mySQL"];
const currentLearning = ["redux", "mongoDB", "graphQL"];

export default function About(props) {
  return (
    <div id="About">
      <h1 className="heading animated slideInLeft">ABOUT</h1>
      <p className="underline animated fadeInLeft delay-1s"></p>
      <div className="about-section">
        <article className="about-info animated fadeInLeft">
          <img src="https://picsum.photos/id/237/300/300" alt="Peter Hang"/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, veritatis aliquam consequuntur fuga unde error odit nulla illum debitis porro dolorem. 
            Quam odio provident, quae nam asperiores aperiam iste dolorum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum debitis architecto fuga tempore officia inventore cupiditate consectetur vitae fugiat, corrupti quam, illo accusamus ex ipsam magni maxime. Beatae, temporibus autem?</p>
        </article>
        <div className="skills-section animated fadeInRight">
          <div className="tech-stack">
            <h2>Frontend</h2>
            {frontend.map((img, index) => (
              <img key={index} className="stack-img" src={`../icons/${img}.png`} alt={`${img}`}/>
            ))} 
          </div>
          <div className="tech-stack">
            <h2>Backend</h2>
            {backend.map((img, index) => (
              <img key={index} className="stack-img" src={`../icons/${img}.png`} alt={`${img}`}/>
            ))} 
          </div>
          <div className="tech-stack">
            <h2>Currently Learning</h2>
            {currentLearning.map((img, index) => (
              <img key={index} className="stack-img" src={`../icons/${img}.png`} alt={`${img}`}/>
            ))} 
          </div>
        </div>
      </div>
    </div>
  )
}
