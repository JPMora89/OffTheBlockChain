import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import CoinDetail from "./CoinDetail";
import OtbcApi from "../api";

jest.mock("axios"); 
jest.mock("../api"); 

describe("CoinDetail", () => {
  const mockCoinId = "bitcoin";
  const mockCoinData = {
    name: "Bitcoin",
    symbol: "BTC",
    description: {
      en: "Bitcoin is a cryptocurrency.",
    },
    image: {
      large: "https://example.com/bitcoin.png",
    },
    market_data: {
      current_price: {
        usd: 50000,
      },
      market_cap: {
        usd: 900000000000,
      },
      total_volume: {
        usd: 20000000000,
      },
    },
    links: {
      homepage: "https://bitcoin.org",
      official_forum_url: "https://bitcointalk.org",
      twitter_screen_name: "Bitcoin",
    },
  };
  const mockWatchlists = [
    {
      id: 1,
      name: "Watchlist 1",
      watchlist_id: "watchlist1",
      coins: [],
    },
    {
      id: 2,
      name: "Watchlist 2",
      watchlist_id: "watchlist2",
      coins: [],
    },
  ];

  beforeEach(() => {
    axios.get.mockReset();
    OtbcApi.getAllWatchlists.mockReset();
    OtbcApi.getCoin.mockReset();
    OtbcApi.addToWatchlist.mockReset();

    axios.get.mockResolvedValue({ data: mockCoinData });

    OtbcApi.getAllWatchlists.mockResolvedValue(mockWatchlists);
    OtbcApi.getCoinByName.mockResolvedValue({ id: "coinDetailId" });
    OtbcApi.addToWatchlist.mockResolvedValue();

    console.error = jest.fn();
  });

  it("fetches and displays coin details", async () => {
    render(<CoinDetail coinId={mockCoinId} />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(() => screen.getByText("Bitcoin (BTC)"));

    expect(screen.getByText("Bitcoin (BTC)")).toBeInTheDocument();
    expect(screen.getByText("Bitcoin is a cryptocurrency.")).toBeInTheDocument();
    expect(screen.getByAltText("Bitcoin")).toHaveAttribute(
      "src",
      "https://example.com/bitcoin.png"
    );
    expect(screen.getByText("Current Price: $50,000")).toBeInTheDocument();
    expect(screen.getByText("Market Cap: $900,000,000,000")).toBeInTheDocument();
    expect(screen.getByText("Total Volume: $20,000,000,000")).toBeInTheDocument();
    expect(screen.getByText("Homepage:")).toHaveAttribute(
      "href",
      "https://bitcoin.org"
    );
    expect(screen.getByText("Official Forum:")).toHaveAttribute(
      "href",
      "https://bitcointalk.org"
    );
    expect(screen.getByText("Twitter:")).toHaveAttribute(
      "href",
      "https://twitter.com/Bitcoin"
    );
  });

  it("fetches watchlists and handles watchlist selection", async () => {
    render(<CoinDetail coinId={mockCoinId} />);

    await waitFor(() => screen.getByText("Add to Watchlist:"));

    expect(screen.getByText("Select Watchlist")).toBeInTheDocument();
    expect(screen.getByText("Watchlist 1")).toBeInTheDocument();
    expect(screen.getByText("Watchlist 2")).toBeInTheDocument();

    fireEvent.change(screen.getByTestId("watchlistSelect"), {
      target: { value: "watchlist1" },
    });

    expect(screen.getByTestId("watchlistSelect")).toHaveValue("watchlist1");
  });

  it("handles adding to watchlist", async () => {
    render(<CoinDetail coinId={mockCoinId} />);

    await waitFor(() => screen.getByText("Add to Watchlist:"));

    fireEvent.change(screen.getByTestId("watchlistSelect"), {
      target: { value: "watchlist1" },
    });

    fireEvent.click(screen.getByText("Add to Watchlist"));

    expect(window.alert).toHaveBeenCalledWith("Coin added to watchlist");

    expect(OtbcApi.addToWatchlist).toHaveBeenCalledWith(
      "coinDetailId",
      "watchlist1"
    );
  });

});
