import React, {useContext} from 'react';
import userContext from './userContext';
import {Link} from 'react-router-dom';
// import './HomeAnon.css';




function HomeAnon() {


  return (


              <div id='HomepageAnonButtons'>
              <Link id='loginbutton' className="home-button btn btn-primary font-weight-bold mr-3"
                to="/login">Log in
              </Link>
              <Link id='signupbutton' className="home-button btn btn-primary font-weight-bold"
                to="/signup">Sign Up</Link> 
           </div>
           
          )}


export default HomeAnon;