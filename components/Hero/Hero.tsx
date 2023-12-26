"use client";

import "./hero.scss";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import useMousePosition from "@/utils/mousePosition";

const heroContent = {
  firstName: "VIPLAV",
  lastName: "KAMBLE",
  titleOne: "FRONT-END",
  titleTwo: "DEVELOPER",
};

export default function Hero() {
  const { x, y } = useMousePosition();

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

  useEffect(() => {
    AOS.init();
  });

  return (
    <section id="hero-section">
      <div id="mouse-pointer">
        <div className="mouse-aura" />
      </div>
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
    </section>
  );
}
