import React from "react";
import { useParams } from "react-router-dom";
import CoinDetail from "./CoinsDetail";
import { Link } from "react-router-dom";
import "./coinDetail.css"

const CoinDetailsPage = ({ watchlists, addToWatchlist }) => {
  const { coinId } = useParams();
  console.log(watchlists);
  console.log(coinId);

  return (
    <div>
      <h2 id="coindetailstitle">Coin Details</h2>
      <Link id="backtocointablebutton" to="/">
        Back
      </Link>
      <CoinDetail
        coinId={coinId}
        watchlists={watchlists}
        addToWatchlist={addToWatchlist}
      />
    </div>
  );
};

export default CoinDetailsPage;

