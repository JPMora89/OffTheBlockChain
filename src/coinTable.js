

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import CoinDetail from './CoinsDetail';
import Watchlist from './watchlist';
import {Helmet} from 'react-helmet';
import OtbcApi from './api';
import CreateWatchlist from './CreateWatchlist';
import WatchlistContainer from './WatchlistContainer';
import { v4 as uuidv4 } from 'uuid';
import { UserCoinsContext } from './userCoinContext';
import { UserCoinsProvider } from './userCoinContext';

const CoinTable = () => {
  const [ userCoins, setUserCoins] = useState([]);
  const [coins, setCoins] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [selectedCoinId, setSelectedCoinId] = useState(null);
  const [watchlist, setWatchlist] = useState([]);
  const [watchlists, setWatchlists] = useState([]);
  const [newWatchlistName, setNewWatchlistName] = useState('');

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=24h&locale=en'
        );
        setCoins(response.data);
        setIsLoading(false);

        await OtbcApi.addCoin(response.data)
        // console.log("coins added", response.data)
      } catch (error) {
        console.error('Error fetching coins:', error);
        setIsLoading(false);
      }
    };

    fetchCoins();


  }, []);

  // console.log(coins)


  const addToWatchlist = (coinId) => {
    if (!coins.includes(coinId)) {
        console.log(coinId)
      setWatchlist([...watchlist, coinId]);
      setUserCoins([coinId,...userCoins]);
      console.log(userCoins)
    }
  };



  const removeFromWatchlist = (coinId) => {
    setWatchlist(watchlist.filter((id) => id !== coinId));
  };

  const createNewWatchlist = (watchlistName) => {
    // Implement your logic here to create a new watchlist with the provided name




    console.log(`Creating new watchlist: ${watchlistName}`);
    // You can update the state or make API requests to create a new watchlist in your backend
    // setWatchlists([...watchlists, { id: uuidv4(), name: watchlistName }]);
    setWatchlists([...watchlists, { id: uuidv4(), name: watchlistName }]);
    setNewWatchlistName('');

    console.log(watchlists)


  };

  
  const handleNewWatchlistNameChange = (event) => {
  setNewWatchlistName(event.target.value);
};


  return (
    <UserCoinsProvider value={{userCoins, setUserCoins}}>
    <div>
            <div style={{display: 'inline-block'}}>
      <Helmet>
        {/* <script src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js" type="text/javascript" /> */}
        <script defer src="https://www.livecoinwatch.com/static/lcw-widget.js"></script>
        {/* <script defer src="https://www.livecoinwatch.com/static/lcw-widget.js"></script>  */}
      </Helmet>
      <coingecko-coin-price-marquee-widget  coin-ids="bitcoin,ethereum,ripple,matic-network,solana,dogecoin,tether,usd-coin,cosmos" currency="usd" background-color="#ffffff" locale="en" font-color="#000000"></coingecko-coin-price-marquee-widget>    </div>
    
      <div class="livecoinwatch-widget-1" lcw-coin="BTC" lcw-base="USD" lcw-secondary="ETH" lcw-period="d" lcw-color-tx="#ffffff" lcw-color-pr="#eb144c" lcw-color-bg="#1f2434" lcw-border-w="1" ></div> <div class="livecoinwatch-widget-1" lcw-coin="ETH" lcw-base="USD" lcw-secondary="ETH" lcw-period="d" lcw-color-tx="#ffffff" lcw-color-pr="#eb144c" lcw-color-bg="#1f2434" lcw-border-w="1" ></div>
    
      <h1>Top Coins</h1>
      
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
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
                <tr key={coin.id} >
                    <td><img src={coin.image} alt={coin.name} style={{ width: '30px', height: '30px' }} /></td>
                  <td onClick={() => setSelectedCoinId(coin.id)}>{coin.name} </td>
                  <td>{coin.symbol.toUpperCase()}</td>
                  <td>${coin.market_cap}</td>
                  <td>${coin.current_price}</td>
                  <td>{coin.price_change_percentage_24h}%</td>
                  <td>
                    {watchlist.includes(coin.id) ? (
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
            <Watchlist watchlist={watchlist} coins={coins} removeFromWatchlist={removeFromWatchlist} addToWatchlist={addToWatchlist}/>
            {coins.length > 0 && (
               <> <CreateWatchlist onCreateWatchlist={createNewWatchlist} />
            {/* <Watchlist
              watchlist={watchlist}
              coins={coins}
              removeFromWatchlist={removeFromWatchlist}
              addToWatchlist={addToWatchlist}
            /> */}
            <WatchlistContainer watchlists={watchlists} coins={coins} removeFromWatchlist={removeFromWatchlist} addToWatchlist={addToWatchlist} />
            </>
          )}
            {/* <img src="https://alternative.me/crypto/fear-and-greed-index.png" alt="Latest Crypto Fear & Greed Index" /> */}
        </>
      )}
    </div>
      </UserCoinsProvider>

  );
};


export default CoinTable;
