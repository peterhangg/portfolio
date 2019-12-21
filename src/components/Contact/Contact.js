import React from 'react'
import "./Contact.scss";

export default function Contact() {
  return (
    <section id="Contact">
      <h1 className="heading animated slideInLeft">CONTACT</h1>
      <p className="underline animated fadeInLeft delay-1s"></p>
      <p className="contact-question animated fadeInLeft delay-1s">Have a question?</p>
      <div class="form-container animated fadeInLeft">
        <form action="">
          <input type="text" id="name" name="firstname" placeholder="Name" required/>
          <input type="email" id="email" name="email" placeholder="Enter Email" required/>
          <textarea id="subject" name="subject" placeholder="Your Message" required></textarea>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    </section>
  )
}
