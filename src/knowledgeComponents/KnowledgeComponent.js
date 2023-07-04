

import React from "react";
import "./knowledgeStyling.css";



const KnowledgeComponent = ({ title, content, topicId }) => {
  console.log(topicId)
  let topicIdSelector = `topic-${topicId}`
  return (
    <div id={topicIdSelector} className="knowledge-component">
      <h2>{title}</h2>
      <div className="knowledge-content">
        {content.split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};


export default KnowledgeComponent;