// import React, { useEffect, useState } from "react";
// import Watchlist from "./watchlist";
// import { Route, Switch, Link } from "react-router-dom";
// import OtbcApi from "../api";
// import "./watchlist.css";
// import CoinDetailsPage from "../coinComponents/CoinDetailsPage";

// const WatchlistContainer = ({
//   watchlists,
//   userCoins,
//   removeFromWatchlist,
//   handleDeleteWatchlist,
// }) => {
//   const [watchlistItems, setWatchlistItems] = useState([]);
//   console.log("Watchlists received:", watchlists);

//   let watchlistids = watchlists.map((watchlist) => {
//     return watchlist.watchlist_id;
//   });

//   useEffect(() => {
//     const fetchWatchlistItems = async () => {
//       try {
//         const items = [];
//         for (const watchlistId of watchlistids) {
//           const watchlistItems = await OtbcApi.getWatchlistItems(watchlistId);
//           items.push(...watchlistItems);
//           console.log("Watchlist items:", watchlistItems);
//         }
//         setWatchlistItems(items);
//         console.log("Watchlist items:", items);
//       } catch (error) {
//         console.error("Error fetching watchlist items:", error);
//       }
//     };

//     fetchWatchlistItems();
//   }, []);
//   console.log("Watchlist items:", watchlistItems);
//   console.log("Watchlists:", watchlists);

//   const handleDeleteWatchlistAndUpdate = async (watchlistId) => {
//     try {
//       await OtbcApi.deleteWatchlist(watchlistId);
//       console.log("Watchlist deleted:", watchlistId);
//       const updatedWatchlists = watchlists.filter(
//         (watchlist) => watchlist.watchlist_id !== watchlistId
//       );
//       handleDeleteWatchlist(updatedWatchlists);
//     } catch (error) {
//       console.error("Error deleting watchlist:", error);
//     }
//   };

//   return (
//     <div className="watchlist-container">
//       {watchlists.length === 0 ? (
//         <p>No watchlists created.</p>
//       ) : (
//         watchlists.map((watchlist) =>
//           watchlist ? (
//             <Watchlist
//               key={watchlist.id}
//               watchlist={watchlist}
//               watchlistId={watchlist.id}
//               userCoins={userCoins}
//               removeFromWatchlist={removeFromWatchlist}
//               handleDeleteWatchlist={handleDeleteWatchlistAndUpdate}
//               items={watchlistItems.filter(
//                 (item) => item.watchlist_id === watchlist.id
//               )}
//             />
//           ) : null
//         )
//       )}
//     </div>
//   );
// };

// export default WatchlistContainer;


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
}) => {
  const [watchlistItems, setWatchlistItems] = useState([]);
  console.log("Watchlists received:", watchlists);

  let watchlistids = watchlists.map((watchlist) => {
    return watchlist.watchlist_id;
  });

  useEffect(() => {
    const fetchWatchlistItems = async () => {
      try {
        const items = [];
        for (const watchlistId of watchlistids) {
          const watchlistItems = await OtbcApi.getWatchlistItems(watchlistId);
          items.push(...watchlistItems);
          console.log("Watchlist items:", watchlistItems);
        }
        setWatchlistItems(items);
        console.log("Watchlist items:", items);
      } catch (error) {
        console.error("Error fetching watchlist items:", error);
      }
    };

    fetchWatchlistItems();
  }, []);
  console.log("Watchlist items:", watchlistItems);
  console.log("Watchlists:", watchlists);

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