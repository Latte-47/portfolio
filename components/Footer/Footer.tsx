import "./footer.scss";
import Link from "next/link";

import Github from "@/components/Icons/Github";
import Linkedin from "@/components/Icons/Linkedin";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="left">
          <p>
            PORTFOLIO/
            <span>2024</span>
          </p>
        </div>
        <div className="center">
          <p>
            Designed and Developed by&nbsp;
            <span>Viplav Kamble</span>
          </p>
        </div>
        <div className="right">
          <div className="linkedin-container">
            <Link
              href={"https://www.linkedin.com/in/viplav-kamble-8543ba246/"}
              target="_blank"
            >
              <Linkedin />
            </Link>
          </div>
          <div className="github-container">
            <Link href={"https://github.com/Latte-47"} target="_blank">
              <Github />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
