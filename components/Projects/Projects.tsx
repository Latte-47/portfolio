"use client";

import Image from "next/image";
import Link from "next/link";
import "./projects.scss";

import SourceCode from "@/components/Icons/SourceCode";
import ViewProject from "@/components/Icons/ViewProject";

import tkpImage from "@/public/assets/images/tkp-webpage.png";
import { useEffect, useRef, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const projectsList = [
  {
    title: "THE KAPDA PROJECT",
    tools: ["NextJS", "SCSS", "GSAP", "Sanity"],
    year: "2023",
    type: "Front-end Development",
    description: `A clothing website that strives to make sustainable, slow fashion the norm. In collaboration with couple of my acquaintances, I got to use and further hone my skills while working on the front-end aspect of several of this website's pages. While developing this website, I also got the chance to work with GSAP for animations and Sanity as CMS.`,
    image: tkpImage,
    imageAlt: "tkpImage",
    sourceCode: "",
    projectLive: "https://thekapdaproject.vercel.app/",
  },
];

export default function Projects() {
  const [enterTop, setEnterTop] = useState(true);
  const [exitTop, setExitTop] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="projects-section">
      <div id="projects-container">
        <div
          className="title"
          data-aos="fade"
          data-aos-easing="ease-out"
          data-aos-once="true"
        >
          PROJECTS
        </div>
        <div className="projects-list">
          {projectsList.map((project, index) => (
            <div
              className={`project ${
                index % 2 == 0 ? "enter-left" : "enter-right"
              }`}
              key={index}
              data-aos={`${index % 2 == 0 ? "fade-right" : "fade-left"}`}
              data-aos-once="true"
              data-aos-duration="500"
              data-aos-easing="ease-out-back"
              data-aos-anchor-placement="center-bottom"
              onMouseEnter={(event) => {
                const element = event.currentTarget;
                const rect = element.getBoundingClientRect();
                const enterIsTop = event.clientY < rect.top + rect.height / 2;
                enterIsTop ? setEnterTop(true) : setEnterTop(false);
              }}
              onMouseLeave={(event) => {
                const exitElement = event.currentTarget;
                const exitRect = exitElement.getBoundingClientRect();
                const exitIsTop =
                  event.clientY < exitRect.top + exitRect.height / 2;
                exitIsTop ? setExitTop(true) : setExitTop(false);
              }}
            >
              <div className="hover-container">
                <div
                  className={`
                  ${enterTop ? "on-hover-top" : "on-hover-bottom"} 
                  ${exitTop ? "hover-exit-top" : "hover-exit-bottom"}`}
                />
              </div>
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
          {/* <div
            className="projects-all"
            data-aos="fade-up"
            data-aos-easing="ease-out-back"
            data-aos-once="true"
          >
            <div className="content">
              <Link href={"projects"}>view all projects</Link>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
