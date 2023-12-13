"use client";

import { useState, useRef, useEffect } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { target } = e;
    const { name, value } = target;

    setForm({ ...form, [name]: value });
  };

  const handleSend = (e: any) => {
    e.preventDefault();
    setLoading(true);

    let service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    let template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    let public_key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(
        `${service_id}`,
        `${template_id}`,
        {
          from_name: form.name,
          to_name: "Viplav",
          from_email: form.email,
          to_email: "viplavvkamble747@gmail.com",
          message: form.message,
        },
        `${public_key}`
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you, I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);

          alert("Something went wrong.");
        }
      );
  };

  useEffect(() => {
    AOS.init();
  });

  return (
    <section id="contact-section">
      <div className="contact-container">
        <div
          className="contact-title"
          data-aos="fade"
          data-aos-easing="ease-out"
          data-aos-once="true"
        >
          CONTACT
        </div>
        <div className="contact-content">
          <div
            className="contact-info"
            data-aos="fade-right"
            data-aos-easing="ease-out-back"
            data-aos-once="true"
            data-aos-anchor=".contact-title"
            data-aos-offset="300"
          >
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
          <div
            className="contact-form"
            data-aos="fade-left"
            data-aos-easing="ease-out-back"
            data-aos-once="true"
            data-aos-anchor=".contact-title"
            data-aos-offset="300"
          >
            <form className="form-content" ref={formRef} onSubmit={handleSend}>
              <div className="content-one">
                <div className="name">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  ></input>
                </div>
                <div className="email">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  ></input>
                </div>
              </div>
              <div className="message">
                <label>Message:</label>
                <textarea
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button className="send" type="submit">
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
