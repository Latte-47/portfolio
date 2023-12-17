"use client";

import { Link as ScrollLink } from "react-scroll";
import "./header.scss";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import MenuOpen from "../Icons/MenuOpen";
import MenuClose from "../Icons/MenuClose";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init();
  });

  const logoclick = () => {
    if (pathname !== "/") {
      router.push("/");
    }
  };

  const backclick = () => {
    router.push("/");
  };

  return (
    <header data-aos="slide-down" data-aos-easing="ease-out-back">
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
        <div className="menu-button" onClick={handleMenuClick}>
          {isOpen ? <MenuClose /> : <MenuOpen />}
        </div>
        <div className={`${isOpen ? "menu-opened" : "menu-closed"}`}>
          <div
            className={`${isOpen ? "mask-active" : "mask-inactive"}`}
            onClick={() => {
              setIsOpen(false);
            }}
          />
          <div className="menu-container">
            <ScrollLink
              to="skills-section"
              smooth={true}
              duration={500}
              spy={true}
              onClick={() => {setIsOpen(false)}}
            >
              <div className="menu-skills">SKILLS</div>
            </ScrollLink>
            <div className="menu-separator" />
            <ScrollLink
              to="projects-section"
              offset={+150}
              smooth={true}
              duration={500}
              spy={true}
              onClick={() => {setIsOpen(false)}}
            >
              <div className="menu-projects">PROJECTS</div>
            </ScrollLink>
            <div className="menu-separator" />
            <ScrollLink
              to="about-section"
              smooth={true}
              duration={500}
              spy={true}
              onClick={() => {setIsOpen(false)}}
            >
              <div className="menu-about">ABOUT</div>
            </ScrollLink>
          </div>
        </div>
      </div>
      <div className="header-bottom-separator" />
    </header>
  );
}
