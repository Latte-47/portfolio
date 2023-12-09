"use-client"

import "./footer.scss";
import Github from "@/components/Icons/Github";
import Linkedin from "@/components/Icons/Linkedin";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="left">
          <p>
            PORTFOLIO/
            <span>
              2023
            </span>
          </p>
        </div>
        <div className="center">
          <p>
            Designed and Developed by&nbsp;
            <span>
              Viplav Kamble
            </span>
          </p>
        </div>
        <div className="right">
          <div className="linkedin-container">
            <Linkedin />
          </div>
          <div className="github-container">
            <Github />
          </div>
        </div>
      </div>
    </footer>
  )
}