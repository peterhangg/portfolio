import React from 'react'
import "./NavBar.scss"

export default function NavBar() {
  return (
    <nav id="NavBar">
      <div className="logo">
          <h4>Peter Hang</h4>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#Home">HOME</a>
        </li>
        <li>
          <a href="#About">ABOUT</a>
        </li>
        <li>
          <a href="#Projects">PROJECTS</a>
        </li>
        <li>
          <a href="#Contact">CONTACT</a>
        </li>
      </ul>
    </nav>
  )
}
