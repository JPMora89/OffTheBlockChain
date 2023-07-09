import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoinNews from './coinNews';
import OtbcApi from '../api';
import './coinDetail.css';

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
    <>
    <div>
      <h1 id='coinDetailHeader'>{name} ({symbol.toUpperCase()})</h1>
      <img src={image.large} alt={name}  id='coinLogo'/>
      <p id='coindDetailDescription'>{description?.en || 'Description not available.'}</p>
      <div id='coinMarketData'>
      <h2 id='coinMarketDataHeader'>Market Data</h2>
      <p>Current Price: ${current_price.usd.toLocaleString()}</p>
      <p>Market Cap: ${market_cap.usd.toLocaleString()}</p>
      <p>Total Volume: ${total_volume.usd.toLocaleString()}</p>
      {/* <p>Homepage: {homepage}</p> */}
      <p>Homepage: <a href={homepage} target='_blank' rel='noopener noreferrer'>{homepage}</a></p>
      {/* <p>Official Forum: {official_forum_url}</p> */}
      <p>Official Forum: <a href={official_forum_url} target='_blank' rel='noopener noreferrer'>{official_forum_url}</a></p>
      {/* <p>Twitter: {twitter_screen_name}</p> */}
      <p>Twitter: <a href={`https://twitter.com/${twitter_screen_name}`} target='_blank' rel='noopener noreferrer'>{twitter_screen_name}</a></p>
                    <CoinNews coinId={coinId} className="coinNews" />

    </div>

    </div>
</>
  );
};

export default CoinDetail;



