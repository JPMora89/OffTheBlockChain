
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./coinDetail.css"
import OtbcApi from "../api";

const CoinNews = ({ coinId }) => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [coinSymbol, setCoinSymbol] = useState("");


const getCoinSymbol = async () => {
  try {
    const response = await OtbcApi.getCoin(coinId);
    const coinSymbol = response.symbol;
    setCoinSymbol(coinSymbol); 
  } catch (error) {
    console.error("Error fetching coin symbol:", error);
  }
};

const fetchCoinNews = async () => {
  if (!coinSymbol) {
    return; 
  }

  try {
    const coinNews = await OtbcApi.getCoinNews(coinSymbol);
    setNews(coinNews);
    setIsLoading(false);
  } catch (error) {
    console.error("Error fetching coin news:", error);
    setIsLoading(false);
  }
};

useEffect(() => {
  getCoinSymbol(); 
}, [coinId]);

useEffect(() => {
  fetchCoinNews(); 
}, [coinSymbol]);


  return (
    <div className="coinNews">
      <h2 id="coinnewsheader">Coin News</h2>
      {isLoading ? (
        <p>Loading news...</p>
      ) : (
        <ul id="newslist">
          {news.slice(0, 5).map((article) => (
            <li id="newsarticle" key={article.id}>
              <a id="news" href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CoinNews;

