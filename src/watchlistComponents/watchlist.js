import React from 'react';
import {useContext} from 'react';
import CreateWatchlist from './CreateWatchlist';
import { UserCoinsContext } from '../userCoinContext';
import { UserCoinsProvider } from '../userCoinContext';
import OtbcApi from '../api';

const Watchlist = ({ watchlist, watchlist_id, coins, removeFromWatchlist, addToWatchlist }) => {
  const getCoinById = (coinId) => {
    return coins.find((coin) => coin.id === coinId);
  };
console.log(watchlist)
  const handleRemoveFromWatchlist = (coinId) => {
    removeFromWatchlist(coinId);
  };

  const handleAddToWatchlist = (coinId) => {
    addToWatchlist(coinId);
  };

// console.log(watchlist.name)
const handleDeleteWatchlist = async () => {
  try {
    await OtbcApi.deleteWatchlist(watchlist.watchlist_id);
    console.log(watchlist.watchlist_id)
  } catch (error) {
    console.error('Error deleting watchlist:', error);
  }
};




  return (
    
    <div>
      <h2>      {watchlist.name}
</h2>
      {watchlist.length === undefined ? (
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
          {/* <button onClick={() => handleDeleteWatchlist()}>Delete Watchlist</button> */}
      <button onClick={() => handleDeleteWatchlist(watchlist.watchlist_id)}>Delete Watchlist</button>
    </div>
   
  );
};

export default Watchlist;

// import React from 'react';
// import { useContext } from 'react';
// import CreateWatchlist from './CreateWatchlist';
// import { UserCoinsContext } from '../userCoinContext';
// import { UserCoinsProvider } from '../userCoinContext';
// import OtbcApi from '../api';

// const Watchlist = ({ watchlist, watchlist_id, coins, removeFromWatchlist, addToWatchlist }) => {
//   const getCoinById = (coinId) => {
//     return coins.find((coin) => coin.id === coinId);
//   };

//   const handleRemoveFromWatchlist = (coinId) => {
//     removeFromWatchlist(coinId);
//   };

//   const handleAddToWatchlist = (coinId) => {
//     addToWatchlist(coinId);
//   };

//   const handleDeleteWatchlist = async (watchlist_id) => {
//     try {
//       await OtbcApi.deleteWatchlist(watchlist_id);
//            console.log(watchlist_id)

    
//       // Update the state or perform any necessary actions after successful deletion
//     } catch (error) {
//       console.error('Error deleting watchlist:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>{watchlist.name}</h2>
//       {/* {watchlist.items && watchlist.items.length === 0 ? (
//         <p>No coins added to watchlist.</p>
//       ) : (
//         <ul>
//           {watchlist.items.map((coin) => {
//             return (
//               <li key={coin.coin_id}>
//                 {coin.name} ({coin.symbol.toUpperCase()})
//               </li>
//             );
//           })}
//         </ul>
//       )} */}
//       {watchlist.items && watchlist.items.length === 0 ? (
//   <p>No coins added to watchlist.</p>
// ) : watchlist.items && (
//   <ul>
//     {watchlist.items && watchlist.items.map((coin) => {
//       return (
//         <li key={coin.coin_id}>
//           {coin.name} ({coin.symbol.toUpperCase()})
//         </li>
//       );
//     })}
//   </ul>
// )}

//       <button onClick={() => handleDeleteWatchlist(watchlist.watchlist_id)}>Delete Watchlist</button>
//     </div>
//   );
// };

// export default Watchlist;
