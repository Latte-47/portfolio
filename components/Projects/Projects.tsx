"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useInView,
  useAnimate,
} from "framer-motion";
import "./projects.scss";

import SourceCode from "@/components/Icons/SourceCode";
import ViewProject from "@/components/Icons/ViewProject";

import tkpImage from "@/public/assets/images/tkp-webpage.png";
import { useEffect, useRef } from "react";

const projectsList = [
  {
    title: "THE KAPDA PROJECT",
    tools: ["NextJS", "SCSS", "GSAP", "Sanity"],
    year: "2023",
    type: "Front-end Development",
    description: `A clothing website that strives to make sustainable, slow
    fashion the norm. While developing this website, I got the
    chance to work with GSAP for animations. Sanity was also used
    as a CMS.`,
    image: tkpImage,
    imageAlt: "tkpImage",
    sourceCode: "",
    projectLive: "https://thekapdaproject.vercel.app/",
  },
  {
    title: "THE KAPDA PROJECT",
    tools: ["NextJS", "SCSS", "GSAP", "Sanity"],
    year: "2023",
    type: "Front-end Development",
    description: `A clothing website that strives to make sustainable, slow
    fashion the norm. While developing this website, I got the
    chance to work with GSAP for animations. Sanity was also used
    as a CMS.`,
    image: tkpImage,
    imageAlt: "tkpImage",
    sourceCode: "",
    projectLive: "https://thekapdaproject.vercel.app/",
  },
];

export default function Projects() {
  const animateRef = useRef(null);
  const [scope, animate] = useAnimate();
  const isInView = useInView(animateRef, { once: true });
  // const { scrollYProgress } = useScroll({
  //   target: animateRef,
  //   offset: ["center end", "start center"],
  // });

  useEffect(() => {
    if (isInView) {
      animate(".title", { opacity: [0, 1], y: [-20, 0] }, { duration: 0.3 });
      animate(".enter-left", { opacity: 1, x: [-300, 0] }, { duration: 0.3 });
      animate(".enter-right", { opacity: 1, x: [300, 0] }, { duration: 0.3 });
      animate(".projects-all", { opacity: 1, y: [20, 0] }, { duration: 0.3 });
    }
  });

  return (
    <section id="projects-section">
      <div id="projects-anchor" />
      <div id="projects-container" ref={scope}>
        <div className="title">PROJECTS</div>
        <div className="projects-list">
          {projectsList.map((project, index) => (
            <div
              className={`projectOne ${
                index % 2 == 0 ? "enter-left" : "enter-right"
              }`}
              key={index}
              ref={animateRef}
            >
              <div className="left">
                <div className="left-top">
                  <p className="project-title">{project.title}</p>
                  <div className="project-tools">
                    <ul>
                      {project.tools.map((tool, toolIndex) => (
                        <li key={toolIndex}>{tool}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="left-center">
                  <p className="project-year">{project.year}</p>
                  <p className="project-type">{project.type}</p>
                </div>
                <div
                  className={project.sourceCode ? "left-bottom" : "no-source"}
                >
                  <Link href={project.sourceCode} target="_blank">
                    <div className="project-source">
                      <SourceCode />
                      <p>Source Code</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="right">
                <div className="project-content">
                  <div className="right-top">
                    <div className="project-description">
                      {project.description}
                    </div>
                  </div>
                  <div
                    className={project.projectLive ? "right-bottom" : "no-live"}
                  >
                    <Link href={project.projectLive} target="_blank">
                      <div className="project-live">
                        <ViewProject />
                        <p>View Project</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="project-image">
                  <Image
                    fill
                    src={project.image}
                    alt={project.imageAlt}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="projects-all">
            <div className="content">
              <Link href={"projects"}>view all projects</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
