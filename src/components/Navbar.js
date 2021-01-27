import React from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Navbar.css";

const NavBar = () => {
  const history = useHistory();
  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand style={{cursor: 'pointer'}}
          onClick={() => {
            history.push("/");
          }}
        >
          {" "}
          <img
            width="50"
            height="50"
            alt=""
            src="../../../../HealingHubLogo.png"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              onClick={() => {
                history.push("/pricing");
              }}
            >
              Pricing
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                history.push("/auth");
              }}
            >
              Signup
            </Nav.Link>
            <Nav.Link
              onCLick={() => {
                history.push("/about");
              }}
            >
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
