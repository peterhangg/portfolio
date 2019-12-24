import React from 'react'
import { Card, CardDeck, Col } from 'react-bootstrap';
import "./ProjectCards.scss";
import "../../animate.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

const projects = [
  {
    title: "DISGO",
    discription: "Listen, discover, and never miss another show! DISGO is a music streaming platform that utilizes real-world event and music data to integrate seamlessly with the Spotify ecosystem.",
    github: "https://github.com/duncan-mann/DISGO",
    site: "https://disgo.live/"
  },
  {
    title: "Scheduler",
    discription: "Interview Scheulder is a full stack web application that allows users to book an appointment from a select list of interviewers. Users can book an interview between Monday to Friday and have the ability to add, save, modify and delete their appointments from the selected available time slots.",
    github: "https://github.com/peterhangg/scheduler",
    site: "https://scheduler-ph.netlify.com/"
  },
  {
    title: "Megabite",
    discription: "A ritual-like restaurant ordering app for nearby restaurants. This app is client-facing (users can find restaurants and place orders) and restaurant facing (restaurants can receive and confirm orders).", 
    github: "https://github.com/peterhangg/Megabite",
    site: ""
  },
  {
    title: "Tweeter",
    discription: "Tweeter is a simple single-page Twitter clone. This app is built with HTML, CSS, JS, jQuery and AJAX on the frontend and Node and Express on the backend.",
    github: "https://github.com/peterhangg/tweeter",
    site: ""
  }
];

export default function ProjectCards() {
  return (
    <div className="card-container">
      <CardDeck>
        {projects.map((project, index) => (
          <Col key={index} xl={3} lg={6} md={6} sm={12}>
            <Card key={index} className="animated fadeInRight">
              <Card.Img variant="top" src={`../projects/${project.title}.png`} />
              <Card.Body>
                <h3>{project.title}</h3>
                <Card.Text>{project.discription}</Card.Text>
              </Card.Body>
              <Card.Footer style={{ padding: '0' }}>
                <div className="card-link">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">Learn More</a>
                </div>
                <div className="card-link">
                  <a href={project.site} target="_blank" rel="noopener noreferrer">Live</a>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          ))}
        </CardDeck>
    </div>
  )
}
