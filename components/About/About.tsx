"use client";

import Image from "next/image";
import "./about.scss";
import { useAnimate, useInView } from "framer-motion";

import placeHolderImg from "@/public/assets/images/placeholder-img.jpg";
import { useEffect, useRef } from "react";

export default function About() {
  const [scope, animate] = useAnimate();
  const animateRef = useRef(null);
  const isInView = useInView(animateRef, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(".about-title", { opacity: 1, y: [-20, 0] }, { duration: 0.3 });
      animate(".about-image", { opacity: 1, x: [-100, 0] }, { duration: 0.3 });
      animate(".about-text", { opacity: 1, x: [100, 0] }, { duration: 0.3 });
    }
  });

  return (
    <section id="about-section">
      <div className="about-container" ref={scope}>
        <div className="about-title">ABOUT</div>
        <div className="about-content">
          <div className="about-image">
            <div className="container-main">
              <div className="container-div-one"></div>
              <div className="container-div-two"  ref={animateRef}>
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
          <div className="about-text">
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
