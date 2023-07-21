

import React from "react";
import "./knowledgeStyling.css";

const KnowledgeComponent = ({ title, content, topicId, knowledgeTopics }) => {
  console.log("knowledgeTopics:", knowledgeTopics)
  console.log(topicId);
  const paragraphs = content ? content.split("\n\n") : [];

  let topicIdSelector = `topic-${topicId}`;

  return (
    <div id={topicIdSelector} className="knowledge-component">
      <h2>{title}</h2>
      <div className="knowledge-content">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeComponent;
