import React from "react";
import KnowledgeComponent from "./KnowledgeComponent";

const KnowledgeContainer = () => {
  const knowledgeTopics = [
    {
      id: 1,
      title: "Introduction to Cryptocurrencies",
      content: `Cryptocurrencies have revolutionized the financial landscape, offering a decentralized and digital form of money that operates outside the control of traditional financial institutions. In this beginner's guide, we'll explore the fundamental concepts of cryptocurrencies and shed light on their growing significance.\n\n
    What is a Cryptocurrency?\n
      A cryptocurrency is a digital or virtual currency that uses cryptography for secure transactions, control the creation of new units, and verify the transfer of assets. Unlike traditional currencies issued by governments, cryptocurrencies are based on decentralized technologies such as blockchain.\n
      
      Key Characteristics of Cryptocurrencies:\n
      
          Decentralization: Cryptocurrencies operate on decentralized networks, eliminating the need for a central authority like a bank or government.\n
          Security: Cryptocurrencies utilize advanced cryptographic techniques to secure transactions and control the creation of new units.\n
          Anonymity and Privacy: Depending on the cryptocurrency, users can enjoy varying degrees of privacy and anonymity in their transactions.\n
          Global Accessibility: Cryptocurrencies transcend borders, allowing anyone with an internet connection to participate in the network.\n
          Limited Supply: Many cryptocurrencies have a finite supply, ensuring scarcity and potentially driving value over time.\n
      
      How Cryptocurrencies Work:\n
      At the core of most cryptocurrencies is blockchain technology. A blockchain is a decentralized and transparent ledger that records all transactions in chronological order. These transactions are grouped into blocks, which are added to the chain through a consensus mechanism like proof-of-work or proof-of-stake.\n
      
      Cryptocurrencies use cryptographic algorithms to secure transactions and control the creation of new units. Transactions are verified by network participants (nodes) through a process known as mining or staking, depending on the consensus mechanism.\n
      
      Types of Cryptocurrencies:\n
      Bitcoin, introduced in 2009, was the first and most well-known cryptocurrency. Since then, thousands of cryptocurrencies, often referred to as altcoins, have emerged. Some popular altcoins include Ethereum, Ripple, Litecoin, and Bitcoin Cash. Each cryptocurrency has its unique features and use cases.\n
      
      Use Cases of Cryptocurrencies:\n
      Cryptocurrencies offer a range of applications beyond being a digital currency. They enable decentralized applications (DApps) and smart contracts on platforms like Ethereum. Additionally, cryptocurrencies facilitate cross-border payments, remittances, micropayments, and provide opportunities for investment and speculation.`
    },
    {
      id: 2,
      title: "Blockchain Technology: The building blocks of trust and transparency",
      content: `Blockchain is a decentralized and distributed ledger technology that forms the foundation of many cryptocurrencies and other applications. It is often described as a digital, immutable, and transparent "chain" of blocks that contain records of transactions or information.

      Key Concepts of Blockchain:
      
      Decentralization:
      Blockchain operates on a network of computers, known as nodes, where each node has a copy of the entire blockchain. This decentralized architecture eliminates the need for a central authority or intermediary to validate transactions.
      
      Consensus Mechanism:
      To ensure agreement on the state of the blockchain, consensus mechanisms are employed. These mechanisms define the rules for validating and adding new blocks to the chain. Examples include proof-of-work (PoW), proof-of-stake (PoS), and delegated proof-of-stake (DPoS).
      
      Immutable and Transparent:
      Once a block is added to the blockchain, it is extremely difficult to alter or tamper with the data it contains. This immutability provides a high level of security and trust. Additionally, blockchain's transparency allows anyone to view the entire transaction history.
      
      Use Cases of Blockchain:
      
      Cryptocurrencies:
      Blockchain technology enables the secure transfer of digital currencies like Bitcoin and Ethereum, providing a decentralized alternative to traditional financial systems.
      
      Smart Contracts:
      Blockchain platforms like Ethereum allow the execution of programmable contracts known as smart contracts. These contracts automatically enforce the terms and conditions of an agreement without intermediaries.
      
      Supply Chain Management:
      Blockchain can enhance supply chain transparency and traceability by recording the movement and verification of goods across multiple stages.
      
      Healthcare:
      Blockchain can improve the security and interoperability of medical records, enable secure sharing of patient data, and streamline healthcare processes.
      
      Voting Systems:
      Blockchain can be used to build transparent and tamper-proof voting systems, ensuring the integrity of elections.
      
      It's important to note that while blockchain technology has significant potential, it also faces challenges such as scalability, energy consumption, and regulatory considerations. Nonetheless, it continues to evolve and find applications beyond cryptocurrencies, impacting various industries and sectors.`
    },
    // Add more knowledge topics here
  ];

  return (
    <div>
      <h1>Knowledge</h1>
      {knowledgeTopics.map((topic) => (
        <KnowledgeComponent
          key={topic.id}
          title={topic.title}
          content={topic.content}
        />
      ))}
    </div>
  );
};

export default KnowledgeContainer;
