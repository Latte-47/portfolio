"use client";

import "./hero.scss";
import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import useMousePosition from "@/utils/mousePosition";
import useMouseClicked from "@/utils/mouseClicked";

const heroContent = {
  firstName: "VIPLAV",
  lastName: "KAMBLE",
  titleOne: "FRONT-END",
  titleTwo: "DEVELOPER",
};

const binaryContent = {
  lineOne:
    "01010110 01101001 01110000 01101100 01100001 01110110 00100000 01001011 01100001 01101101 01100010 01101100 01100101",
  lineTwo:
    "01000110 01110010 01101111 01101110 01110100 00101101 01000101 01101110 01100100",
  lineThree:
    "01000100 01100101 01110110 01100101 01101100 01101111 01110000 01100101 01110010",
};

export default function Hero() {
  const { x, y } = useMousePosition();
  const mouseClicked = useMouseClicked();
  const scrollerBinaryTop =
    typeof document !== "undefined"
      ? document.querySelectorAll(".binary-top")
      : null;

  if (scrollerBinaryTop) {
    const addAnimation = () => {
      scrollerBinaryTop.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");
      });
    };

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }

  const scrollerBinaryBottom =
    typeof document !== "undefined"
      ? document.querySelectorAll(".binary-bottom")
      : null;

  if (scrollerBinaryBottom) {
    const addAnimation = () => {
      scrollerBinaryBottom.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");
      });
    };

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }

  if (typeof document !== "undefined") {
    const mousePointer = document.getElementById("mouse-pointer");
    setTimeout(() => {
      if (mousePointer) {
        mousePointer.style.left = x - 20 / 2 + "px";
        mousePointer.style.top = y - 20 / 2 + "px";
      }
    }, 65);
  }

  const splitFirstName = [{ letters: heroContent.firstName.split("") }];
  const splitLastName = [{ letters: heroContent.lastName.split("") }];
  const splitTitleOne = [{ letters: heroContent.titleOne.split("") }];
  const splitTitleTwo = [{ letters: heroContent.titleTwo.split("") }];

  const splitLineOne = [{ letters: binaryContent.lineOne.split(" ") }];
  const splitLineTwo = [{ letters: binaryContent.lineTwo.split(" ") }];
  const splitLineThree = [{ letters: binaryContent.lineThree.split(" ") }];

  useEffect(() => {
    AOS.init();
  });

  return (
    <section id="hero-section">
      <div
        id="mouse-pointer"
        className={
          mouseClicked ? "mouse-pointer-clicked" : "mouse-pointer-unclicked"
        }
      >
        <div className="mouse-aura" />
      </div>
      <div className="title-main">
        <div className="title-container">
          <div className="title-name">
            {splitFirstName.map((letterGroup, index) => (
              <div
                className="name-one"
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-easing="ease-out-back"
                key={index}
              >
                {letterGroup.letters.map((letter, i) => (
                  <p key={i}>{letter}</p>
                ))}
              </div>
            ))}
            {splitLastName.map((letterGroup, index) => (
              <div
                className="name-two"
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-easing="ease-out-back"
                data-aos-delay="100"
                key={index}
              >
                {letterGroup.letters.map((letter, i) => (
                  <p key={i}>{letter}</p>
                ))}
              </div>
            ))}
          </div>
          <div
            className="title"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-easing="ease-out-back"
            data-aos-delay="200"
          >
            {splitTitleOne.map((letterGroup, index) => (
              <div className="title-one" key={index}>
                {letterGroup.letters.map((letter, i) => (
                  <p key={i}>{letter}</p>
                ))}
              </div>
            ))}
            {splitTitleTwo.map((letterGroup, index) => (
              <div className="title-two" key={index}>
                {letterGroup.letters.map((letter, i) => (
                  <p key={i}>{letter}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div
          className="hero-mask"
          data-aos="fade"
          data-aos-once="true"
          data-aos-easing="ease-out"
          data-aos-delay="200"
        >
          <div className="mask-aura" />
        </div>
        <div className="mask-div">
          <div className="mask-bg">
            <div className="binary-top">
              {splitLineOne.map((letterGroup, index) => (
                <div className="lines line-one" key={index}>
                  {letterGroup.letters.map((letter, i) => (
                    <p className={(i + 1) % 3 === 0 ? "green" : ""} key={i}>
                      {letter}
                      &nbsp;
                    </p>
                  ))}
                  {letterGroup.letters.map((letter, i) => (
                    <p className={(i + 1) % 3 === 0 ? "green" : ""} key={i}>
                      {letter}
                      &nbsp;
                    </p>
                  ))}
                  {letterGroup.letters.map((letter, i) => (
                    <p className={(i + 1) % 3 === 0 ? "green" : ""} key={i}>
                      {letter}
                      &nbsp;
                    </p>
                  ))}
                </div>
              ))}
              {splitLineTwo.map((letterGroup, index) => (
                <div className="lines line-two" key={index}>
                  {letterGroup.letters.map((letter, i) => (
                    <p className={(i + 1) % 2 === 0 ? "green" : ""} key={i}>
                      {letter}
                      &nbsp;
                    </p>
                  ))}
                  {letterGroup.letters.map((letter, i) => (
                    <p className={(i + 1) % 2 === 0 ? "green" : ""} key={i}>
                      {letter}
                      &nbsp;
                    </p>
                  ))}
                  {letterGroup.letters.map((letter, i) => (
                    <p className={(i + 1) % 2 === 0 ? "green" : ""} key={i}>
                      {letter}
                      &nbsp;
                    </p>
                  ))}
                </div>
              ))}
              {splitLineThree.map((letterGroup, index) => (
                <div className="lines line-three" key={index}>
                  {letterGroup.letters.map((letter, i) => (
                    <p className={(i + 1) % 4 === 0 ? "green" : ""} key={i}>
                      {letter}
                      &nbsp;
                    </p>
                  ))}
                  {letterGroup.letters.map((letter, i) => (
                    <p className={(i + 1) % 4 === 0 ? "green" : ""} key={i}>
                      {letter}
                      &nbsp;
                    </p>
                  ))}
                  {letterGroup.letters.map((letter, i) => (
                    <p className={(i + 1) % 4 === 0 ? "green" : ""} key={i}>
                      {letter}
                      &nbsp;
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <div className="binary-bottom">
              {splitLineOne.map((letterGroup, index) => (
                <div className="lines line-one" key={index}>
                  {letterGroup.letters.map((letter, i) => (
                    <p className={(i + 1) % 3 === 0 ? "green" : ""} key={i}>
                      {letter}
                      &nbsp;
                    </p>
                  ))}
                  {letterGroup.letters.map((letter, i) => (
                    <p className={(i + 1) % 3 === 0 ? "green" : ""} key={i}>
                      {letter}
                      &nbsp;
                    </p>
                  ))}
                  {letterGroup.letters.map((letter, i) => (
                    <p className={(i + 1) % 3 === 0 ? "green" : ""} key={i}>
                      {letter}
                      &nbsp;
                    </p>
                  ))}
                </div>
              ))}
              {splitLineTwo.map((letterGroup, index) => (
                <div className="lines line-two" key={index}>
                  {letterGroup.letters.map((letter, i) => (
                    <p className={(i + 1) % 2 === 0 ? "green" : ""} key={i}>
                      {letter}
                      &nbsp;
                    </p>
                  ))}
                  {letterGroup.letters.map((letter, i) => (
                    <p className={(i + 1) % 2 === 0 ? "green" : ""} key={i}>
                      {letter}
                      &nbsp;
                    </p>
                  ))}
                  {letterGroup.letters.map((letter, i) => (
                    <p className={(i + 1) % 2 === 0 ? "green" : ""} key={i}>
                      {letter}
                      &nbsp;
                    </p>
                  ))}
                </div>
              ))}
              {splitLineThree.map((letterGroup, index) => (
                <div className="lines line-three" key={index}>
                  {letterGroup.letters.map((letter, i) => (
                    <p className={(i + 1) % 4 === 0 ? "green" : ""} key={i}>
                      {letter}
                      &nbsp;
                    </p>
                  ))}
                  {letterGroup.letters.map((letter, i) => (
                    <p className={(i + 1) % 4 === 0 ? "green" : ""} key={i}>
                      {letter}
                      &nbsp;
                    </p>
                  ))}
                  {letterGroup.letters.map((letter, i) => (
                    <p className={(i + 1) % 4 === 0 ? "green" : ""} key={i}>
                      {letter}
                      &nbsp;
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="mask-content">
            <div className="content content-left">
              <h2>
                Pixel Perfect <br />
                Code
              </h2>
            </div>
            <div className="content content-right">
              <h2>
                Picture-Perfect <br />
                Designs
              </h2>
            </div>
          </div>
        </div>
        {/* <div
          className={
            semicircleClicked
              ? "title-semicircle-open"
              : "title-semicircle-close"
          }
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-easing="ease-out"
          data-aos-delay="100"
        >
          <div
            className="semicircle"
            onMouseEnter={() => {
              setSemicircleClicked(true);
            }}
            onMouseLeave={() => {
              setSemicircleClicked(false);
            }}
          >
            <div className="semicircle-aura" />
          </div>
          <div
            className={
              semicircleClicked ? "title-right-open" : "title-right-close"
            }
            onMouseEnter={() => {
              setSemicircleClicked(true);
            }}
            onMouseLeave={() => {
              setSemicircleClicked(false);
            }}
          >
            <div className="binary">
              {splitLineOne.map((letterGroup, index) => (
                <div className="lines line-one" key={index}>
                  {letterGroup.letters.map((letter, i) => (
                    <p className={(i + 1) % 3 === 0 ? "green" : ""} key={i}>
                      {letter}
                      &nbsp;
                    </p>
                  ))}
                  {letterGroup.letters.map((letter, i) => (
                    <p className={(i + 1) % 3 === 0 ? "green" : ""} key={i}>
                      {letter}
                      &nbsp;
                    </p>
                  ))}
                </div>
              ))}
              {splitLineTwo.map((letterGroup, index) => (
                <div className="lines line-two" key={index}>
                  {letterGroup.letters.map((letter, i) => (
                    <p className={(i + 1) % 2 === 0 ? "green" : ""} key={i}>
                      {letter}
                      &nbsp;
                    </p>
                  ))}
                  {letterGroup.letters.map((letter, i) => (
                    <p className={(i + 1) % 2 === 0 ? "green" : ""} key={i}>
                      {letter}
                      &nbsp;
                    </p>
                  ))}
                </div>
              ))}
              {splitLineThree.map((letterGroup, index) => (
                <div className="lines line-three" key={index}>
                  {letterGroup.letters.map((letter, i) => (
                    <p className={(i + 1) % 4 === 0 ? "green" : ""} key={i}>
                      {letter}
                      &nbsp;
                    </p>
                  ))}
                  {letterGroup.letters.map((letter, i) => (
                    <p className={(i + 1) % 4 === 0 ? "green" : ""} key={i}>
                      {letter}
                      &nbsp;
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
