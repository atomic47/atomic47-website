import React from "react";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import a47_logo from "./images/a47-symbolmark.svg";
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";

const Footer = (props: any) => {
  function clickHandler(e: any, href?: string) {
    console.log("scrolling to", href);
    const hrefValue: any = href;
    const offsetTop = document.querySelector(hrefValue)?.offsetTop - 150;
    window.scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  }
  let links: string[] = ["Who We Are", "What We Do", "What We're Doing", "Blog", "Contact"];
  return (
    <div className="footer-container">
      <div className="section-1">
        <div onClick={(e: any)=>(clickHandler(e, '#Top'))} className="back-to-top-mobile">
          <FontAwesomeIcon className="arrow-icon" icon={faArrowUp} />
          <h2 className="footer-text">Back to the top</h2>
        </div>
        <div onClick={(e: any)=>(clickHandler(e, '#Top'))} className="back-to-top-desktop">
          <img className="a47-logo" src={a47_logo} alt="Atomic47"/>
          <h2>ATOMIC47</h2>
          <h2>LABS</h2>
        </div>
        <div className="socials">
          <a href='https://www.facebook.com/atomic47labs/'><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://twitter.com/atomic47_labs"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.instagram.com/atomic47labs/"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.linkedin.com/company/atomic47labs/"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
      <div className="section-2">
        <div className="footer-links">
          {links.map((link) => {
            let formattedLink = link.replace(/\s+/g, '-');
            formattedLink = formattedLink.replace(/\'/g, '');
            return (
            <Nav.Link
              onClick={(e: any) =>
                {
                  console.log('formattedLink click', formattedLink)
                  clickHandler(e, `#${formattedLink}`)
                }
              }
              href={
                window.location.href.includes("blog")
                  ? `/#${formattedLink}`
                  : `#${formattedLink}`
              }
            >
              {link}
            </Nav.Link>
          )}
          )}
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
