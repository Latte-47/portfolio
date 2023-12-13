"use client";

import Image from "next/image";
import "./about.scss";

import placeHolderImg from "@/public/assets/images/placeholder-img.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <section id="about-section">
      <div className="about-container">
        <div
          className="about-title"
          data-aos="fade"
          data-aos-easing="ease-out"
          data-aos-once="true"
        >
          ABOUT
        </div>
        <div className="about-content">
          <div
            className="about-image"
            data-aos="fade-right"
            data-aos-easing="ease-out-back"
            data-aos-once="true"
            data-aos-anchor=".about-title"
            data-aos-offset="300"
          >
            <div className="container-main">
              <div className="container-div-one"></div>
              <div className="container-div-two">
                <Image
                  fill
                  src={placeHolderImg}
                  alt="placeHolderImg"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="container-div-three"></div>
            </div>
          </div>
          <div
            className="about-text"
            data-aos="fade-left"
            data-aos-easing="ease-out-back"
            data-aos-once="true"
            data-aos-anchor=".about-title"
            data-aos-offset="300"
          >
            <p>
              I&apos;ve been a tech-enthusiast since before I even knew how to
              spell “enthusiast”. It was a given that I would find a career in
              coding.
            </p>
            <p>
              In 2022, I completed my bachelor&apos;s degree in mathematics and
              electronics. It was after that that I decided to put all my focus
              on practicing web development. I quickly took to the new concepts
              and continued learning more and more with each new project.
            </p>
            <p>
              In my free time, I usually play games learn a new song on the
              ukulele or go outside and find interesting new places.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
