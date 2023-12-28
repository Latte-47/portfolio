"use client";

import { useState, useEffect } from "react";

export default function useMouseClicked() {
  const [mouseClicked, setMouseClicked] = useState(false);

  const handleClick = () => {
    setMouseClicked(true);

    setTimeout(() => {
      setMouseClicked(false);
    }, 500);
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return mouseClicked;
}
