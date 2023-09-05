import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import purpleearth from "./assets/images/purpleearth.jpg";
// import "./HomeAnon.css";




const Homepage = () => {
  return (
    <div className="container">      <section className="section">
        <h2>About Off the Blockchain</h2>
        <p id="aboutotbc">
          Off the Blockchain is a platform where you can learn about various
          cryptocurrencies, blockchain technology, and stay updated with the
          latest trends in the crypto world.
        </p>          <Link
          id="signupbutton"
          className="home-button btn btn-primary font-weight-bold"
          to="/signup"
        >
          Sign Up
        </Link>        <Link
          id="loginbutton"
          className="home-button btn btn-primary font-weight-bold mr-3"
          to="/login"
        >
          Log in
        </Link><p id="homeanonparagraph">
          Join us and create an account to manage your watchlist, get real-time
          market data, and keep track of your favorite cryptocurrencies.
     </p>
        <div className="explore-more-container">
          {/* <Link id="exploremore" to="/cointable" className="styled-link">
            Explore More
          </Link> */}
   

        </div>
      </section>
      <header className="header">
        <h2 id="homepageheader">Welcome to Off the Blockchain</h2>
        {/* <p id="homepageheadersentence">
          Explore the world of cryptocurrencies and blockchain technology
        </p>         */}
      </header>
      <section className="section">
        <img src={purpleearth} alt="blockchainLink" id="blockchainLink" />
      </section>

    </div>
  );
};

export default Homepage;

