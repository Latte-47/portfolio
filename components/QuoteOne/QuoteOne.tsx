"use client";

import "./quoteOne.scss";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function QuoteOne() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <section id="quoteOne-section">
      <div
        className="quote-container"
        data-aos="fade"
        data-aos-easing="ease-out"
        data-aos-once="true"
      >
        <div className="quote">
          &quot;There are only two hard things in Computer Science:&nbsp;
          <span>cache invalidation and naming things.&quot;</span>
        </div>
        <div className="credit">- Phil Karlton</div>
      </div>
    </section>
  );
}
