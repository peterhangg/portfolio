import React from 'react'
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';

import "./Home.scss";

const handleClick = ref => {
  window.scrollTo({
    left: 0, 
    top: ref.current.offsetTop,
    behavior: 'smooth'
  })
}

export default function Home(props) {
  return (
    <>
      <div className="intro">
        <Typed className="introText"
          strings={["Hi! I'm Peter Hang, and I'm a full-stack developer."]}
          typeSpeed={90}
        />
        <a href="#" onClick={() => handleClick(props.aboutRef)}>View my work</a>
      </div>
    </>
  )
}
