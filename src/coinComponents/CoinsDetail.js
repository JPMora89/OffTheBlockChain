import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CoinNews from "./coinNews";
import OtbcApi from "../api";
import "./coinDetail.css";

const CoinDetail = ({ coinId }) => {
  const [coinData, setCoinData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedWatchlistId, setSelectedWatchlistId] = useState(null);
  const [selectedWatchlist, setSelectedWatchlist] = useState("");
  const [watchlists, setWatchlists] = useState([]);
  const [coinDetailId, setCoinDetailId] = useState(null);

  useEffect(() => {
    const fetchAllWatchlists = async () => {
      try {
        const watchlists = await OtbcApi.getAllWatchlists();
        setWatchlists(watchlists);
        console.log(watchlists);
      } catch (error) {
        console.error("Error fetching watchlists:", error);
      }
    };

    fetchAllWatchlists();
  }, []);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinId}`
        );
        setCoinData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching coin data:", error);
        setIsLoading(false);
      }
    };

    fetchCoinData();
  }, [coinId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!coinData) {
    return <p>No data available for this coin.</p>;
  }

  const { name, symbol, description, image, market_data, links } = coinData;
  const { current_price, market_cap, total_volume } = market_data;
  const { homepage, official_forum_url, twitter_screen_name } = links;

  const handleWatchlistChange = (event) => {
    const selectedName = event.target.value;
    const selectedWatchlist = watchlists.find(
      (watchlist) => watchlist.name === selectedName
    );
    const watchlistId = selectedWatchlist ? selectedWatchlist.watchlist_id : "";
    console.log(watchlistId);
    console.log(selectedWatchlist);

    setSelectedWatchlist(watchlistId);
  };

  const coin_id = async (coinId) => {
    try {
      const coinDetailId = await OtbcApi.getCoinByName(coinId);
      return coinDetailId;
    } catch (error) {
      console.error("Error fetching coin data:", error);
    }
  };

  const coinDetailCoinId = coin_id(coinId);

  const getCoinData = async (coinId) => {
    try {
      const coinDetailCoinId = await coin_id(coinId);
      console.log(coinDetailCoinId.id);
      setCoinDetailId(coinDetailCoinId.id);
    } catch (error) {
      console.error("Error fetching coin data:", error);
    }
  };

  getCoinData(coinId);

  const addToWatchlist = async (coinId) => {
    if (selectedWatchlist) {
      try {
        await OtbcApi.addToWatchlist(coinDetailId, selectedWatchlist);
        const updatedWatchlists = watchlists.map((watchlist) =>
          watchlist.id === selectedWatchlist
            ? { ...watchlist, coins: [...watchlist.coins, coinId] }
            : watchlist
        );
        alert("Coin added to watchlist");
        console.log(watchlists + "watchlists");
        setWatchlists(updatedWatchlists);
      } catch (error) {
        console.error("Error adding coin to watchlist:", error);
      }
    }
  };

  return (
    <>
   
      <div>
        <h1 id="coinDetailHeader">
          {name} ({symbol.toUpperCase()})
        </h1>
        <img src={image.large} alt={name} id="coinLogo" />
        <p id="coindDetailDescription">
          {description?.en || "Description not available."}
        </p>
        <div id="coinMarketData">
          <h2 id="coinMarketDataHeader">Market Data</h2>
          <p>Current Price: ${current_price.usd.toLocaleString()}</p>
          <p>Market Cap: ${market_cap.usd.toLocaleString()}</p>
          <p>Total Volume: ${total_volume.usd.toLocaleString()}</p>
          <p>
            Homepage: <a href={homepage}>{homepage}</a>
          </p>
          <p>
            Official Forum:{" "}
            <a href={official_forum_url}>{official_forum_url}</a>
          </p>
          <p>
            Twitter:{" "}
            <a
              href={`https://twitter.com/${twitter_screen_name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {twitter_screen_name}
            </a>
          </p>
          <CoinNews coinId={coinId} className="coinNews" />
        </div>
     {watchlists.length > 0 && (
          <div id="addtowatchlistDiv">
            <h3 id="addtowatchlistheader">Add to Watchlist:</h3>

            <select
              id="watchlistSelect"
              value={selectedWatchlist.name}
              onChange={handleWatchlistChange}
            >
              <option value="">Select Watchlist</option>
              {watchlists.map((watchlist) => (
                <option key={watchlist.id} value={watchlist.id}>
                  {watchlist.name}
                </option>
              ))}
            </select>

            <button
              id="addtowatchlistbutton"
              onClick={() => addToWatchlist(coinId, selectedWatchlist)}
            >
              Add to Watchlist
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CoinDetail;



