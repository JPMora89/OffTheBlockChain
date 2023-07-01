import React, { useState, useEffect } from 'react';
import WatchlistContainer from '../watchlistComponents/WatchlistContainer';
import OtbcApi from '../api';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const WatchlistPage = () => {
    const [watchlists, setWatchlists] = useState([]);
  
    useEffect(() => {
      const fetchWatchlists = async () => {
        try {
          const watchlistsData = await OtbcApi.getAllWatchlists();
          setWatchlists(watchlistsData);
        } catch (error) {
          console.error('Error fetching watchlists:', error);
        }
      };
  
      fetchWatchlists();
    }, []);
  
    return (
      <div>
        <Helmet>
          {/* Add any necessary script or link tags */}
        </Helmet>
        <h1>Watchlist</h1>
        <Link to="/">Back to Coins</Link>
        <WatchlistContainer watchlists={watchlists} />
      </div>
    );
  };
  
  export default WatchlistPage;
  