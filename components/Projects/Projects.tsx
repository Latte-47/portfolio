import Image from "next/image";
import "./projects.scss";

import SourceCode from "@/components/Icons/SourceCode";
import ViewProject from "@/components/Icons/ViewProject";

import tkpImage from "@/public/assets/images/tkp-webpage.png";

export default function Projects() {
  return (
    <section id="projects-section">
      <div className="projects-container">
        <div className="title">PROJECTS</div>
        <div className="projects-list">
          <div className="projectOne">
            <div className="left">
              <div className="left-top">
                <p className="project-title">THE KAPDA PROJECT</p>
                <div className="project-tools">
                  <ul>
                    <li>NextJS</li>
                    <li>SCSS</li>
                    <li>GSAP</li>
                    <li>Sanity</li>
                  </ul>
                </div>
              </div>
              <div className="left-center">
                <p className="project-year">2023</p>
                <p className="project-type">Front-end Development</p>
              </div>
              <div className="left-bottom">
                <div className="project-source">
                  <SourceCode />
                  <p>Source Code</p>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="project-content">
                <div className="project-description">
                  A clothing website that strives to make sustainable, slow
                  fashion the norm. While developing this website, I got the
                  chance to work with GSAP for animations. Sanity was also used
                  as a CMS.
                </div>
                <div className="project-live">
                  <ViewProject />
                  <p>View Project</p>
                </div>
              </div>
              <div className="project-image">
                <Image
                  fill
                  src={tkpImage}
                  alt="tkpImage"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
