// import React from "react";
// import { Link } from "react-router-dom";

// const TopicLinksPage = ({ topics }) => {
//   return (
//     <div>
//       <h1>Knowledge Topics</h1>
//       {topics.map((topic) => (
//         <div key={topic.id}>
//           <Link to={`/knowledge/${topic.id}`}>{topic.title}</Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TopicLinksPage;

// import React from "react";
// import { useParams, Redirect, Link } from "react-router-dom";

// const KnowledgePage = ({ topics }) => {
//   const { topicId } = useParams();
//   const selectedTopic = topics.find((topic) => topic.id === parseInt(topicId));

//   if (!selectedTopic) {
//     return <Redirect to="/knowledge" />;
//   }

//   return (
//     <div>
//       <h2>{selectedTopic.title}</h2>
//       <div>
//         {selectedTopic.content.split("\n\n").map((paragraph, index) => (
//           <p key={index}>{paragraph}</p>
//         ))}
//       </div>
//       <Link to="/knowledge">Go Back</Link>
//     </div>
//   );
// };

// export default KnowledgePage;

// import React from "react";
// import { useParams } from "react-router-dom";

// const KnowledgePage = ({ knowledgeTopics }) => {
//   const { topicId } = useParams();
//   const topic = knowledgeTopics.find((topic) => topic.id === topicId);

//   if (!topic) {
//     return <div>Topic not found</div>;
//   }

//   return (
//     <div>
//       <h2>{topic.title}</h2>
//       <div>{topic.content}</div>
//     </div>
//   );
// };

// export default KnowledgePage;
// import React from "react";
// import { useParams } from "react-router-dom";
// import KnowledgeComponent from "./KnowledgeComponent";

// const KnowledgePage = ({ topics }) => {
//   const { topicId } = useParams();
//   const topic = topics.find((topic) => topic.id === parseInt(topicId));

//   const { title, content } = topic;

// //   if (!topic) {
// //     return <div>Topic not found</div>;
// //   }

// //   return (
// //     <div>
// //       <KnowledgeComponent title={topic.title} content={topic.content} />
// //     </div>
// //   );
// return (
//     <div>
//       {topic && (
//         <KnowledgeComponent
//           key={topic.id}
//           topicID={topic.id} // Pass the topicID prop here
//           title={topic.title}
//           content={topic.content}
//         />
//       )}
//     </div>
//   );
// };

// export default KnowledgePage;

// import React from "react";
// import { useParams } from "react-router-dom";
// import KnowledgeComponent from "./KnowledgeComponent";

// const KnowledgePage = ({ topics }) => {
//   const { topicId } = useParams();
//   const topic = topics.find((topic) => topic.id === parseInt(topicId));

//   if (!topic) {
//     return <div>Topic not found</div>;
//   }

//   const { title, content } = topic;

//   return (
//     <div>
//       <h2>{title}</h2>
//       <KnowledgeComponent title={title} content={content} />
//     </div>
//   );
// };

// export default KnowledgePage;

import React from "react";
import { useParams } from "react-router-dom";
import KnowledgeComponent from "./KnowledgeComponent";

const KnowledgePage = ({ knowledgeTopics }) => {
  const { topicId } = useParams();
  const topic = knowledgeTopics.find((topic) => topic.id === parseInt(topicId));
  console.log("topic:", topic); // Add this line
  console.log("topicId:", topicId); // Add this line
  console.log("knowledgeTopics:", knowledgeTopics); // Add this line
  

  if (!topic) {
    return <div>Topic not found</div>;
  }

  const { title, content } = topic;

  return (
    <div>
      <h2>{title}</h2>
      <KnowledgeComponent title={title} content={content} />
    </div>
  );
};

export default KnowledgePage;



