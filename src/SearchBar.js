import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import OtbcApi from "./api";
import "./App.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const coinData = await OtbcApi.getCoinByNameOrSymbol(searchTerm);
      console.log("Coin data from API:", coinData);

      // Check if the coin exists
      if (coinData && coinData.coin_id) {
        console.log("Coin ID found:", coinData.coin_id);
        history.push(`/coin/${coinData.coin_id}`);
        setSearchTerm("");
      } else {
        console.log("Coin not found.");
      }
    } catch (error) {
      console.error("Error searching for coin:", error);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        id="search-bar"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a coin..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
