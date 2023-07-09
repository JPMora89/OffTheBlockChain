import React from "react";
import { Link } from "react-router-dom";

const KnowledgeTopicList = ({ knowledgeTopics }) => {
    console.log("knowledgeTopics:", knowledgeTopics)
  return (
    <ul>
      {knowledgeTopics.map((topic) => (
        <li key={topic.topicId}>
          <Link to={`/knowledge/${topic.topicId}`}>{topic.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default KnowledgeTopicList;
