import React, { useRef, useState, useEffect } from 'react';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact  from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

import './App.scss';

export default function App() {

// refs for DOM elements to scroll to
const homeRef = useRef(null);
const navRef = useRef(null);
const aboutRef = useRef(null);
const projectsRef = useRef(null);
const contactRef = useRef(null);

// fix navbar to top when scrolled pass home section
const [nav, setNav] = useState(false);

useEffect(() => {
  const scrollCallBack = window.addEventListener("scroll", () => {
    return (window.pageYOffset > navRef.current.offsetTop - 10) ? setNav(true) : setNav(false);
  });
  return () => {
    window.removeEventListener("scroll", scrollCallBack);
  };
}, []);

  return (
    <div className="App">
      <div id='home' ref={homeRef}>
        <Home aboutRef={aboutRef} />
      </div>
      <div id='nav-bar' className={nav ? 'nav' : ''} ref={navRef}>
        {nav && <NavBar homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef}/>} 
      </div>
      <div id='about' ref={aboutRef}>
        <About />
      </div>
      <div id='projects' ref={projectsRef}>
        <Projects />
      </div>
      <div id='contact' ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

