"use client";

import Link from "next/link";
import "./header.scss";

export default function Header() {
  return (
    <header>
      <div className="header-top-separator" />
      <div className="header-contents">
        <div className="left">
          <div className="name">VIPLAV K.</div>
        </div>
        <div className="center">
          <div className="skills">SKILLS</div>
          <div className="projects">PROJECTS</div>
          <div className="about">ABOUT</div>
        </div>
        <div className="right">
          <div className="contact">CONTACT</div>
        </div>
      </div>
      <div className="header-bottom-separator" />
    </header>
  );
}
