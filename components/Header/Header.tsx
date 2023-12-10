"use client";

import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import "./header.scss";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const logoclick = () => {
    if (pathname !== "/") {
      router.push("/");
    }
  };

  const backclick = () => {
    router.push("/#projects-anchor");
  };

  return (
    <header>
      <div className="header-top-separator" />
      <div className="header-contents">
        <div className="left">
          <ScrollLink to="hero-section" smooth={true} duration={500} spy={true}>
            <div className="name" onClick={logoclick}>
              VIPLAV K.
            </div>
          </ScrollLink>
        </div>
        <div className={`${pathname == "/" ? "center" : "not-home"}`}>
          <ScrollLink
            to="skills-section"
            smooth={true}
            duration={500}
            spy={true}
          >
            <div className="skills">SKILLS</div>
          </ScrollLink>
          <ScrollLink
            to="projects-section"
            offset={+150}
            smooth={true}
            duration={500}
            spy={true}
          >
            <div className="projects">PROJECTS</div>
          </ScrollLink>
          <ScrollLink
            to="about-section"
            smooth={true}
            duration={500}
            spy={true}
          >
            <div className="about">ABOUT</div>
          </ScrollLink>
        </div>
        <div className="right">
          <ScrollLink
            to="contact-section"
            smooth={true}
            duration={500}
            spy={true}
          >
            <div className={`${pathname == "/" ? "contact" : "not-home"}`}>
              CONTACT
            </div>
            <div
              className={`${pathname == "/projects" ? "go-back" : "not-home"}`}
              onClick={backclick}
            >
              GO BACK
            </div>
          </ScrollLink>
        </div>
      </div>
      <div className="header-bottom-separator" />
    </header>
  );
}
