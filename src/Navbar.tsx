import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";
import a47_logo from "./images/a47-symbolmark.svg";
import { Link } from "react-router-dom";

const Navigation = (props: any) => {
  function clickHandler(e: any, href?: string) {
    console.log("scrolling to", href);
    const hrefValue: any = href;
    const offsetTop = document.querySelector(hrefValue)?.offsetTop - 150;
    window.scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  }

  let links: string[] = ["Who We Are", "What We Do", "What Were Doing", "Blog"];
  return (
    <div className="navbar-container">
      <Navbar expand="lg" bg="light" fixed="top">
        <Navbar.Brand onClick={(e: any) => clickHandler(e, "#Top")}>
          <img src={a47_logo} className="navbar-logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            {links.map((link) => {
              if (link !== "Blog") {
                return (
                  <Nav.Link
                    onClick={(e: any) =>
                      clickHandler(e, `#${link.replaceAll(" ", "-")}`)
                    }
                  >
                    {link}
                  </Nav.Link>
                );
              } else {
                return (
                    <Nav.Link
                      onClick={(e: any) =>{}} 
                      href="/atomic47-website/blog"
                    >
                      {link}
                    </Nav.Link>
                );
              }
            })}
          </Nav>
          <button
            className="header-button"
            onClick={(e: any) => clickHandler(e, "#Contact")}
          >
            Contact
          </button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
