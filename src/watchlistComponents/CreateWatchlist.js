import React, { useState } from 'react';
import OtbcApi from '../api';
import WatchlistPage from './WatchlistPage';
import "./watchlist.css"

const CreateWatchlist = ({updateWatchlist}) => {
  const [watchlistName, setWatchlistName] = useState('');

  const handleInputChange = (event) => {
    setWatchlistName(event.target.value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await OtbcApi.createWatchlist(watchlistName);
      console.log(`Watchlist "${watchlistName}" created`);
      const updatedWatchlists = await OtbcApi.getAllWatchlists();
      updateWatchlist(updatedWatchlists);
      setWatchlistName('');
      console.log(watchlistName)
    } catch (error) {
      console.error('Error creating watchlist:', error);
    }
  };

  return (
    <div className='createwatchlistcontainer'>
      <h2 id='createwatchlistheader'>Create New Watchlist</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Watchlist Name:
          <input
            type="text"
            value={watchlistName}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Create Watchlist</button>
      </form>
    </div>
  );
};

export default CreateWatchlist;


