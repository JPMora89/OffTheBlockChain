import React from "react";
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
// import NavLink from "react-bootstrap/esm/NavLink";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";



function NavBar({ currentUser, logout }) {
  const loginLinks = (
    <>
      <NavLink to="/login" className="nav-link" activeClassName="active">
        Login
      </NavLink>
    </>
  );

  const userLinks = (
    <>
      <NavLink to="/" className="nav-link" activeClassName="active" onClick={logout}>
        Logout
      </NavLink>
    </>
  );

  return (
    <div className="navbar">
      <Navbar expand="lg" variant="dark">
        <Container>
          <Navbar.Brand id="navbarLogo" as={Link} to="/">
            OFF THE BLOCKCHAIN
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="ml-auto">
              <SearchBar id="searchbar" />
              <NavLink id="marketnavbar" to="/cointable" className="nav-link" activeClassName="active">
                Market
              </NavLink>
              <NavLink id="watchlistnavbar" to="/watchlist" className="nav-link" activeClassName="active">
                Watchlist
              </NavLink>
              <NavLink id="knowledgenavbar" to="/knowledge" className="nav-link" activeClassName="active">
                Knowledge
              </NavLink>
              <NavLink id="latestnewsnavbar" to="/latestnews" className="nav-link" activeClassName="active">
                Latest News
              </NavLink>
              {currentUser ? userLinks : loginLinks}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
