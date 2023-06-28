import React, { useState } from 'react';

const CreateWatchlist = ({ onCreateWatchlist }) => {
  const [watchlistName, setWatchlistName] = useState('');

  const handleInputChange = (event) => {
    setWatchlistName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreateWatchlist(watchlistName);
    setWatchlistName('');
  };

  return (
    <div>
      <h2>Create New Watchlist</h2>
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
