import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./LatestNews.css";
import { Helmet } from "react-helmet";

const LatestNews = () => {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);

  const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    return dateTime.toLocaleString();
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=crypto&apiKey=aa38df6ade6f4268bb8484a411245302"
        );
        const sortedArticles = response.data.articles
          .slice(0, 15)
          .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        setArticles(sortedArticles);
      } catch (error) {
        console.log("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [key]);
  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? articles.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === articles.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="latest-news">
      <h1 id="latestnewheader">Latest News</h1>

      <Carousel
        selectedItem={currentIndex}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop
      >
        {articles.map((article) => (
          <div key={article.publishedAt} className="carousel-slide">
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} />
            )}
            <div className="article-details">
              <h3>{article.title}</h3>
              {article.author && <p>Author: {article.author}</p>}
              {article.source.name && <p>Source: {article.source.name}</p>}
              {article.publishedAt && (
                <p>Published: {formatDateTime(article.publishedAt)}</p>
              )}
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="carousel-navigation">
        <button onClick={handlePrevSlide}>&#8592; Prev</button>
        <button onClick={handleNextSlide}>Next &#8594;</button>
      </div>
      <Helmet>
        {/* <img src="https://alternative.me/crypto/fear-and-greed-index.png" alt="Latest Crypto Fear & Greed Index" /> */}
        {/* <script src="https://www.cryptohopper.com/widgets/js/script"></script> */}
      </Helmet>
    </div>
  );
};

export default LatestNews;
