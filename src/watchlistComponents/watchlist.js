import React, { useState, useEffect, useCallback } from "react";
import OtbcApi from "../api";

const Watchlist = ({ watchlist }) => {
  const [items, setItems] = useState([]);

  const handleDeleteWatchlist = async () => {
    try {
      await OtbcApi.deleteWatchlist(watchlist.watchlist_id);
      console.log("Woop Woop Watchlist deleted:", watchlist.watchlist_id);
    } catch (error) {
      console.error("Error deleting watchlist:", error);
    }
  };

  const fetchWatchlistItems = async () => {
    try {
      const watchlistItems = await OtbcApi.getWatchlistItems(
        watchlist.watchlist_id
      );
      setItems(watchlistItems);
    } catch (error) {
      console.error("Error fetching watchlist items:", error);
    }
  };

  useEffect(() => {
    fetchWatchlistItems();
  }, []);

  const watchlistItem = items.map((item) => item.name);


  const removeFromWatchlist = useCallback(
    async (coinId) => {
      try {
        console.log(coinId);
        await OtbcApi.removeFromWatchlist(coinId, watchlist.watchlist_id);
        fetchWatchlistItems();
      } catch (error) {
        console.error("Error removing coin from watchlist:", error);
      }
    },
    [watchlist.watchlist_id]
  );

  return (
    <div id="watchlistbox">
      <h2 id="watchlistname">{watchlist.name}</h2>
      {items && items.length === 0 ? (
        <p>No coins added to watchlist.</p>
      ) : (
        <ul>
          {items.map((item) => {
            return (
              <li id="watchlistcoinname" key={item.coin_id}>
                {item.name} ({item.symbol.toUpperCase()})
                <button
                  id="removefromwatchlistbutton"
                  onClick={() => removeFromWatchlist(item.name)}
                >
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      )}
      <button
        id="deletewatchlistbutton"
        onClick={() => handleDeleteWatchlist(watchlist.watchlist_id)}
      >
        Delete Watchlist
      </button>
    </div>
  );
};

export default Watchlist;
