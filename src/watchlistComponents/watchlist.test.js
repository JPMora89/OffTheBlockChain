import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Watchlist from "./Watchlist";
import OtbcApi from "../api";

jest.mock("../api"); // Mock the API module

// Mock the watchlist data
const mockWatchlist = {
  watchlist_id: 1,
  name: "My Watchlist",
};

// Mock the watchlist items data
const mockWatchlistItems = [
  {
    coin_id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: 45000,
  },
  {
    coin_id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: 3000,
  },
];

// Mock the handleDeleteWatchlist function
const mockHandleDeleteWatchlist = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

test("renders Watchlist component with watchlist name", () => {
  render(
    <Watchlist
      watchlist={mockWatchlist}
      handleDeleteWatchlist={mockHandleDeleteWatchlist}
    />
  );
  const watchlistName = screen.getByText("My Watchlist");
  expect(watchlistName).toBeInTheDocument();
});

test("fetches and displays watchlist items", async () => {
  OtbcApi.getWatchlistItems.mockResolvedValue(mockWatchlistItems);

  render(
    <Watchlist
      watchlist={mockWatchlist}
      handleDeleteWatchlist={mockHandleDeleteWatchlist}
    />
  );

  // Wait for the watchlist items to be fetched and displayed
  await waitFor(() => {
    const bitcoinName = screen.getByText("Bitcoin (BTC) $45000");
    const ethereumName = screen.getByText("Ethereum (ETH) $3000");
    expect(bitcoinName).toBeInTheDocument();
    expect(ethereumName).toBeInTheDocument();
  });
});

test("handles removing a coin from watchlist", async () => {
  OtbcApi.removeFromWatchlist.mockResolvedValue();

  render(
    <Watchlist
      watchlist={mockWatchlist}
      handleDeleteWatchlist={mockHandleDeleteWatchlist}
    />
  );

  const bitcoinRemoveButton = screen.getByText("Remove");
  fireEvent.click(bitcoinRemoveButton);

  // Wait for the removeFromWatchlist function to be called
  await waitFor(() => {
    expect(OtbcApi.removeFromWatchlist).toHaveBeenCalledWith(1, 1); // Assuming coin_id 1 corresponds to Bitcoin
  });
});
