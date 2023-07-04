import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CoinNews = ({ coinId }) => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCoinNews = async () => {
      try {
        const response = await axios.get(
            `https://newsapi.org/v2/everything?q=${coinId}&apiKey=aa38df6ade6f4268bb8484a411245302`
          );
        setNews(response.data.articles);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching coin news:', error);
        setIsLoading(false);
      }
    };

    if (coinId) {
      fetchCoinNews();
    }
  }, [coinId]);

  return (
    <div className="coinNews">
      <h2>Coin News</h2>
      {isLoading ? (
        <p>Loading news...</p>
      ) : (
        <ul>
          {news.slice(0,5).map((article) => (
            <li key={article.id}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
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
