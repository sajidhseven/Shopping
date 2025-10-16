import React, { useState, useEffect } from "react";

export default function Hero() {
  const headlines = [
    "Seasonal Collection",
    "New Arrivals 2025",
    "Built to Last"
  ];

  const [index, setIndex] = useState(0); // konsa headline chal raha hai
  const [subIndex, setSubIndex] = useState(0); // kitne letters type hue
  const [deleting, setDeleting] = useState(false); // delete mode on/off
  const [blink, setBlink] = useState(true); // cursor blink
  const [pause, setPause] = useState(false); // rukne ka break

  useEffect(() => {
    if (pause) return;

    const timeout = setTimeout(() => {
      setSubIndex((prev) =>
        deleting ? prev - 1 : prev + 1
      );

      // jab pura word type ho gaya
      if (!deleting && subIndex === headlines[index].length) {
        setPause(true);
        setTimeout(() => {
          setDeleting(true);
          setPause(false);
        }, 1500); // 1.5 sec rukna
      }

      // jab pura delete ho gaya
      if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % headlines.length);
      }
    }, deleting ? 60 : 120); // delete fast, type slow

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, pause, index, headlines]);

  // Cursor blinking
  useEffect(() => {
    const cursor = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(cursor);
  }, []);

  return (
    <header className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1 className="typing-text">
            {headlines[index].substring(0, subIndex)}
            <span className="cursor">{blink ? "...|" : " "}</span>
          </h1>
          <p>
            New arrivals that are comfortable, minimal, and built to last.
            Explore curated pieces for men & women.
          </p>
          <div className="hero-cta">
            <button className="primary">Shop Now</button>
            <button className="ghost">Explore</button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://constant.myntassets.com/web/assets/img/sudio-nav-banner.png"
            alt="hero"
          />
        </div>
      </div>
    </header>
  );
}
