"use client";

import "./skills.scss";

import HTML from "../Icons/Html";
import CSS from "../Icons/Css";
import SCSS from "../Icons/Scss";
import Javascript from "../Icons/Javascript";
import React from "../Icons/React";
import NextJs from "../Icons/NextJs";
import Sanity from "../Icons/Sanity";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const skillsList = [
  {
    name: "HTML",
    icon: <HTML />,
  },
  {
    name: "CSS",
    icon: <CSS />,
  },
  {
    name: "SCSS",
    icon: <SCSS />,
  },
  {
    name: "Javascript",
    icon: <Javascript />,
  },
  {
    name: "React",
    icon: <React />,
  },
  {
    name: "NextJS",
    icon: <NextJs />,
  },
  {
    name: "Sanity",
    icon: <Sanity />,
  },
];

export default function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="skills-section">
      <div className="skills-container">
        <div
          className="title"
          data-aos="fade"
          data-aos-once="true"
          data-aos-easing="ease-out"
        >
          SKILLS
        </div>
        <div className="skills-content">
          <ul className="skills-list">
            {skillsList.map((item, index) => (
              <div
                className="skills"
                key={index}
                data-aos="fade-right"
                data-aos-delay={`${index * 50}`}
                data-aos-once="true"
                data-aos-anchor=".skills-content"
                data-aos-offset="175"
                data-aos-easing="ease-out"
              >
                <div className="icon-container">{item.icon}</div>
                <div className="name">{item.name}</div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
