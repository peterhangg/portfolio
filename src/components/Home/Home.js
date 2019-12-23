import React from 'react'
import "./Home.scss";

const handleClick = ref => {
  window.scrollTo({
    left: 0, 
    top: ref.current.offsetTop,
    behavior: 'smooth'
  })
}

export default function Context(props) {
  console.log("here");
  return (
    <div className="homeBackground">
      <div className="introText">
        <h1>Hi! I'm Peter Hang, and I'm a full-stack developer.</h1>
        <a href="#" onClick={() => handleClick(props.aboutRef)}>View my work</a>
      </div>
    </div>
  )
}
