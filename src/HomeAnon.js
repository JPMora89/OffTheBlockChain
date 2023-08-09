import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import "./HomeAnon.css";
import purpleearth from "./assets/images/purpleearth.jpg";
import "./Homepage.css";



// function HomeAnon() {
//   return (
//     <>
//       <h1 id="homeanonparagraphheader">Get Started</h1>
//       <div id="HomepageAnonButtons">

//         {/* <Link to="/signup" className="styled-link">
//           Sign Up
//         </Link> */}

//         <Link
//           id="loginbutton"
//           className="home-button btn btn-primary font-weight-bold mr-3"
//           to="/login"
//         >
//           Log in
//         </Link>
//         <Link
//           id="signupbutton"
//           className="home-button btn btn-primary font-weight-bold"
//           to="/signup"
//         >
//           Sign Up
//         </Link>
//       </div>
//     </>
//   );
// }

// export default HomeAnon;



const Homepage = () => {
  return (
    <div className="container">
      <header className="header">
        <h2 id="homepageheader">Welcome to Off the Blockchain</h2>
        <p id="homepageheadersentence">
          Explore the world of cryptocurrencies and blockchain technology
        </p>        <p id="homeanonparagraph">
          Join us and create an account to manage your watchlist, get real-time
          market data, and keep track of your favorite cryptocurrencies.
               <Link
          id="signupbutton"
          className="home-button btn btn-primary font-weight-bold"
          to="/signup"
        >
          Sign Up
        </Link> </p>
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
          {/* <Link id="exploremore" to="/cointable" className="styled-link">
            Explore More
          </Link> */}
          <Link
          id="loginbutton"
          className="home-button btn btn-primary font-weight-bold mr-3"
          to="/login"
        >
          Log in
        </Link>

        </div>
      </section>
    </div>
  );
};

export default Homepage;

