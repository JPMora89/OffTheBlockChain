import React, {useContext} from 'react';
import './Homepage.css';
import userContext from './userComponents/userContext';
import {Link} from 'react-router-dom';
import CoinTable from './coinComponents/coinTable';




function Homepage() {
  const { currentUser } = useContext(userContext);
  console.log("Home", currentUser)

  return (
    <div >
      <div className="container text-center jobly-welcome">
        <CoinTable />

        {currentUser ?
          (
            <h2 className='homepageP2'>Welcome back, {currentUser}!</h2>
          )
          :
          (
            <div className="home-button-container">
              <Link className="home-button btn btn-primary font-weight-bold mr-3"
                to="/login">Log in
              </Link>
              <Link className="home-button btn btn-primary font-weight-bold"
                to="/signup">Sign Up</Link> 
            </div>
          )}
          
      </div>
    </div>
  )
}

export default Homepage;