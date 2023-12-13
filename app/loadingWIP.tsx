"use client";

import { useEffect } from "react";
import "./loading.scss";

import { useAnimate } from "framer-motion";

export default function Loading() {
  const [scope, animate] = useAnimate();
  
  useEffect(() => {
    animate(".loading-text", { x: [-100, 0], opacity: [0, 1] }, { duration: 3 })
  })

  return (
    <div id="loading-screen" ref={scope}>
      <div className="loading-text">
        Loading...
      </div>
    </div>
  );
};
