import React from "react";

const KnowledgeComponent = ({ title, content }) => {
  return (
    <div className="knowledge-component">
      <h2 className="knowledge-component__title">{title}</h2>
      <div className="knowledge-component__content">{content}</div>
    </div>
  );
};

export default KnowledgeComponent;
