import React from "react";
import { Link } from 'react-router-dom';

import './Glossary.css';


const Glossary = () => {
  const glossaryData = [
    {
      term: "Cryptocurrency",
      definition:
        "A digital or virtual currency that uses cryptography for secure transactions, control the creation of new units, and verify the transfer of assets. Examples include Bitcoin, Ethereum, and Litecoin.",
    },
    {
      term: "Blockchain",
      definition:
        "A decentralized and distributed ledger technology that records all transactions in chronological order. Each transaction is grouped into a block, and new blocks are added to the chain through consensus mechanisms like proof-of-work or proof-of-stake.",
    },
    {
      term: "Decentralization",
      definition:
        "The distribution of control or authority across a network of nodes, eliminating the need for a central authority or intermediary.",
    },
    {
      term: "Consensus Mechanism",
      definition:
        "A method used in blockchain networks to achieve agreement on the state of the ledger and validate new transactions. Examples include proof-of-work (PoW), proof-of-stake (PoS), and delegated proof-of-stake (DPoS).",
    },
    {
      term: "Smart Contracts",
      definition:
        "Self-executing contracts with predefined rules and conditions encoded on a blockchain. They automatically execute transactions or actions when specific conditions are met.",
    },
    {
      term: "Decentralized Applications (DApps)",
      definition:
        "Applications that run on a blockchain network and leverage its decentralized features. DApps operate without central authorities, providing transparency and security.",
    },
    {
      term: "Altcoin",
      definition:
        "Any cryptocurrency other than Bitcoin. The term is often used to refer to alternative cryptocurrencies that were developed after Bitcoin's success.",
    },
    {
      term: "Fork",
      definition:
        "A split in the blockchain, resulting in two separate paths or versions. Soft forks and hard forks are two types of forks with different consensus rules.",
    },
    {
      term: "Mining",
      definition:
        "The process of validating and adding new transactions to the blockchain. Miners use computational power to solve complex mathematical puzzles and are rewarded with new coins.",
    },
    {
      term: "Wallet",
      definition:
        "Software or hardware that allows users to store, send, and receive cryptocurrencies. Wallets store private keys used to access and manage the funds on the blockchain.",
    },
    {
      term: "Private Key",
      definition:
        "A unique and secret cryptographic key used to sign transactions and provide access to a user's cryptocurrency holdings. It should be kept secure and not shared with others.",
    },
    {
      term: "Public Key",
      definition:
        "A cryptographic key derived from the private key that allows others to send cryptocurrencies to a user's wallet. It is safe to share the public key with others.",
    },
    {
      term: "Token",
      definition:
        "A digital asset representing ownership or access rights to an underlying asset or service. Tokens can be fungible or non-fungible.",
    },
    {
      term: "Initial Coin Offering (ICO)",
      definition:
        "A fundraising method in which new cryptocurrencies are sold to investors in exchange for funding the development of a project.",
    },
    {
      term: "Decentralized Finance (DeFi)",
      definition:
        "A movement that aims to recreate traditional financial systems using blockchain technology. DeFi platforms offer financial services like lending, borrowing, and trading without intermediaries.",
    },
    {
      term: "Non-Fungible Token (NFT)",
      definition:
        "A unique and indivisible token that represents ownership of a distinct asset or piece of content. NFTs are used for digital art, collectibles, and other unique items.",
    },
    {
      term: "Mining Reward",
      definition:
        "The incentive given to miners for successfully adding new blocks to the blockchain. It usually consists of newly created coins and transaction fees.",
    },
    {
      term: "Immutable",
      definition:
        "The property of data on the blockchain that makes it unchangeable once it is added to a block. This feature ensures the security and integrity of the blockchain's history.",
    },
    {
      term: "Hash Function",
      definition:
        "A mathematical function that converts input data into a fixed-length string of characters (hash). It is used for data integrity verification and creating unique identifiers for blocks in a blockchain.",
    },
    {
      term: "Tokenization",
      definition:
        "The process of representing real-world assets or digital items as tokens on a blockchain. Tokens can represent various assets such as real estate, artwork, intellectual property, or virtual goods in video games.",
    },
  ];

  return (
    <div className="glossary">
        <Link id="backtoknowledgebutton" to="/knowledge">Back</Link>
      <h2>Glossary of Blockchain/Crypto Terms</h2>
      <ul>
        {glossaryData.map((item, index) => (
          <li key={index}>
            <strong>{item.term}:</strong> {item.definition}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Glossary;
