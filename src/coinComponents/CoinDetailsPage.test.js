import React from "react";
import { render, screen } from "@testing-library/react";
import { useParams, MemoryRouter } from "react-router-dom";
import CoinDetailsPage from "./CoinDetailsPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

describe("CoinDetailsPage", () => {
  const mockParams = { coinId: "bitcoin" };
  const mockWatchlists = ["Watchlist 1", "Watchlist 2"];

  beforeEach(() => {
    useParams.mockReturnValue(mockParams);
  });

  it("renders the CoinDetailsPage component with correct title and back button", () => {
    render(
      <MemoryRouter>
        <CoinDetailsPage watchlists={mockWatchlists} />
      </MemoryRouter>
    );

    expect(screen.getByText("Coin Details")).toBeInTheDocument();
    expect(screen.getByText("Back")).toBeInTheDocument();
  });

  it("renders the CoinDetail component with the correct props", () => {
    render(
      <MemoryRouter>
        <CoinDetailsPage watchlists={mockWatchlists} />
      </MemoryRouter>
    );

    expect(screen.getByTestId("coin-detail-component")).toBeInTheDocument();

  });

});
