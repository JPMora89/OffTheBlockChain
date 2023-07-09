

import React from "react";
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function NavBar({ currentUser, logout}) {
  const loginLinks = (
    <>
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
        <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
    </>);

  const userLinks = (
    <>
      {/* <Nav.Link as={Link} to="/profile">Profile</Nav.Link> */}
      <Nav.Link as={Link} to="/" onClick={logout}>Logout</Nav.Link>
    </>
  )

  return (
    <div className="navbar">
    <Navbar  expand="lg" variant="dark" bg="black">
      <Container>
          <Navbar.Brand id="navbarLogo" as={Link} to="/">OFF THE BLOCKCHAIN</Navbar.Brand>
          <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link id="navbarLinks" as={Link} to="/watchlist">Watchlist</Nav.Link>
              <Nav.Link id="navbarLinks" as={Link} to="/knowledge">Knowledge</Nav.Link>
              {currentUser ? userLinks: loginLinks}
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  );
}

export default NavBar;