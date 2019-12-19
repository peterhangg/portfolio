import React from 'react'
import "./About.scss";
import "../../animate.scss";

const frontend = ["react", "javascript", "sass", "css", "jquery", "bootstrap", "html"];
const backend = ["node", "expressjs", "rails", "postgreSQL", "mySQL"];
const currentLearning = ["redux", "mongoDB", "graphQL"];

export default function About(props) {
  return (
    <div className="about-section" id="About">
      <h1 className="about-headings animated slideInLeft">ABOUT</h1>
      <div className="about-info">
        <img src="https://picsum.photos/id/237/300/300" alt="Peter Hang"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, veritatis aliquam consequuntur fuga unde error odit nulla illum debitis porro dolorem. Quam odio provident, quae nam asperiores aperiam iste dolorum?</p>
      </div>
      <div className="skills-section">
        <h1>Tech Stack</h1>
        <div className="tech-stack">
          <h2>Frontend</h2>
          {frontend.map((img, index) => (
            <img key={index} className="stack-img animated fadeInRight" src={`../icons/${img}.png`} alt={`${img}`}/>
          ))} 
        </div>
        <div>
          <h2>Backend</h2>
          {backend.map((img, index) => (
            <img key={index} className="stack-img animated fadeInRight" src={`../icons/${img}.png`} alt={`${img}`}/>
          ))} 
        </div>
        <div>
          <h2>Current Learning</h2>
          {currentLearning.map((img, index) => (
            <img key={index} className="stack-img animated fadeInRight" src={`../icons/${img}.png`} alt={`${img}`}/>
          ))} 
        </div>
      </div>
    </div>
  )
}
