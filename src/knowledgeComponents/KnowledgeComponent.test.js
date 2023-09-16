import React from 'react';
import { render, screen } from '@testing-library/react';
import KnowledgeComponent from './KnowledgeComponent';

describe('KnowledgeComponent', () => {
  const sampleData = {
    title: 'Sample Title',
    content: 'Sample content\n\nAnother paragraph',
    topicId: 1,
    knowledgeTopics: [],
  };

  it('renders the knowledge component with title and content', () => {
    render(
      <KnowledgeComponent
        title={sampleData.title}
        content={sampleData.content}
        topicId={sampleData.topicId}
        knowledgeTopics={sampleData.knowledgeTopics}
      />
    );

    // Assert that the title and paragraphs are rendered
    expect(screen.getByText(sampleData.title)).toBeInTheDocument();
    expect(screen.getByText('Sample content')).toBeInTheDocument();
    expect(screen.getByText('Another paragraph')).toBeInTheDocument();
  });

  it('renders the knowledge component without content', () => {
    render(
      <KnowledgeComponent
        title={sampleData.title}
        content={null}
        topicId={sampleData.topicId}
        knowledgeTopics={sampleData.knowledgeTopics}
      />
    );

    // Assert that the title is rendered, but content is not
    expect(screen.getByText(sampleData.title)).toBeInTheDocument();
    expect(screen.queryByText('Sample content')).not.toBeInTheDocument();
  });

  it('renders the knowledge component with unique id', () => {
    render(
      <KnowledgeComponent
        title={sampleData.title}
        content={sampleData.content}
        topicId={sampleData.topicId}
        knowledgeTopics={sampleData.knowledgeTopics}
      />
    );

    // Assert that the component has a unique ID based on topicId
    expect(screen.getByTestId('topic-1')).toBeInTheDocument();
  });
});
