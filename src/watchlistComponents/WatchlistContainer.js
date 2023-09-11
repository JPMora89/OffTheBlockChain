import React, { useEffect, useState } from "react";
import Watchlist from "./watchlist";
import { Route, Switch, Link } from "react-router-dom";
import OtbcApi from "../api";
import "./watchlist.css";
import CoinDetailsPage from "../coinComponents/CoinDetailsPage";

const WatchlistContainer = ({
  watchlists,
  userCoins,
  removeFromWatchlist,
  handleDeleteWatchlist,
  items
}) => {
  const [watchlistItems, setWatchlistItems] = useState([]);
  console.log("Watchlists received:", watchlists);

  let watchlistids = watchlists.map((watchlist) => {
    return watchlist.watchlist_id;
  });

  // useEffect(() => {
  //   const fetchWatchlistItems = async () => {
  //     console.log("This function is being called")
  //     try {
  //       const items = [];
  //       for (const watchlistId of watchlistids) {
  //         const watchlistItems = await OtbcApi.getWatchlistItems(watchlistId);
  //         items.push(...watchlistItems);
  //         console.log("Watchlist items:", watchlistItems, items);
  //       }
  //       setWatchlistItems(items);
  //       console.log("Watchlist items:", items);
  //     } catch (error) {
  //       console.error("Error fetching watchlist items:", error);
  //     }
  //   };

  //   fetchWatchlistItems();
  // }, [items]);
console.log("items", items)

  return (
    <div className="watchlist-container">
      {watchlists.length === 0 ? (
        <p>No watchlists created.</p>
      ) : (
        watchlists.map((watchlist) =>
          watchlist ? (
            <Watchlist
              key={watchlist.id}
              watchlist={watchlist}
              watchlistId={watchlist.id}
              userCoins={userCoins}
              removeFromWatchlist={removeFromWatchlist}
              handleDeleteWatchlist={handleDeleteWatchlist}
              items={watchlistItems.filter(
                (item) => item.watchlist_id === watchlist.id
              )}
            />
          ) : null
        )
      )}
    </div>
  );
};

export default WatchlistContainer;