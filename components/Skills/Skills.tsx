"use client";

import "./skills.scss";

import HTML from "../Icons/Html";
import CSS from "../Icons/Css";
import SCSS from "../Icons/Scss";
import Javascript from "../Icons/Javascript";
import React from "../Icons/React";
import NextJs from "../Icons/NextJs";
import Sanity from "../Icons/Sanity";
import { useAnimate, stagger, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

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
  const [scope, animate] = useAnimate();
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true });

  useEffect(() => {
    
    if (isInView) {
      animate(".skills", { opacity: [0, 1], x: [-100, 0] }, { delay: stagger(0.1) });
      animate(".title", { opacity: [0, 1], y: [-20, 0] }, { duration: 0.3 })
    }
  }, [isInView]);

  return (
    <section id="skills-section">
      <div className="skills-container" ref={scope}>
        <div className="title">SKILLS</div>
        <ul className="skills-content">
          {skillsList.map((item, index) => (
            <li className="skills" key={index}>
              <div className="icon-container">{item.icon}</div>
              <div className="name">{item.name}</div>
            </li>
          ))}
        </ul>
        <div className="animation-ref" ref={animationRef} />
      </div>
    </section>
  );
}
