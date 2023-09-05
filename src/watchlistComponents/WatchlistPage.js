import React, { useState, useEffect } from "react";
import WatchlistContainer from "../watchlistComponents/WatchlistContainer";
import OtbcApi from "../api";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import CreateWatchlist from "./CreateWatchlist";
import BlockchainLink from "../assets/images/blockchainLink.png";
import blockchainLinkSmall from "../assets/images/blockchainLinkSmall.png";
import "./WatchlistPage.css";

const WatchlistPage = (items) => {
  const [watchlists, setWatchlists] = useState([]);
  const [userCoins, setUserCoins] = useState([]);
  const [watchlistKey, setWatchlistKey] = useState(0);

  useEffect(() => {
    const fetchWatchlists = async () => {
      try {
        const watchlistsData = await OtbcApi.getAllWatchlists();
        setWatchlists(watchlistsData);
        console.log("Fetched watchlists:", watchlistsData);
      } catch (error) {
        console.error("Error fetching watchlists:", error);
      }
    };

    fetchWatchlists();
  }, []);

  const handleDeleteWatchlist = async (watchlistId) => {
    try {
      await OtbcApi.deleteWatchlist(watchlistId);
      console.log("Watchlist deleted:", watchlistId);
      const updatedWatchlists = watchlists.filter(
        (watchlist) => watchlist.watchlist_id !== watchlistId
      );
      setWatchlists(updatedWatchlists);
    } catch (error) {
      console.error("Error deleting watchlist:", error);
    }
  };

  const updateWatchlists = async (updatedWatchlists) => {
    setWatchlists(updatedWatchlists);
  };

  console.log("Items prop:", items);

  return (
    <div>
      <Helmet></Helmet>
      <img src={BlockchainLink} alt="blockchainLink" id="blockchainLink" />
      <h1 id="watchlistpageheader">Watchlists</h1>
      <CreateWatchlist updateWatchlist={updateWatchlists} />{" "}
      <Link id="backtocoinsbutton" to="/">
        Back
      </Link>
      <div id="watchlistcontainer">
        <WatchlistContainer
          key={watchlistKey}
          watchlists={watchlists}
          userCoins={userCoins}
          items={items}
          handleDeleteWatchlist={handleDeleteWatchlist}
        />
      </div>
    </div>
  );
};

export default WatchlistPage;