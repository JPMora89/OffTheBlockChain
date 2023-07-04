import React, { useState, useEffect } from 'react';
import WatchlistContainer from '../watchlistComponents/WatchlistContainer';
import OtbcApi from '../api';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import CreateWatchlist from './CreateWatchlist';

const WatchlistPage = () => {
    const [watchlists, setWatchlists] = useState([]);
 
    
  
    useEffect(() => {
      const fetchWatchlists = async () => {
        try {
          const watchlistsData = await OtbcApi.getAllWatchlists();
          setWatchlists(watchlistsData);
          console.log(watchlistsData)
          console.log(watchlists)
        } catch (error) {
          console.error('Error fetching watchlists:', error);
        }
      };
  
      fetchWatchlists();
    }, []);
  
    useEffect(() => {
      console.log('Watchlists:', watchlists);
    }, [watchlists]);

   const updateWatchlists = (updatedWatchlists) => {
      setWatchlists(updatedWatchlists);
    };

    return (
      <div>
        <Helmet>
          {/* Add any necessary script or link tags */}
        </Helmet>
        <h1>Watchlists</h1>
        <CreateWatchlist updateWatchlist={updateWatchlists}/>
        <Link to="/">Back to Coins</Link>
        <WatchlistContainer watchlists={watchlists}  />
      </div>
    );
  };
  
  export default WatchlistPage;
  