import React from 'react'
import "./Projects.scss";
import ProjectCards from "./ProjectCards";


export default function Projects() {
  return (
    <section id="project">
      <h1 className="heading animated slideInLeft">PROJECTS</h1>
      <p className="underline animated fadeInLeft delay-1s"></p>
      <ProjectCards />
    </section>
  )
}
