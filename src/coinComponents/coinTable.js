


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoinDetail from './CoinsDetail';
import Watchlist from '../watchlistComponents/watchlist';
import { Helmet } from 'react-helmet';
import OtbcApi from '../api';
import CreateWatchlist from '../watchlistComponents/CreateWatchlist';
import WatchlistContainer from '../watchlistComponents/WatchlistContainer';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import CoinDetailsPage from './CoinDetailsPage';


const CoinTable = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCoinId, setSelectedCoinId] = useState(null);
  const [watchlists, setWatchlists] = useState([]);
  const [newWatchlistName, setNewWatchlistName] = useState('');
  const [selectedWatchlist, setSelectedWatchlist] = useState('');
  const [allWatchlists, setAllWatchlists] = useState([]);
  

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=24h&locale=en'
        );
        setCoins(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching coins:', error);
        setIsLoading(false);
      }
    };

    fetchCoins();
  }, []);

  useEffect(() => {
    const fetchAllWatchlists = async () => {
      try {
        const watchlists = await OtbcApi.getAllWatchlists();
        setAllWatchlists(watchlists);
        setWatchlists(watchlists); // Set the initial state for watchlists
      } catch (error) {
        console.error('Error fetching watchlists:', error);
      }
    };

    fetchAllWatchlists();
  }, []);



  const handleAddCoin = async (coinId) => {
    if (selectedWatchlist) {
      const selectedWatchlistObj = watchlists.find(
        (watchlist) => watchlist.id === selectedWatchlist
      );
  
      if (selectedWatchlistObj && selectedWatchlistObj.coins) {
        const updatedCoins = [...selectedWatchlistObj.coins, coinId];
        const updatedWatchlistObj = {
          ...selectedWatchlistObj,
          coins: updatedCoins,
        };
  
        try {
          await OtbcApi.updateWatchlist(selectedWatchlistObj.id, updatedWatchlistObj);
          const updatedWatchlists = watchlists.map((watchlist) =>
            watchlist.id === selectedWatchlist ? updatedWatchlistObj : watchlist
          );
          setWatchlists(updatedWatchlists);
        } catch (error) {
          console.error('Error updating watchlist:', error);
        }
      }
    }
  };
  
  const addToWatchlist = (coinId) => {
    const selectedWatchlistObj = watchlists.find(
      (watchlist) => watchlist.id === selectedWatchlist
    );
  
    if (selectedWatchlistObj && !selectedWatchlistObj.coins.includes(coinId)) {
      handleAddCoin(coinId);
    }
  };
  
  const handleWatchlistChange = (event) => {
    setSelectedWatchlist(event.target.value);
  };

  
  const removeFromWatchlist = (coinId) => {
    const updatedWatchlists = watchlists.map((watchlist) => {
      const updatedCoins = watchlist.coins.filter((id) => id !== coinId);
      return { ...watchlist, coins: updatedCoins };
    });

    setWatchlists(updatedWatchlists);
  };

  const createNewWatchlist = async (watchlistName) => {
    try {
      const createdWatchlist = await OtbcApi.createWatchlist(watchlistName);
      setWatchlists([...watchlists, createdWatchlist]);
      setAllWatchlists([...watchlists, createdWatchlist]);
      setNewWatchlistName('');
    } catch (error) {
      console.error('Error creating watchlist:', error);
    }
  };

  const handleNewWatchlistNameChange = (event) => {
    setNewWatchlistName(event.target.value);
  };

  return (
    <div>
      <div style={{ display: 'inline-block' }}>
        <Helmet>
          {/* <script src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js" type="text/javascript" /> */}
          <script defer src="https://www.livecoinwatch.com/static/lcw-widget.js"></script>
          {/* <script defer src="https://www.livecoinwatch.com/static/lcw-widget.js"></script>  */}
        </Helmet>
        <coingecko-coin-price-marquee-widget
          coin-ids="bitcoin,ethereum,ripple,matic-network,solana,dogecoin,tether,usd-coin,cosmos"
          currency="usd"
          background-color="#ffffff"
          locale="en"
          font-color="#000000"
        ></coingecko-coin-price-marquee-widget>
      </div>

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
      ></div>{' '}
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

      <h1>Top Coins</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <select
            value={selectedWatchlist}
            onChange={handleWatchlistChange}
          >
            <option value="">Select Watchlist</option>
            {allWatchlists.map((watchlist) => (
              <option key={watchlist.id} value={watchlist.id}>
                {watchlist.name}
              </option>
            ))}
          </select>
          <table>
            <thead>
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
              {coins.map((coin) => (
                <tr key={coin.id}>
                  <td>
                    <img
                      src={coin.image}
                      alt={coin.name}
                      style={{ width: '30px', height: '30px' }}
                    />
                  </td>
                  {/* <td onClick={() => setSelectedCoinId(coin.id)} >
                    {coin.name}{' '}
                  </td> */}
                    <Link
    to={`/coin/${coin.id}`}
    onClick={() => setSelectedCoinId(coin.id)}
  >
    {coin.name}
  </Link>
                  <td>{coin.symbol.toUpperCase()}</td>
                  <td>${coin.market_cap}</td>
                  <td>${coin.current_price}</td>
                  <td>{coin.price_change_percentage_24h}%</td>
                  <td>
                    {/* {selectedWatchlist &&
                    watchlists.some((watchlist) =>
                      watchlist.coins.includes(coin.id)
                    ) ? (
                      <button
                        onClick={() => removeFromWatchlist(coin.id)}
                      >
                        Remove
                      </button>
                    ) : (
                      <button onClick={() => addToWatchlist(coin.id)}>
                        Add
                      </button> */}
                      {selectedWatchlist &&
  watchlists.some(
    (watchlist) =>
      watchlist.id === selectedWatchlist && watchlist.coins.includes(coin.id)
  ) ? (
    <button onClick={() => removeFromWatchlist(coin.id)}>
      Remove
    </button>
  ) : (
    <button onClick={() => addToWatchlist(coin.id)}>
      Add
    </button>
)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {selectedCoinId && <CoinDetail coinId={selectedCoinId} />}
          {coins.length > 0 && (
            <>
              <CreateWatchlist onCreateWatchlist={createNewWatchlist} handleNewWatchlistNameChange={handleNewWatchlistNameChange} newWatchlistName={newWatchlistName} />
              <WatchlistContainer
                watchlists={watchlists}
                coins={coins}
                removeFromWatchlist={removeFromWatchlist}
                addToWatchlist={addToWatchlist}
              />
            </>
          )}
          {/* <img src="https://alternative.me/crypto/fear-and-greed-index.png" alt="Latest Crypto Fear & Greed Index" /> */}
        </>
      )}
    </div>
  );
};

export default CoinTable;
