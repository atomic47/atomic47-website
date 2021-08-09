import React from "react";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import a47_logo from "./images/a47-symbolmark.svg"

const Footer = (props: any) => {
  return (
    <div className="footer-container">
      <div className="section-1">
        <div className="back-to-top-mobile">
          <FontAwesomeIcon className="arrow-icon" icon={faArrowUp}/>
          <h2 className="footer-text">Back to the top</h2>
        </div>
        <div className="back-to-top-desktop">
          <img className="a47-logo" src={a47_logo}/>
          <h2>ATOMIC47</h2>
          <h2>LABS</h2>
        </div>
        <div className="socials">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>
      <div className="section-2">
        <div className="footer-links">
          <a>Who We Are</a>
          <a>What We Do</a>
          <a>What We're Doing</a>
          <a>Blog</a>
          <a>Contact</a>
        </div>
        <h2 className="footer-text">
          © Atomic 47 Labs <br />
          All Rights Reserved
        </h2>
      </div>
    </div>
  );
};

export default Footer;
