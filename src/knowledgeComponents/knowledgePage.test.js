import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import KnowledgePage from './KnowledgePage';

describe('KnowledgePage', () => {
  const knowledgeTopics = [
    {
      topicId: 1,
      title: 'Introduction to Cryptocurrencies',
      content: '...',
    },
    {
      topicId: 2,
      title: 'Blockchain Technology',
      content: '...',
    },
  ];

  it('renders the topic content when a valid topicId is in the URL', () => {
    render(
      <MemoryRouter initialEntries={['/knowledge/1']}>
        <Route path="/knowledge/:topicId">
          <KnowledgePage knowledgeTopics={knowledgeTopics} />
        </Route>
      </MemoryRouter>
    );

    expect(screen.getByText('Introduction to Cryptocurrencies')).toBeInTheDocument();
    expect(screen.getByText('Cryptocurrencies have revolutionized the financial landscape')).toBeInTheDocument();
  });

  it('renders "Topic not found" when an invalid topicId is in the URL', () => {
    render(
      <MemoryRouter initialEntries={['/knowledge/3']}>
        <Route path="/knowledge/:topicId">
          <KnowledgePage knowledgeTopics={knowledgeTopics} />
        </Route>
      </MemoryRouter>
    );

    expect(screen.getByText('Topic not found')).toBeInTheDocument();
  });
});
