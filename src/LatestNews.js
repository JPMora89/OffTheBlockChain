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
      <a href="https://cryptopanic.com/" target="_blank" data-news_feed="recent" data-text_color="#333333" data-header_text_color="#FFFFFF" data-link_color="#FF5F1F" data-bg_color="#070C32" data-posts_limit="10" data-font_size="15" data-header_bg_color="#FF5F1F" class="CryptoPanicWidget">Off The BlockChain: Latest News</a>


      <Helmet><script src="https://static.cryptopanic.com/static/js/widgets.min.js"></script></Helmet>



    </div>
  );
};

export default LatestNews;



