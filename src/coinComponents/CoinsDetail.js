import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoinNews from './coinNews';

const CoinDetail = ({ coinId }) => {
  const [coinData, setCoinData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinId}`
        );
        setCoinData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching coin data:', error);
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

  return (
    <div>
      <h1>{name} ({symbol.toUpperCase()})</h1>
      <img src={image.large} alt={name} />
      <p>{description?.en || 'Description not available.'}</p>
      <p>Current Price: ${current_price.usd}</p>
      <p>Market Cap: ${market_cap.usd}</p>
      <p>Total Volume: ${total_volume.usd}</p>
      <p>Homepage: {homepage}</p>
      <p>Official Forum: {official_forum_url}</p>
      <p>Twitter: {twitter_screen_name}</p>
        <CoinNews coinId={coinId} />
    </div>
    
  );
};

export default CoinDetail;



