


import React from "react";
import "./knowledgeStyling.css";


const KnowledgeComponent = ({ title, content }) => {
  return (
    <div className="knowledge-component">
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
