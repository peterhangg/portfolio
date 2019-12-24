import React, { useState } from 'react'
import "./Contact.scss";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <h1 className="heading animated slideInLeft">CONTACT</h1>
      <p className="underline animated fadeInLeft delay-1s"></p>
      <p className="contact-question animated fadeInLeft delay-1s">Have a question?</p>
      <div class="form-container animated fadeInLeft">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Name" 
            value={name} 
            onChange={event => setName(event.target.value)} 
            required
          />
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter Email"
            value={email}
            onChange={event => setEmail(event.target.value)}  
            required
          />
          <textarea 
            id="subject" 
            name="subject" 
            placeholder="Your Message"
            value={message}
            onChange={event => setMessage(event.target.value)}   
            required
          />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    </>
  )
}
