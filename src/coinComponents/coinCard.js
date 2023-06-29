import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CoinCard = ({ symbol }) => {
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${symbol}`
        );
        setCoinData(response.data);
      } catch (error) {
        console.error('Error fetching coin data:', error);
      }
    };

    fetchData();
  }, [symbol]);

  if (!coinData) {
    return <p>Loading...</p>;
  }

  const { name, market_data } = coinData;
  const { market_cap, current_price, price_change_percentage_24h } = market_data;

  return (
    <div className="coin-card">
      <h3>{name}</h3>
      <p>Symbol: {symbol.toUpperCase()}</p>
      <p>Market Cap: ${market_cap.usd}</p>
      <p>Price: ${current_price.usd}</p>
      <p>Price Change (24h): {price_change_percentage_24h}%</p>
    </div>
  );
};

export default CoinCard;
