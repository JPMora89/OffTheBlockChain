import React from 'react';
import { useParams } from 'react-router-dom';
import CoinDetail from './CoinsDetail';
import { Link } from 'react-router-dom';

const CoinDetailsPage = () => {
    const { coinId } = useParams();
    console.log(coinId);

  return (
    <div>
      <h2>Coin Details</h2>
      <Link to="/">Back to Coin Table</Link>
      <CoinDetail coinId={coinId} />
    </div>
  );
};

export default CoinDetailsPage;
