// import React, { useState, useEffect } from 'react';
// import WatchlistContainer from '../watchlistComponents/WatchlistContainer';
// import OtbcApi from '../api';
// import { Helmet } from 'react-helmet';
// import { Link } from 'react-router-dom';
// import CreateWatchlist from './CreateWatchlist';
// import BlockchainLink from "../assets/images/blockchainLink.png";
// import blockchainLinkSmall from "../assets/images/blockchainLinkSmall.png";
// import "./WatchlistPage.css"


// const WatchlistPage = (items) => {
//     const [watchlists, setWatchlists] = useState([]);
//     const [userCoins, setUserCoins] = useState([]);
 
//         const handleDeleteWatchlist = async (watchlistId) => {
//       try {
//         await OtbcApi.deleteWatchlist(watchlistId);
//         console.log('Watchlist deleted:', watchlistId);
//         console.log(watchlistId);
    
//         // Fetch updated watchlists after deletion
//         const updatedWatchlistsData = await OtbcApi.getAllWatchlists();
//         console.log('Updated watchlists:', updatedWatchlistsData);
//         setWatchlists(updatedWatchlistsData);
//       } catch (error) {
//         console.error('Error deleting watchlist:', error);
//       }
//     };
  
//     useEffect(() => {
//       const fetchWatchlists = async () => {
//         try {
//           const watchlistsData = await OtbcApi.getAllWatchlists();
//           setWatchlists(watchlistsData);
//           console.log(watchlistsData)
//         } catch (error) {
//           console.error('Error fetching watchlists:', error);
//         }
//       };
  
//       fetchWatchlists();
//     }, []);
  
//     // const handleDeleteWatchlist = (watchlistId) => {
//     //   setWatchlists((watchlists) =>
//     //     watchlists.filter((watchlist) => watchlist.id !== watchlistId)
//     //   );
//     // };
    

    
   

//    const updateWatchlists = (updatedWatchlists) => {
//       setWatchlists(updatedWatchlists);
//     };

//     return (
//       <div>
//         <Helmet>
//         </Helmet>
//                          <img src={BlockchainLink} alt="blockchainLink" id="blockchainLink" />

//          <Link to="/">Back to Coins</Link>

//         <h1 id='watchlistpageheader'>Watchlists</h1>
//         <CreateWatchlist updateWatchlist={updateWatchlists}/>
//         <div id="watchlistcontainer">
       
//         <WatchlistContainer id="watchlistcontainer" watchlists={watchlists} userCoins={userCoins} items={items} handleDeleteWatchlist={handleDeleteWatchlist} />
//         </div>
//       </div>
//     );
//   };
  
//   export default WatchlistPage;
  

import React, { useState, useEffect } from 'react';
import WatchlistContainer from '../watchlistComponents/WatchlistContainer';
import OtbcApi from '../api';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import CreateWatchlist from './CreateWatchlist';
import BlockchainLink from "../assets/images/blockchainLink.png";
import blockchainLinkSmall from "../assets/images/blockchainLinkSmall.png";
import "./WatchlistPage.css"

const WatchlistPage = (items) => {
  const [watchlists, setWatchlists] = useState([]);
  const [userCoins, setUserCoins] = useState([]);
  const [watchlistKey, setWatchlistKey] = useState(0); // Unique key for WatchlistContainer
  const [deletedWatchlistId, setDeletedWatchlistId] = useState(null);

  useEffect(() => {
    const fetchWatchlists = async () => {
      try {
        const watchlistsData = await OtbcApi.getAllWatchlists();
        setWatchlists(watchlistsData);
        console.log('Fetched watchlists:', watchlistsData);
      } catch (error) {
        console.error('Error fetching watchlists:', error);
      }
    };

    fetchWatchlists();
  }, [deletedWatchlistId]);

  const handleDeleteWatchlist = async (watchlistId) => {
    try {
      await OtbcApi.deleteWatchlist(watchlistId);
      console.log('Watchlist deleted:', watchlistId);
      setDeletedWatchlistId(watchlistId)
      setWatchlistKey((prevKey) => prevKey + 1); // Update the key to re-render WatchlistContainer
    } catch (error) {
      console.error('Error deleting watchlist:', error);
    }
  };

  const updateWatchlists = async (updatedWatchlists) => {
    setWatchlists(updatedWatchlists);
  };

  console.log('Items prop:', items); // Add this line to check the items prop

  return (
    <div>
      <Helmet>
      </Helmet>
      <img src={BlockchainLink} alt="blockchainLink" id="blockchainLink" />
      <Link id='backtocoinsbutton' to="/">Back to Coins</Link>

      <h1 id='watchlistpageheader'>Watchlists</h1>
      <CreateWatchlist updateWatchlist={updateWatchlists} />
      <div id="watchlistcontainer">
        {/* Add key prop to trigger re-render when watchlists state updates */}
        <WatchlistContainer key={watchlistKey} watchlists={watchlists} userCoins={userCoins} items={items} handleDeleteWatchlist={handleDeleteWatchlist} />
      </div>
    </div>
  );
};

export default WatchlistPage;
