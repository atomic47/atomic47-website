import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";
import a47_logo from "./images/a47-symbolmark.svg"

const Navigation = (props: any) => {
let links: string[] = ['Who We Are', 'What We Do', 'What Were Doing', 'Blog'];
  return (
    <div className="navbar-container">
      <Navbar expand="lg" bg="light" fixed="top">
        <Navbar.Brand onClick={() => {}}>
          <img src={a47_logo} className="navbar-logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            {links.map((link)=>(
              <Nav.Link>
                  {link}
              </Nav.Link>
            ))
            }
          </Nav>
          <button className='header-button'>Contact</button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
