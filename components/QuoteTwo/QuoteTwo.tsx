"use client";

import "./quoteTwo.scss";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function QuoteTwo() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <section id="quoteTwo-section">
      <div
        className="quote-container"
        data-aos="fade"
        data-aos-easing="ease-out"
        data-aos-once="true"
      >
        <div className="quote">
          &quot;Everyday life is like programming, I guess. If you love something,&nbsp;
          <span>you can put beauty into it.&quot;</span>
        </div>
        <div className="credit">- Donald Knuth</div>
      </div>
    </section>
  );
}
