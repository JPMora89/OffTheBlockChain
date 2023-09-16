import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import CoinTable from "./CoinTable";
import OtbcApi from "../api";

jest.mock("axios"); 
jest.mock("../api"); 

describe("CoinTable", () => {
  const mockCoins = [
    {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      market_cap: 900000000000,
      price: 50000,
      price_change_percentage_24h: 5.0,
      image: "https://example.com/bitcoin.png",
      coin_id: "bitcoin",
    },
  ];

  const mockWatchlists = [
    {
      id: 1,
      name: "Watchlist 1",
      watchlist_id: "watchlist1",
      coins: ["bitcoin"],
    },
  ];

  const mockTrendingCoins = [
    {
      item: {
        id: "ethereum",
        name: "Ethereum",
        symbol: "ETH",
        price_btc: 0.05,
        thumb: "https://example.com/ethereum.png",
      },
    },
  ];

  beforeEach(() => {
    axios.get.mockReset();
    OtbcApi.getAllWatchlists.mockReset();
    OtbcApi.addAllCoinstoDB.mockReset();
    axios.get.mockReset();

    axios.get.mockResolvedValue({
      data: { coins: mockTrendingCoins },
    });

    OtbcApi.getAllCoins.mockResolvedValue(mockCoins);
    OtbcApi.getAllWatchlists.mockResolvedValue(mockWatchlists);
    OtbcApi.addToWatchlist.mockResolvedValue();

    console.error = jest.fn();
  });

  it("fetches and displays top coins", async () => {
    render(<CoinTable />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(() => screen.getByText("Bitcoin"));

          expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    expect(screen.getByText("BTC")).toBeInTheDocument();
    expect(screen.getByText("$900,000,000,000")).toBeInTheDocument();
    expect(screen.getByText("$50,000")).toBeInTheDocument();
    expect(screen.getByText("5.000%")).toBeInTheDocument();
    expect(screen.getByAltText("Bitcoin")).toHaveAttribute(
      "src",
      "https://example.com/bitcoin.png"
    );
  });

  it("fetches and displays trending coins", async () => {
    render(<CoinTable />);

    await waitFor(() => screen.getByText("Ethereum"));

    expect(screen.getByText("Ethereum")).toBeInTheDocument();
    expect(screen.getByText("ETH")).toBeInTheDocument();
    expect(screen.getByText("$0.05")).toBeInTheDocument();
    expect(screen.getByAltText("Ethereum")).toHaveAttribute(
      "src",
      "https://example.com/ethereum.png"
    );
  });

  it("handles adding and removing coins from watchlist", async () => {
    render(<CoinTable />);

    await waitFor(() => screen.getByText("Bitcoin"));

    fireEvent.change(screen.getByTestId("watchlistSelect"), {
      target: { value: "watchlist1" },
    });

    fireEvent.click(screen.getByText("Add"));

    expect(window.alert).toHaveBeenCalledWith("Coin added to watchlist");

    fireEvent.click(screen.getByText("Remove"));

    expect(screen.getByText("Add")).toBeInTheDocument();
  });

});
