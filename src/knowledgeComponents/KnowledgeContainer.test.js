import React from 'react';
import { render, screen } from '@testing-library/react';
import KnowledgeContainer from './KnowledgeContainer';

describe('KnowledgeContainer', () => {
  it('renders the knowledge topics and images', () => {
    render(<KnowledgeContainer />);

    // Assert that the main title is rendered
    expect(screen.getByText('Knowledge')).toBeInTheDocument();

    // Assert that the knowledge topics are rendered
    expect(screen.getByText('Introduction to Cryptocurrencies')).toBeInTheDocument();
    expect(screen.getByText('Blockchain Technology: The building blocks of trust and transparency')).toBeInTheDocument();
    expect(screen.getByText('Decentralized Finance (DeFi)')).toBeInTheDocument();
    expect(screen.getByText('Tokenization and Non-Fungible Tokens (NFTs)')).toBeInTheDocument();
    expect(screen.getByText('Smart Contracts and Decentralized Applications (DApps)')).toBeInTheDocument();
    expect(screen.getByText('How to Get Started Trading Crypto')).toBeInTheDocument();

    // Assert that the images are rendered
    expect(screen.getByAltText('blockchain')).toBeInTheDocument();
    expect(screen.getByAltText('defi')).toBeInTheDocument();
  });
});
