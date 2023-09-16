import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import WatchlistPage from './WatchlistPage';

jest.mock('../api', () => ({
  getAllWatchlists: jest.fn(() => Promise.resolve([])),
  deleteWatchlist: jest.fn(() => Promise.resolve()),
}));

describe('WatchlistPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders WatchlistPage component', async () => {
    render(<WatchlistPage />);
    
    expect(screen.getByText('Watchlists')).toBeInTheDocument();
  });

  it('fetches and displays watchlists', async () => {
    const watchlists = [
      { watchlist_id: 1, name: 'Watchlist 1' },
      { watchlist_id: 2, name: 'Watchlist 2' },
    ];

    jest.spyOn(require('../api'), 'getAllWatchlists').mockResolvedValue(watchlists);

    render(<WatchlistPage />);

    await waitFor(() => {
      expect(screen.getByText('Watchlist 1')).toBeInTheDocument();
      expect(screen.getByText('Watchlist 2')).toBeInTheDocument();
    });
  });

  it('deletes a watchlist', async () => {
    const watchlists = [{ watchlist_id: 1, name: 'Watchlist 1' }];

    jest.spyOn(require('../api'), 'getAllWatchlists').mockResolvedValue(watchlists);
    jest.spyOn(require('../api'), 'deleteWatchlist').mockResolvedValue();

    render(<WatchlistPage />);

    await waitFor(() => {
      expect(screen.getByText('Watchlist 1')).toBeInTheDocument();
    });

    const deleteButton = screen.getByText('Delete Watchlist');

    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(screen.queryByText('Watchlist 1')).not.toBeInTheDocument();
    });
  });
});
