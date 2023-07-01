import React from 'react';
import {useContext} from 'react';
import CreateWatchlist from './CreateWatchlist';
import { UserCoinsContext } from '../userCoinContext';
import { UserCoinsProvider } from '../userCoinContext';

const Watchlist = ({ watchlist, coins, removeFromWatchlist, addToWatchlist }) => {
  const getCoinById = (coinId) => {
    return coins.find((coin) => coin.id === coinId);
  };

  // const watchlist = [];

  const handleRemoveFromWatchlist = (coinId) => {
    removeFromWatchlist(coinId);
  };

  const handleAddToWatchlist = (coinId) => {
    addToWatchlist(coinId);
  };

// console.log(coinId)
// console.log(watchlist.name)


  return (
    
    <div>
      <h2>      {watchlist.name}
</h2>
      {watchlist.length === 0 ? (
        <p>No coins added to watchlist.</p>
      ) : (
        <ul>
          {Array.from(watchlist).map((coinId) => {
            const coin = getCoinById(coinId);
            return (
              <li key={coin.id}>
                {coin.name} ({coin.symbol.toUpperCase()})
              </li>
            );
          })}
        </ul>
      )}
    </div>
   
  );
};

export default Watchlist;
