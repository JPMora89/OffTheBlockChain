import React, { createContext, useState, useEffect } from 'react';
import OtbcApi from '../api';

export const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlists, setWatchlists] = useState([]);

  useEffect(() => {
    const fetchAllWatchlists = async () => {
      try {
        const watchlists = await OtbcApi.getAllWatchlists();
        setWatchlists(watchlists);
        console.log(watchlists)
      } catch (error) {
        console.error('Error fetching watchlist:', error);
      }
    };

    fetchAllWatchlists();
  }, []);


  
  useEffect(() => {
  }, [watchlists]);

  const addToWatchlist = async (coinId, selectedWatchlist) => {
    try {
      await OtbcApi.addToWatchlist(coinId, selectedWatchlist);
      const updatedWatchlists = watchlists.map((watchlist) =>
        watchlist.id === selectedWatchlist
          ? { ...watchlist, coins: [...watchlist.coins, coinId] }
          : watchlist
      );
      setWatchlists(updatedWatchlists);
    } catch (error) {
      console.error('Error adding coin to watchlist:', error);
    }
};

  return (
    <WatchlistContext.Provider value={{ watchlists, addToWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};
