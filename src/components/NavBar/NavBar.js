import React from 'react'
import "./NavBar.scss"

const handleClick = ref => {
  window.scrollTo({
    left: 0, 
    top: ref.current.offsetTop,
    behavior: 'smooth'
  })
}

export default function NavBar(props) {

  return (
    <nav id="NavBar">
      <ul className="nav-links">
        <li>
          <a onClick={() => handleClick(props.homeRef)}>HOME</a>
        </li>
        <li>
          <a onClick={() => handleClick(props.aboutRef)}>ABOUT</a>
        </li>
        <li>
          <a onClick={() => handleClick(props.projectsRef)}>PROJECTS</a>
        </li>
        <li>
          <a onClick={() => handleClick(props.contactRef)}>CONTACT</a>
        </li>
      </ul>
    </nav>
  )
}
