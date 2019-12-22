import React from 'react'
import "./Footer.scss";
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer >
      <div className="icon-container animated fadeInLeft">
        <a className="icon" href="https://www.linkedin.com/in/peter-hang-921a43197/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="footer-icon" size={40} /></a>
        <a className="icon" href="https://github.com/peterhangg" target="_blank" rel="noopener noreferrer"><FaGithubSquare className="footer-icon" size={40} /></a>
      </div>
      <p className="copyright-name"> PETER HANG <span className="copyright">© 2019 </span> </p>
    </footer>
  )
}
