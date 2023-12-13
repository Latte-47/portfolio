"use client";

import "./hero.scss";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <section id="hero-section">
      <div className="title-container">
        <div
          className="title-one"
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-easing="ease-out-back"
        >
          VIPLAV
        </div>
        <div
          className="title-two"
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-easing="ease-out-back"
          data-aos-delay="100"
        >
          KAMBLE
        </div>
        <div
          className="title-three"
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-easing="ease-out-back"
          data-aos-delay="200"
        >
          FRONT-END DEVELOPER
        </div>
      </div>
    </section>
  );
}
