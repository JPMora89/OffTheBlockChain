import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import CoinCard from "./CoinCard";

describe("CoinCard", () => {
  const mockCoinData = {
    name: "Bitcoin",
    market_data: {
      market_cap: { usd: 100000000000 },
      current_price: { usd: 50000 },
      price_change_percentage_24h: 5.0,
    },
  };

  const mockSymbol = "bitcoin";
  const mockApiResponse = {
    data: mockCoinData,
  };

  let axiosMock;

  beforeEach(() => {
    axiosMock = new MockAdapter(axios);
  });

  afterEach(() => {
    axiosMock.restore();
  });

  it("displays loading message while fetching data", () => {
    axiosMock.onGet(`https://api.coingecko.com/api/v3/coins/${mockSymbol}`).reply(200, mockApiResponse);

    const { container } = render(<CoinCard symbol={mockSymbol} />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(container.querySelector(".coin-card")).toBeNull();
  });

  it("displays coin data after fetching", async () => {
    axiosMock.onGet(`https://api.coingecko.com/api/v3/coins/${mockSymbol}`).reply(200, mockApiResponse);

    const { container } = render(<CoinCard symbol={mockSymbol} />);

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).toBeNull();
      expect(container.querySelector(".coin-card")).toBeInTheDocument();
      expect(screen.getByText("Bitcoin")).toBeInTheDocument();
      expect(screen.getByText("Symbol: BITCOIN")).toBeInTheDocument();
      expect(screen.getByText("Market Cap: $100,000,000,000")).toBeInTheDocument();
      expect(screen.getByText("Price: $50,000")).toBeInTheDocument();
      expect(screen.getByText("Price Change (24h): 5%")).toBeInTheDocument();
    });
  });

  it("handles API error gracefully", async () => {
    axiosMock.onGet(`https://api.coingecko.com/api/v3/coins/${mockSymbol}`).reply(500);

    const { container } = render(<CoinCard symbol={mockSymbol} />);

    await waitFor(() => {
      expect(screen.getByText("Loading...")).toBeInTheDocument();
      expect(container.querySelector(".coin-card")).toBeNull();
    });
  });
});
