"use client";

import Image from "next/image";
import "./about.scss";

import placeHolderImg from "@/public/assets/images/placeholder-img.jpg";
import profilePic from "@/public/assets/images/profile-pic.png";
import profileOne from "@/public/assets/images/profile-one.jpg";
import profileTwo from "@/public/assets/images/profile-two.jpg";
import ArrowLeft from "../Icons/ArrowLeft";
import ArrowRight from "../Icons/ArrowRight";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// const aboutContent = [
//   {
//     image: placeHolderImg,
//     text: `I've been a tech-enthusiast since before I even knew how to
//   spell “enthusiast”. It was a given that I would find a career in
//   coding.

//   In 2022, I completed my bachelor's degree in mathematics and
//   electronics. It was after that that I decided to put all my focus
//   on practicing web development. I quickly took to the new concepts
//   and continued learning more and more with each new project.

//   In my free time, I usually play games learn a new song on the
//   ukulele or go outside and find interesting new places.
// `,
//   },
// ];

const quoteList = [
  "Whatever you do, enjoy it to the fullest. That is the secret of life.",
  "The only way to truly escape the mundane is for you to constantly be evolving.",
];

export default function About() {
  const [quoteIndex, setQuoteIndex] = useState(1);

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
        {/* {aboutContent.map((about, index) => (
        ))} */}
        <div
          className="about-content"
          // key={index}
        >
          <div
            className="about-image"
            data-aos="fade-right"
            data-aos-easing="ease-out-back"
            data-aos-once="true"
            data-aos-anchor=".about-title"
            data-aos-offset="300"
          >
            <div className="container-main">
              <div className="container-div-one">
                <button
                  onClick={() => {
                    quoteIndex == 0
                      ? setQuoteIndex(quoteList.length - 1)
                      : setQuoteIndex(quoteIndex - 1);
                  }}
                >
                  <ArrowLeft />
                </button>
              </div>
              <div className="container-div-two">
                <Image
                  fill
                  src={profileTwo}
                  alt="profile"
                  style={{ objectFit: "cover" }}
                />
                <div className="image-cover">
                  <p>&quot;{quoteList[quoteIndex]}&quot;</p>
                </div>
              </div>
              <div className="container-div-three">
                <button
                  onClick={() => {
                    quoteIndex == quoteList.length - 1
                      ? setQuoteIndex(0)
                      : setQuoteIndex(quoteIndex + 1);
                  }}
                >
                  <ArrowRight />
                </button>
              </div>
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
            <p className="about-text-content">
              Ever since I was younger, I&apos;ve been immersed in the world of
              technology, and it was only natural that my journey led me to a
              career in coding.
            </p>
            <p className="about-text-content">
              Completing my bachelor&apos;s in mathematics and electronics in
              2022, I redirected my efforts toward web development. Rapidly
              adapting to fresh concepts, I sustained an ongoing cycle of
              learning and growth with every new project.
            </p>
            <p className="about-text-content">
              Beyond the lines of code, you&apos;ll find me immersed in diverse
              interests. I&apos;m usually engrossed in a game, strumming a new
              tune on my ukulele, or exploring the great outdoors in search of
              fascinating new places.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/16fLf9GoIusvwAdjvRZ2-89wMKgKy2i_D/view?usp=sharing"
            >
              <button type="button">
                <p>Resume</p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
