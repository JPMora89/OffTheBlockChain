import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Use MemoryRouter for routing-related tests
import KnowledgeHardCode from './KnowledgeHardCode';

describe('KnowledgeHardCode', () => {
  it('renders the knowledge topics and links', () => {
    render(
      <MemoryRouter>
        <KnowledgeHardCode />
      </MemoryRouter>
    );

    // Assert that the main title is rendered
    expect(screen.getByText('What you need to know about BlockChain technology')).toBeInTheDocument();

    // Assert that the knowledge topics are rendered
    expect(screen.getByText('Introduction to Cryptocurrencies')).toBeInTheDocument();
    expect(screen.getByText('Blockchain Technology: The building blocks of trust and transparency')).toBeInTheDocument();
    expect(screen.getByText('Decentralized Finance (DeFi)')).toBeInTheDocument();
    expect(screen.getByText('Tokenization and Non-Fungible Tokens (NFTs)')).toBeInTheDocument();
    expect(screen.getByText('Smart Contracts and Decentralized Applications (DApps)')).toBeInTheDocument();
    expect(screen.getByText('How to Get Started Trading Crypto')).toBeInTheDocument();

    // Assert that the Glossary link is rendered
    expect(screen.getByText('Glossary')).toBeInTheDocument();

    // Assert that the images are rendered (you can also use 'getByAltText')
    expect(screen.getByTestId('blockchainTransformed')).toBeInTheDocument();
    expect(screen.getByTestId('defitransformed')).toBeInTheDocument();
    expect(screen.getByTestId('dApps')).toBeInTheDocument();
  });
});
