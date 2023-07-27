import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./HomeAnon.css";

function HomeAnon() {
  return (
    <>
      <h1 id="homeanonparagraphheader">Get Started</h1>
      <div id="HomepageAnonButtons">
        <p id="homeanonparagraph">
          Join us and create an account to manage your watchlist, get real-time
          market data, and keep track of your favorite cryptocurrencies.
        </p>
        {/* <Link to="/signup" className="styled-link">
          Sign Up
        </Link> */}

        <Link
          id="loginbutton"
          className="home-button btn btn-primary font-weight-bold mr-3"
          to="/login"
        >
          Log in
        </Link>
        <Link
          id="signupbutton"
          className="home-button btn btn-primary font-weight-bold"
          to="/signup"
        >
          Sign Up
        </Link>
      </div>
    </>
  );
}

export default HomeAnon;
