import React from 'react';
import {useContext} from 'react';
import CreateWatchlist from './CreateWatchlist';
import { UserCoinsContext } from '../userCoinContext';
import { UserCoinsProvider } from '../userCoinContext';
import OtbcApi from '../api';

const Watchlist = ({ watchlist, watchlist_id, coins, removeFromWatchlist, addToWatchlist, items }) => {
  const getCoinById = (coinId) => {
    return coins.find((coin) => coin.id === coinId);
  };

  const handleRemoveFromWatchlist = (coinId) => {
    removeFromWatchlist(coinId);
  };

  const handleAddToWatchlist = (coinId) => {
    addToWatchlist(coinId);
  };

const handleDeleteWatchlist = async () => {
  try {
    await OtbcApi.deleteWatchlist(watchlist.watchlist_id);
    console.log(watchlist.watchlist_id)
    console.log('Woop Woop Watchlist deleted:', watchlist.watchlist_id);
  } catch (error) {
    console.error('Error deleting watchlist:', error);
  }
};





return (
  <div>
    <h2>{watchlist.name}</h2>
    {items && items.length === 0 ? (
      <p>No coins added to watchlist.</p>
    ) : (
      <ul>
        {items.map((item) => {
          const coin = getCoinById(item.coin_id);
          return (
            <li key={coin.coin_id}>
              {coin.name} ({coin.symbol.toUpperCase()})
              <button onClick={() => handleRemoveFromWatchlist(coin.coin_id)}>Remove</button>
            </li>
          );
        })}
      </ul>
    )}
    <button onClick={() => handleDeleteWatchlist(watchlist_id)}>Delete Watchlist</button>
  </div>
);
};

export default Watchlist;

