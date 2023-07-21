import React from 'react';
import { useParams } from 'react-router-dom';
import CoinDetail from './CoinsDetail';
import { Link } from 'react-router-dom';

const CoinDetailsPage = ({watchlists, addToWatchlist}) => {
    const { coinId } = useParams();
    console.log(watchlists)
    console.log(coinId);

  return (
    <div>
      <h2>Coin Details</h2>
      <Link to="/">Back to Coin Table</Link>
      <CoinDetail coinId={coinId}     
      watchlists={watchlists}
    addToWatchlist={addToWatchlist} 
    />
    </div>
  );
};

export default CoinDetailsPage;
