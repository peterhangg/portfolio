import React from 'react'
import "./About.scss";
const frontend = ["react", "javascript", "sass", "css", "jquery", "bootstrap", "html"];

export default function About(props) {
  return (
    <div className="about-section" id="About">
      <h1>ABOUT</h1>
      <div className="about-info">
        <img src="https://picsum.photos/id/237/300/300" alt="Peter Hang"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, veritatis aliquam consequuntur fuga unde error odit nulla illum debitis porro dolorem. Quam odio provident, quae nam asperiores aperiam iste dolorum?</p>
      </div>
      <div className="skills-section">
        <div className="front-end">
          <h2>Front-end</h2>
          {frontend.map((img, index) => (
            <img key={index}src={`../icons/${img}.png`} alt={`${img}`}/>
          ))} 
        </div>
      </div>
    </div>
  )
}
