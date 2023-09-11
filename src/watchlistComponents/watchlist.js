import React, { useState, useEffect, useCallback } from "react";
import OtbcApi from "../api";
import { Link } from "react-router-dom";
import "./watchlist.css"

const Watchlist = ({ watchlist, handleDeleteWatchlist }) => {
  const [items, setItems] = useState([]);



  const fetchWatchlistItems = async () => {
    try {
      const watchlistItems = await OtbcApi.getWatchlistItems(
        watchlist.watchlist_id
      );
      setItems(watchlistItems);
      console.log("logging items here:", watchlistItems)
      console.log(items)
    } catch (error) {
      console.error("Error fetching watchlist items:", error);
    }
  };

  useEffect(() => {
    fetchWatchlistItems();
  }, [watchlist.watchlist_id]);


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
              <li id="watchlistcoinname" key={item.coin_id}>   <Link id="coinLinkWatchlist"
                        to={`/coin/${item.coin_id}`}
                        
                        // className="coin-link"
                      >
                        {item.name}
                      </Link>
                 ({item.symbol.toUpperCase()})       ${item.price}
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
