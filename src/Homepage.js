import React, {useContext, useRef, useEffect} from 'react';
import './Homepage.css';
import userContext from './userComponents/userContext';
import {Link} from 'react-router-dom';
import CoinTable from './coinComponents/coinTable';
import blockchainLink from "./assets/images/blockchainLink.png";
import BackgroundVideo from './assets/images/backgroundvideo3.mp4';
import { Helmet } from 'react-helmet';
// import { element } from 'prop-types';
// import 'vanta/dist/vanta.globe.min.js';



// Disable ESLint for the following lines that use VANTA
/* eslint-disable */

// function Homepage() {
//   const { currentUser } = useContext(userContext);
//   console.log("Home", currentUser)

//   return (
//     <div >
//       <div className="container text-center jobly-welcome">
//         {/* <CoinTable /> */}
//         <img src={blockchainLink} alt="blockchainLink" id="blockchainLink" />

//         {currentUser ?
//           (
//             <h2 className='homepageP2'>Welcome back, {currentUser}!</h2>
//           )
//           :
//           (
//             <div className="home-button-container">
//               <Link className="home-button btn btn-primary font-weight-bold mr-3"
//                 to="/login">Log in
//               </Link>
//               <Link className="home-button btn btn-primary font-weight-bold"
//                 to="/signup">Sign Up</Link> 
//             </div>
//           )}
          
//       </div>
//     </div>
//   )
// }

// export default Homepage;

// const Homepage = () => {
//   return (
//     <div id='homepagecontainer' className="container">
//       <header className="header">
//         <h2 id='homepageheader'>Welcome to Off the Blockchain</h2>
//         <p>Explore the world of cryptocurrencies and blockchain technology</p>
//       </header>
//       <section className="videosection">
//               {/* <img src={blockchainLink} alt="blockchainLink" id="blockchainLink" /> */}
//               {/* <video id="background-video" loop autoPlay muted>
//                 <source src={BackgroundVideo} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video> */}
//                     <div className="video-container">
//         <video id="background-video" loop autoPlay muted>
//           <source src={BackgroundVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>


//         {/* Your featured coins component or section */}
//       </section>
//       <section className="section">
//         <h2>About Off the Blockchain</h2>
//         <p>
//           Off the Blockchain is a platform where you can learn about various cryptocurrencies,
//           blockchain technology, and stay updated with the latest trends in the crypto world.
//         </p>
//         <Link id='exploremore' to="/cointable" className="styled-link">
//           Explore More
//         </Link>
//       </section>
//       {/* <section className="section">
//         <h2>Get Started</h2>
//         <p>
//           Join us and create an account to manage your watchlist, get real-time market data,
//           and keep track of your favorite cryptocurrencies.
//         </p>
//         <Link to="/signup" className="styled-link">
//           Sign Up
//         </Link>
//       </section> */}
//       {/* <footer className="footer">
//         <p>© {new Date().getFullYear()} Off the Blockchain. All rights reserved.</p>
//       </footer> */}
//     </div>
//   );
// };

const Homepage = () => {
  // const vantaRef = useRef(null);

  // useEffect(() => {
  //   // Initialize Vanta.js background effect when the component mounts
  //   VANTA.GLOBE({
  //     el: vantaRef.current,
  //     mouseControls: true,
  //     touchControls: true,
  //     gyroControls: false,
  //     minHeight: 200.00,
  //     minWidth: 200.00,
  //     scale: 1.00,
  //     scaleMobile: 1.00,
  //     color: 0xff5f1f,
  //     backgroundColor: 0x070c32
  //   });

  //   // Clean up Vanta.js when the component unmounts
  //   return () => {
  //     if (vantaRef.current) {
  //       VANTA.destroy();
  //     }
  //   };
  // }, []);



  return (
    <div className="container">
      <header className="header">
        <h2 id="homepageheader">Welcome to Off the Blockchain</h2>
        <p id='homepageheadersentence'>Explore the world of cryptocurrencies and blockchain technology</p>
      </header>
      <section className="section">
        {/* <Helmet>
        <script src="three.r134.min.js"></script>

<script src="vanta.globe.min.js">
</script>
        </Helmet> */}
        {/* <img src={blockchainLink} alt="blockchainLink" id="blockchainLink" /> */}
        <div className="video-container">

          <video id="background-video" loop autoPlay muted>
            <source src={BackgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Your featured coins component or section */}
      </section>
      <section className="section">
        <h2>About Off the Blockchain</h2>
        <p id='aboutotbc'>
          Off the Blockchain is a platform where you can learn about various cryptocurrencies,
          blockchain technology, and stay updated with the latest trends in the crypto world.
        </p>
        <div className="explore-more-container">
    <Link id="exploremore" to="/cointable" className="styled-link">
      Explore More
    </Link>
  </div>
        {/* <Link id="exploremore" to="/cointable" className="styled-link">
          Explore More
        </Link> */}
      </section>
    </div>
  );
};


export default Homepage;
