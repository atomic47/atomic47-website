import React from "react";
import { Button } from "react-bootstrap";
import hero_satellite from "./images/hero_satellite.svg";

const Hero = (props: any) => {
  function clickHandler(e: any, href?: string) {
    console.log("scrolling to", href);
    const hrefValue: any = href;
    const offsetTop = document.querySelector(hrefValue)?.offsetTop - 150;
    window.scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  }
  return (
    <div className="hero-section">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="hero-text">
        <div className="header">
          <h1>Scaling Your Business Starts Here</h1>
        </div>
        <div className="hero-body">
          <h2>
            Think of Atomic47 Labs as your launching pad, finding your path
            towards sustainable growth.
          </h2>
          <h2>
            Deriving value from your organization’s data and people. Bringing
            your ideas to life.
          </h2>
        </div>
        <div className="hero-button-section">
          <button className="hero-button" style={{ width: "100%" }} onClick={(e: any) => clickHandler(e, "#Contact")}>
            Ready to Skyrocket?
          </button>
        </div>
      </div>
      <img className="hero-image" src={hero_satellite} alt="satelite-image" />
    </div>
  );
};

export default Hero;
