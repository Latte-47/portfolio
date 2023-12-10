"use client";

import { useState, useRef } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";


export default function Contact() {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  return (
    <section id="contact-section">
      <div className="contact-container">
        <div className="contact-title">CONTACT</div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-title">Let&apos;s get in touch</div>
            <div className="info-content">
              <div className="info-phone">
                <p className="title">Phone</p>
                <a href={`tel:${7264846950}`} className="content">
                  <p>+91-7264846950</p>
                </a>
              </div>
              <div className="info-email">
                <p className="title">Email</p>
                <a href="mailto:viplavvkamble747@gmail.com" className="content">
                  <p>viplavvkamble747@gmail.com</p>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form className="form-content">
              <div className="content-one">
                <div className="name">
                  <label htmlFor="name">Name:</label>
                  <input placeholder="Enter your name"></input>
                </div>
                <div className="email">
                  <label>Email:</label>
                  <input placeholder="Enter your email"></input>
                </div>
              </div>
              <div className="message">
                <label>Message:</label>
                <textarea placeholder="Enter your message"></textarea>
              </div>
              <button className="send" type="button">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
