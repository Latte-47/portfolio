"use client";

import "./hero.scss";
import { useAnimate, stagger } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("div", { opacity: [0, 1], x: [-100, 0] }, { delay: stagger(0.2) });
  });

  return (
    <section id="hero-section">
      <div className="title-container" ref={scope}>
        <div className="title-one">VIPLAV</div>
        <div className="title-two">KAMBLE</div>
        <div className="title-three">FRONT-END DEVELOPER</div>
      </div>
    </section>
  );
}
