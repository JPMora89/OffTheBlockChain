import React from "react";
import { render, screen } from "@testing-library/react";
import axios from "axios"; 
import CoinNews from "./CoinNews";
import OtbcApi from "../api";

jest.mock("axios"); 
jest.mock("../api");

describe("CoinNews", () => {
  const mockCoinId = "bitcoin";
  const mockCoinSymbol = "BTC";
  const mockNews = [
    {
      id: 1,
      title: "News Article 1",
      url: "https://example.com/article1",
    },
    {
      id: 2,
      title: "News Article 2",
      url: "https://example.com/article2",
    },
  ];

  beforeEach(() => {
    axios.get.mockReset();
    OtbcApi.getCoin.mockReset();

    OtbcApi.getCoin.mockResolvedValue({ symbol: mockCoinSymbol });

    axios.get.mockResolvedValue({ data: mockNews });
  });

  it("fetches and displays coin news", async () => {
    render(<CoinNews coinId={mockCoinId} />);

    expect(screen.getByText("Loading news...")).toBeInTheDocument();

    await screen.findByText("News Article 1");

    expect(screen.getByText("News Article 1")).toBeInTheDocument();
    expect(screen.getByText("News Article 2")).toBeInTheDocument();
  });

  it("handles errors when fetching news", async () => {
    axios.get.mockRejectedValue(new Error("Failed to fetch news"));

    render(<CoinNews coinId={mockCoinId} />);

    expect(screen.getByText("Loading news...")).toBeInTheDocument();

    await screen.findByText("Failed to fetch news");

    expect(screen.getByText("Failed to fetch news")).toBeInTheDocument();
  });

});
