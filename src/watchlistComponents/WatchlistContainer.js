import React from 'react';
import Watchlist from './watchlist';
import { Route, Switch, Link } from "react-router-dom";
import OtbcApi from '../api';





const WatchlistContainer = ({ watchlists, coins, removeFromWatchlist, handleDeleteWatchlist }) => {



  return (
    <div>
      <h2>My Watchlists</h2>
      {watchlists.length === 0 ? (
        <p>No watchlists created.</p>
      ) : (
        watchlists.map((watchlist) => (
          watchlist ? (
            <Watchlist
              key={watchlist.id}
              watchlist={watchlist}
              watchlistId={watchlist.id}
              coins={coins}
              removeFromWatchlist={removeFromWatchlist}
              handleDeleteWatchlist={handleDeleteWatchlist}
            />
          ) : null
        ))
      )}
    </div>
  );
};






export default WatchlistContainer;
