import React from 'react'
import "./Home.scss";

export default function Context() {
  console.log("here");
  return (
    <div className="homeBackground">
      <div className="introText">
        <h1>Hi! I'm Peter Hang, and I'm a full-stack developer.</h1>
        <a href="#About">View my work</a>
      </div>
    </div>
  )
}
