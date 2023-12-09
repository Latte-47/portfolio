"use client";

import Link from "next/link";
import "./header.scss";

export default function Header() {
  return (
    <header>
      <div className="header-top-separator" />
      <div className="header-contents">
        <div className="left">
          <Link href={"*"}>
            <div className="name">VIPLAV K.</div>
          </Link>
        </div>
        <div className="center">
          <Link href={"#skills-section"}>
            <div className="skills">SKILLS</div>
          </Link>
          <Link href={"#projects-container"}>
            <div className="projects">PROJECTS</div>
          </Link>
          <Link href={"#about-section"}>
            <div className="about">ABOUT</div>
          </Link>
        </div>
        <div className="right">
          <Link href={"#contact-section"}>
            <div className="contact">CONTACT</div>
          </Link>
        </div>
      </div>
      <div className="header-bottom-separator" />
    </header>
  );
}
