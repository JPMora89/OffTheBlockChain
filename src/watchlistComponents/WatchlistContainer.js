import React from 'react';
import Watchlist from './watchlist';
import { Route, Switch, Link } from "react-router-dom";
import OtbcApi from '../api';
import "./watchlist.css" 





const WatchlistContainer = ({ watchlists, userCoins, removeFromWatchlist, handleDeleteWatchlist }) => {



  return (
    <div className='watchlist-container'>
      {/* <h2>My Watchlists</h2> */}
      {watchlists.length === 0 ? (
        <p>No watchlists created.</p>
      ) : (
        watchlists.map((watchlist) => (
          watchlist ? (
            <Watchlist
              key={watchlist.id}
              watchlist={watchlist}
              watchlistId={watchlist.id}
              userCoins={userCoins}
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

// import React, { useState, useEffect } from 'react';
// import Watchlist from './watchlist';
// import { Route, Switch, Link } from "react-router-dom";
// import OtbcApi from '../api';
// import "./watchlist.css" 

// const WatchlistContainer = ({ watchlists, userCoins, removeFromWatchlist, handleDeleteWatchlist }) => {

//   const [watchlistItems, setWatchlistItems] = useState([]);

//   useEffect(() => {
//     const fetchWatchlistItems = async () => {
//       try {
//         const watchlistItemsData = await Promise.all(
//           watchlists.map(async (watchlist) => {
//             const items = await OtbcApi.getWatchlistItems(watchlist.watchlist_id);
//             return {
//               watchlistId: watchlist.watchlist_id,
//               watchlistName: watchlist.name,
//               items,
//             };
//           })
//         );
//         setWatchlistItems(watchlistItemsData);
//       } catch (error) {
//         console.error('Error fetching watchlist items:', error);
//       }
//     };

//     fetchWatchlistItems();
//   }, [watchlists]);

//   return (
//     <div className='watchlist-container'>
//       {watchlistItems.length === 0 ? (
//         <p>No watchlists created.</p>
//       ) : (
//         watchlistItems.map((watchlistItem) => (
//           <div key={watchlistItem.watchlistId}>
//             <h2>{watchlistItem.watchlistName}</h2>
//             <Watchlist
//               watchlist={watchlistItem.items}
//               watchlistId={watchlistItem.watchlistId}
//               userCoins={userCoins}
//               removeFromWatchlist={removeFromWatchlist}
//               handleDeleteWatchlist={handleDeleteWatchlist}
//             />
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default WatchlistContainer;