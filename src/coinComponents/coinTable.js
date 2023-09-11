import React, { useState, useEffect } from "react";
import axios, { all } from "axios";
import CoinDetail from "./CoinsDetail";
import { Helmet } from "react-helmet";
import OtbcApi from "../api";
import { Link } from "react-router-dom";
import cryptocoins from "../assets/images/cryptocoins.png";
import bitcointransformed from "../assets/images/bitcointransformed.png";
import cryptocurrencytransformed from "../assets/images/cryptocurrencytransformed.png";
import "./coinTable.css";

const CoinTable = () => {
  const [coins, setCoins] = useState([]);
  const [userCoins, setUserCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCoinId, setSelectedCoinId] = useState(null);
  const [selectedCoinName, setSelectedCoinName] = useState("");
  const [watchlists, setWatchlists] = useState([]);
  const [selectedWatchlist, setSelectedWatchlist] = useState("");
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [watchlistItems, setWatchlistItems] = useState([]);

  useEffect(() => {
    const fetchAllWatchlists = async () => {
      try {
        const watchlists = await OtbcApi.getAllWatchlists();
        setWatchlists(watchlists);
      } catch (error) {
        console.error("Error fetching watchlists:", error);
      }
    };

    fetchAllWatchlists();
  }, []);

  // const addCoinstoDB = async () => {
  //   try {
  //     const response = await OtbcApi.addAllCoinstoDB();
  //   } catch (error) {
  //     console.error("Error adding coins to DB:", error);
  //   }
  // };

  // useEffect(() => {
  //   addCoinstoDB();
  // }, []);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        setTrendingCoins(response.data.coins);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  const allCoins = async () => {
    try {
      const response = await OtbcApi.getAllCoins();

      setIsLoading(false);
      setUserCoins(response);
    } catch (error) {
      console.error("Error fetching coins:", error);
    }
  };

  useEffect(() => {
    allCoins();
  }, []);

  const addToWatchlist = async (coinId) => {
    if (selectedWatchlist) {
      try {
        await OtbcApi.addToWatchlist(coinId, selectedWatchlist);
        const updatedWatchlists = watchlists.map((watchlist) =>
          watchlist.id === selectedWatchlist
            ? { ...watchlist, coins: [...watchlist.coins, coinId] }
            : watchlist
        );
        console.log("These are the coins",coinId)
        console.log(updatedWatchlists)
        alert("Coin added to watchlist");
        setWatchlists(updatedWatchlists);
      } catch (error) {
        console.error("Error adding coin to watchlist:", error);
      }
    }
  };

  console.log("Watchlists received:", watchlists);

  // let watchlistids = watchlists.map((watchlist) => {
  //   return watchlist.watchlist_id;
  // });

  // useEffect(() => {
  //   const fetchWatchlistItems = async () => {
  //     try {
  //       const items = [];
  //       for (const watchlistId of watchlistids) {
  //         const watchlistItems = await OtbcApi.getWatchlistItems(watchlistId);
  //         items.push(...watchlistItems);
  //         console.log("Watchlist items:", watchlistItems);
  //         console.log(watchlistId);
  //       }
  //       setWatchlistItems(items);
  //       console.log(watchlistItems)
  //       console.log(items)
  //     } catch (error) {
  //       console.error("Error fetching watchlist items:", error);
  //     }
  //   };

  //   fetchWatchlistItems();
  // }, []);

  // useEffect(() => {
  //   console.log(selectedCoinId);
  // }, [selectedCoinId]);

  const handleWatchlistChange = (event) => {
    const selectedName = event.target.value;
    const selectedWatchlist = watchlists.find(
      (watchlist) => watchlist.name === selectedName
    );
    const watchlistId = selectedWatchlist ? selectedWatchlist.watchlist_id : "";

    setSelectedWatchlist(watchlistId);
  };

  const removeFromWatchlist = (coinId) => {
    const updatedWatchlists = watchlists.map((watchlist) => {
      const updatedCoins = watchlist.coins.filter((id) => id !== coinId);
      return { ...watchlist, coins: updatedCoins };
    });

    setWatchlists(updatedWatchlists);
  };

  return (
    <div>
      <div>
        <Helmet>
          <script
            id="widget"
            src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js"
            type="text/javascript"
          />
          <script
            defer
            src="https://www.livecoinwatch.com/static/lcw-widget.js"
          ></script>
          {/* <script defer src="https://www.livecoinwatch.com/static/lcw-widget.js"></script>  */}
        </Helmet>
        <coingecko-coin-price-marquee-widget
          id="coinmarquee"
          coin-ids="bitcoin,ethereum,ripple,matic-network,solana,dogecoin,tether,usd-coin,cosmos"
          currency="usd"
          background-color="#070c32"
          locale="en"
          font-color="#ffffff"
        ></coingecko-coin-price-marquee-widget>
      </div>
      <span className="livecoinwatch-widgets">
        <div
          class="livecoinwatch-widget-1"
          lcw-coin="BTC"
          lcw-base="USD"
          lcw-secondary="ETH"
          lcw-period="d"
          lcw-color-tx="#ffffff"
          lcw-color-pr="#eb144c"
          lcw-color-bg="#1f2434"
          lcw-border-w="1"
        ></div>
        <div
          class="livecoinwatch-widget-1"
          lcw-coin="ETH"
          lcw-base="USD"
          lcw-secondary="ETH"
          lcw-period="d"
          lcw-color-tx="#ffffff"
          lcw-color-pr="#eb144c"
          lcw-color-bg="#1f2434"
          lcw-border-w="1"
        ></div>
      </span>
      <p id="cointableintro">
        Welcome to the Coin Table! Here, you can explore detailed information
        about various cryptocurrencies. Click on a coin's name to view its
        details and add it to your watchlist to stay updated on its performance.
        Enjoy your journey into the exciting world of cryptocurrencies!
      </p>

      <h1 id="topCoinHeader">Top Coins</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
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

          <div className="table-container">
            <div className="image-left">
              <img src={cryptocoins} alt="Cryptocoins" id="cryptocoins" />
            </div>

            <div className="table-wrapper">
              <table id="topCoinTable">
                <thead id="topcointablehead">
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Market Cap</th>
                    <th>Price</th>
                    <th>Price Change (24h)</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userCoins.map((coin) => (
                    <tr key={coin.id}>
                      <td id="tableimage">
                        <img
                          src={coin.image}
                          alt={coin.name}
                          style={{ width: "30px", height: "30px" }}
                        />
                      </td>

                      <Link
                        to={`/coin/${coin.coin_id}`}
                        onClick={() => setSelectedCoinName(coin.coin_id)}
                        className="coin-link"
                      >
                        {coin.name}
                      </Link>
                      <td id="topcointablehead">{coin.symbol.toUpperCase()}</td>
                      <td id="topcointablehead">
                        ${coin.market_cap.toLocaleString()}
                      </td>
                      <td id="topcointablehead">
                        ${coin.price.toLocaleString()}
                      </td>
                      <td id="topcointablehead">
                        {coin.price_change_percentage_24h.toFixed(3)}%
                      </td>
                      <td>
                        {selectedWatchlist &&
                        watchlists.some(
                          (watchlist) =>
                            watchlist.id === selectedWatchlist &&
                            watchlist.coins.includes(coin.id)
                        ) ? (
                          <button onClick={() => removeFromWatchlist(coin.id)}>
                            Remove
                          </button>
                        ) : (
                          <button
                            className="btn-2"
                            onClick={() =>
                              addToWatchlist(coin.id, selectedWatchlist)
                            }
                          >
                            <span>Add</span>
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="image-right">
              <img
                src={cryptocurrencytransformed}
                alt="cryptotransformed"
                id="cryptotransformed"
              />
            </div>
          </div>
          {selectedCoinName && (
            <CoinDetail
              coinId={selectedCoinName.toLowerCase()}
              watchlists={watchlists}
              addToWatchlist={addToWatchlist}
            />
          )}

          {coins.length > 0 && <></>}
          {/* <img src="https://alternative.me/crypto/fear-and-greed-index.png" alt="Latest Crypto Fear & Greed Index" /> */}
        </>
      )}

      <div className="trending-container">
        <img
          src={bitcointransformed}
          alt="bitcointransformed"
          id="bitcointransformed"
        />
        <h2 id="trendingcoinsheader">Trending Coins</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <table id="trendingcointable">
            <thead id="topcointablehead">
              <tr>
                <th></th>
                <th id="topcointablehead">Rank</th>
                <th id="trendingcoinname">Name</th>
                <th id="topcointablehead">Symbol</th>
                <th id="trendingcoinprice">Price(in btc)</th>
                {/* <th>Price Change (24h)</th> */}
              </tr>
            </thead>
            <tbody>
              {trendingCoins.map((coin, index) => (
                <tr key={coin.item.id}>
                  <td id="trendingtableimage">
                    <img
                      src={coin.item.thumb}
                      alt={coin.item.name}
                      style={{ width: "30px", height: "30px" }}
                    />
                  </td>

                  <td id="topcointablehead">{index + 1}</td>
                  <td>
                    <Link id="trendingcoinname" to={`/coin/${coin.item.id}`}>
                      {coin.item.name}
                    </Link>
                  </td>
                  <td id="topcointablehead">
                    {coin.item.symbol.toUpperCase()}
                  </td>
                  <td>${coin.item.price_btc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CoinTable;
