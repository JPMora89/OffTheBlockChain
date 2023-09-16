import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import CreateWatchlist from "./CreateWatchlist";
import OtbcApi from "../api";

jest.mock("../api"); // Mock the API module

// Mock the updateWatchlist function
const mockUpdateWatchlist = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

test("renders CreateWatchlist component with form", () => {
  render(<CreateWatchlist updateWatchlist={mockUpdateWatchlist} />);
  const watchlistNameInput = screen.getByLabelText("Watchlist Name:");
  const createButton = screen.getByText("Create Watchlist");
  expect(watchlistNameInput).toBeInTheDocument();
  expect(createButton).toBeInTheDocument();
});

test("handles input change", () => {
  render(<CreateWatchlist updateWatchlist={mockUpdateWatchlist} />);
  const watchlistNameInput = screen.getByLabelText("Watchlist Name:");
  fireEvent.change(watchlistNameInput, { target: { value: "New Watchlist" } });
  expect(watchlistNameInput.value).toBe("New Watchlist");
});

test("submits form and creates a watchlist", async () => {
  const mockCreatedWatchlist = { id: 1, name: "New Watchlist" };
  OtbcApi.createWatchlist.mockResolvedValue(mockCreatedWatchlist);

  render(<CreateWatchlist updateWatchlist={mockUpdateWatchlist} />);
  const watchlistNameInput = screen.getByLabelText("Watchlist Name:");
  const createButton = screen.getByText("Create Watchlist");

  fireEvent.change(watchlistNameInput, { target: { value: "New Watchlist" } });
  fireEvent.click(createButton);

  await waitFor(() => {
    expect(OtbcApi.createWatchlist).toHaveBeenCalledWith("New Watchlist");
  });

  await waitFor(() => {
    expect(mockUpdateWatchlist).toHaveBeenCalled();
  });

  expect(watchlistNameInput.value).toBe("");
});

test("handles create watchlist error", async () => {
  const errorMessage = "Error creating watchlist";
  OtbcApi.createWatchlist.mockRejectedValue(new Error(errorMessage));

  render(<CreateWatchlist updateWatchlist={mockUpdateWatchlist} />);
  const watchlistNameInput = screen.getByLabelText("Watchlist Name:");
  const createButton = screen.getByText("Create Watchlist");

  fireEvent.change(watchlistNameInput, { target: { value: "New Watchlist" } });
  fireEvent.click(createButton);

  await waitFor(() => {
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  expect(mockUpdateWatchlist).not.toHaveBeenCalled();
});
