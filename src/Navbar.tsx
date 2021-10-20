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
    const hrefValue: any = href;
    const offsetTop = document.querySelector(hrefValue)?.offsetTop - 150;
    window.scroll({
      top: offsetTop,
      behavior: "smooth",
    })
    setTimeout(()=>{
      e.target.classList.add("active");
    }, 800)
  }

  let links: string[] = ["Who We Are", "What We Do", "What We're Doing", "Blog"];
  return (
    <div className="navbar-container">
      <Navbar expand="lg" bg="light" fixed="top">
        <Navbar.Brand onClick={(e: any) => clickHandler(e, "#Top")}>
          <img src={a47_logo} className="navbar-logo" alt="Atomic47 Logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            {links.map((link) => {
              if (link !== "Blog") {
                console.log('link', link);
                let formattedLink = link.replace(/\s+/g, '-');
                formattedLink = formattedLink.replace(/\'/g, '');
                return (
                  <Nav.Link
                    onClick={(e: any) =>{
                        clickHandler(e, `#${formattedLink}`)
                      }
                    }
                    href={
                      window.location.href.includes("blog")
                  ? `/#${formattedLink}`
                  : `#${formattedLink}`
                    }
                    id={`${formattedLink}-link`}
                  >
                    {link}
                  </Nav.Link>
                );
              } else {
                return (
                  <Nav.Link
                    onClick={(e: any) => {}}
                    href="/blog"
                    id="blog-link"
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
