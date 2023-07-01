import React from 'react';
import Watchlist from './watchlist';







const WatchlistContainer = ({ watchlists, coins, removeFromWatchlist }) => {
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
              coins={coins}
              removeFromWatchlist={removeFromWatchlist}
            />
          ) : null
        ))
      )}
    </div>
  );
};


export default WatchlistContainer;



