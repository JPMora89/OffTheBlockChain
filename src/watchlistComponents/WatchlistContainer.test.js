import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import WatchlistContainer from "./WatchlistContainer";
import OtbcApi from "../api";

jest.mock("../api"); // Mock the API module

// Mock the watchlists data
const mockWatchlists = [
  {
    watchlist_id: 1,
    name: "Watchlist 1",
  },
  {
    watchlist_id: 2,
    name: "Watchlist 2",
  },
];

// Mock the watchlist items data
const mockWatchlistItems = [
  {
    coin_id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: 45000,
    watchlist_id: 1,
  },
  {
    coin_id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: 3000,
    watchlist_id: 2,
  },
];

// Mock the removeFromWatchlist function
const mockRemoveFromWatchlist = jest.fn();

// Mock the handleDeleteWatchlist function
const mockHandleDeleteWatchlist = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

test("renders WatchlistContainer component with watchlists", () => {
  render(
    <WatchlistContainer
      watchlists={mockWatchlists}
      userCoins={[]}
      removeFromWatchlist={mockRemoveFromWatchlist}
      handleDeleteWatchlist={mockHandleDeleteWatchlist}
      items={mockWatchlistItems}
    />
  );
  const watchlist1Name = screen.getByText("Watchlist 1");
  const watchlist2Name = screen.getByText("Watchlist 2");
  expect(watchlist1Name).toBeInTheDocument();
  expect(watchlist2Name).toBeInTheDocument();
});

test("fetches and displays watchlist items", async () => {
  OtbcApi.getWatchlistItems.mockResolvedValue(mockWatchlistItems);

  render(
    <WatchlistContainer
      watchlists={mockWatchlists}
      userCoins={[]}
      removeFromWatchlist={mockRemoveFromWatchlist}
      handleDeleteWatchlist={mockHandleDeleteWatchlist}
      items={mockWatchlistItems}
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

test("displays a message when no watchlists are created", () => {
  render(
    <WatchlistContainer
      watchlists={[]}
      userCoins={[]}
      removeFromWatchlist={mockRemoveFromWatchlist}
      handleDeleteWatchlist={mockHandleDeleteWatchlist}
      items={[]}
    />
  );
  const noWatchlistsMessage = screen.getByText("No watchlists created.");
  expect(noWatchlistsMessage).toBeInTheDocument();
});
