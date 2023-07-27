import React, { useContext, useRef, useEffect } from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

import purpleearth from "./assets/images/purpleearth.jpg";
import BackgroundVideo from "./assets/images/backgroundvideo3.mp4";
import { Helmet } from "react-helmet";

const Homepage = () => {
  return (
    <div className="container">
      <header className="header">
        <h2 id="homepageheader">Welcome to Off the Blockchain</h2>
        <p id="homepageheadersentence">
          Explore the world of cryptocurrencies and blockchain technology
        </p>
      </header>
      <section className="section">
        <img src={purpleearth} alt="blockchainLink" id="blockchainLink" />
      </section>
      <section className="section">
        <h2>About Off the Blockchain</h2>
        <p id="aboutotbc">
          Off the Blockchain is a platform where you can learn about various
          cryptocurrencies, blockchain technology, and stay updated with the
          latest trends in the crypto world.
        </p>
        <div className="explore-more-container">
          <Link id="exploremore" to="/cointable" className="styled-link">
            Explore More
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
