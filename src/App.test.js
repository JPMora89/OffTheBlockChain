import { render, screen } from '@testing-library/react';
import App from './App';
import CoinTable from './coinComponents/coinTable';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/top coins/i);
  expect(linkElement).toBeInTheDocument();
});
