import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import KnowledgeComponent from "./KnowledgeComponent";
import KnowledgeTopicList from "./KnowledgeTopics";
import blockchain from "../assets/images/blockchain.jpg";
import defi from "../assets/images/defi.webp";
import dApps from "../assets/images/dApps.png";
import blockchainTransformed from "../assets/images/blockchainTransformed.png";
import defitransformed from "../assets/images/defitransformed.png";
import blockchainLink from "../assets/images/blockchainLink.png";
import "./knowledgeStyling.css";

const KnowledgeHardCode = () => {
  return (
    <div id="knowledge-section">
      {/* <img src={defitransformed} alt="defitransformed" id="defitransformed" /> */}

      <div class="title">
        <h1 id="knowledgeHeadline">
          What you need to know <br></br> about BlockChain <br></br> technology
        </h1>
      </div>
      <img
        src={blockchainTransformed}
        alt="blockchainTransformed"
        id="blockchainTransformed"
      />

      <Link id="glossaryButton" to="/glossary">
        Glossary
      </Link>
      {/* <img src={blockchain} className="headerImage"></img> */}

      {/* <h1 id="knowledgeHeader">Knowledge</h1> */}

      <div id="topic-1" class="knowledge-component">
        <h2>Introduction to Cryptocurrencies</h2>
        <div class="knowledge-content">
          <p>
            Cryptocurrencies have revolutionized the financial landscape,
            offering a decentralized and digital form of money that operates
            outside the control of traditional financial institutions. In this
            beginner's guide, we'll explore the fundamental concepts of
            cryptocurrencies and shed light on their growing significance.
          </p>
          <p className="subsection">What is a Cryptocurrency?</p>
          <p>
            {" "}
            A cryptocurrency is a digital or virtual currency that uses
            cryptography for secure transactions, control the creation of new
            units, and verify the transfer of assets. Unlike traditional
            currencies issued by governments, cryptocurrencies are based on
            decentralized technologies such as blockchain.
          </p>
          <p className="subsection">Key Characteristics of Cryptocurrencies:</p>
          <p>
            Decentralization: Cryptocurrencies operate on decentralized
            networks, eliminating the need for a central authority like a bank
            or government.
          </p>
          <p>
            {" "}
            Security: Cryptocurrencies utilize advanced cryptographic techniques
            to secure transactions and control the creation of new units.
          </p>
          <p>
            {" "}
            Anonymity and Privacy: Depending on the cryptocurrency, users can
            enjoy varying degrees of privacy and anonymity in their
            transactions.
          </p>
          <p>
            {" "}
            Global Accessibility: Cryptocurrencies transcend borders, allowing
            anyone with an internet connection to participate in the network.
          </p>
          <p>
            {" "}
            Limited Supply: Many cryptocurrencies have a finite supply, ensuring
            scarcity and potentially driving value over time.
          </p>
          <p className="subsection">How Cryptocurrencies Work:</p>
          <p>
            {" "}
            At the core of most cryptocurrencies is blockchain technology. A
            blockchain is a decentralized and transparent ledger that records
            all transactions in chronological order. These transactions are
            grouped into blocks, which are added to the chain through a
            consensus mechanism like proof-of-work or proof-of-stake.
          </p>
          <p>
            Cryptocurrencies use cryptographic algorithms to secure transactions
            and control the creation of new units. Transactions are verified by
            network participants (nodes) through a process known as mining or
            staking, depending on the consensus mechanism.
          </p>
          <p className="subsection">Types of Cryptocurrencies:</p>
          <p>
            {" "}
            Bitcoin, introduced in 2009, was the first and most well-known
            cryptocurrency. Since then, thousands of cryptocurrencies, often
            referred to as altcoins, have emerged. Some popular altcoins include
            Ethereum, Ripple, Litecoin, and Bitcoin Cash. Each cryptocurrency
            has its unique features and use cases.
          </p>
          <p className="subsection">Use Cases of Cryptocurrencies:</p>
          <p>
            {" "}
            Cryptocurrencies offer a range of applications beyond being a
            digital currency. They enable decentralized applications (DApps) and
            smart contracts on platforms like Ethereum. Additionally,
            cryptocurrencies facilitate cross-border payments, remittances,
            micropayments, and provide opportunities for investment and
            speculation.
          </p>
        </div>
      </div>
      <div id="topic-2" class="knowledge-component">
        <h2>
          Blockchain Technology: The building blocks of trust and transparency
        </h2>
        <div class="knowledge-content">
          <p>
            Blockchain is a decentralized and distributed ledger technology that
            forms the foundation of many cryptocurrencies and other
            applications. It is often described as a digital, immutable, and
            transparent "chain" of blocks that contain records of transactions
            or information.
          </p>
          <p className="subsection"> Key Concepts of Blockchain:</p>
          <p>
            Decentralization: Blockchain operates on a network of computers,
            known as nodes, where each node has a copy of the entire blockchain.
            This decentralized architecture eliminates the need for a central
            authority or intermediary to validate transactions.
          </p>
          <p>
            Consensus Mechanism: To ensure agreement on the state of the
            blockchain, consensus mechanisms are employed. These mechanisms
            define the rules for validating and adding new blocks to the chain.
            Examples include proof-of-work (PoW), proof-of-stake (PoS), and
            delegated proof-of-stake (DPoS).
          </p>
          <p>
            Immutable and Transparent: Once a block is added to the blockchain,
            it is extremely difficult to alter or tamper with the data it
            contains. This immutability provides a high level of security and
            trust. Additionally, blockchain's transparency allows anyone to view
            the entire transaction history.
          </p>
          <p className="subsection">Use Cases of Blockchain:</p>
          <p>
            Cryptocurrencies: Blockchain technology enables the secure transfer
            of digital currencies like Bitcoin and Ethereum, providing a
            decentralized alternative to traditional financial systems.
          </p>
          <p>
            Smart Contracts: Blockchain platforms like Ethereum allow the
            execution of programmable contracts known as smart contracts. These
            contracts automatically enforce the terms and conditions of an
            agreement without intermediaries.
          </p>
          <p>
            Supply Chain Management: Blockchain can enhance supply chain
            transparency and traceability by recording the movement and
            verification of goods across multiple stages.
          </p>
          <p>
            Healthcare: Blockchain can improve the security and interoperability
            of medical records, enable secure sharing of patient data, and
            streamline healthcare processes.
          </p>
          <p>
            Voting Systems: Blockchain can be used to build transparent and
            tamper-proof voting systems, ensuring the integrity of elections.
          </p>
          <p>
            It's important to note that while blockchain technology has
            significant potential, it also faces challenges such as scalability,
            energy consumption, and regulatory considerations. Nonetheless, it
            continues to evolve and find applications beyond cryptocurrencies,
            impacting various industries and sectors.
          </p>
        </div>
      </div>
      <div id="topic-3" class="knowledge-component">
        <h2>Decentralized Finance (DeFi)</h2>
        <div class="knowledge-content">
          <p>
            Decentralized Finance, also known as DeFi, refers to the use of
            blockchain technology and cryptocurrencies to recreate traditional
            financial systems in a decentralized manner. It aims to provide
            financial services such as lending, borrowing, and trading without
            relying on intermediaries like banks or brokers. DeFi platforms
            utilize smart contracts and blockchain interoperability to enable
            trustless and permissionless transactions. Some popular DeFi
            applications include decentralized exchanges (DEXs), lending
            platforms, stablecoins, and yield farming. DeFi has gained
            significant attention and adoption in recent years, contributing to
            the growth of the overall cryptocurrency ecosystem.
          </p>
        </div>
      </div>
      <div id="topic-4" class="knowledge-component">
        <h2>Tokenization and Non-Fungible Tokens (NFTs)</h2>
        <div class="knowledge-content">
          <p>
            Tokenization refers to the process of representing real-world assets
            or digital items as tokens on a blockchain. Tokens can represent
            various assets such as real estate, artwork, intellectual property,
            or even virtual goods in video games. Non-Fungible Tokens (NFTs) are
            a type of token that represent unique digital assets. Unlike
            cryptocurrencies that are fungible and interchangeable, NFTs have
            distinct characteristics and cannot be replicated. NFTs have gained
            significant popularity in the art and collectibles space, enabling
            artists and creators to tokenize and sell their digital works in a
            secure and transparent manner.
          </p>
        </div>
      </div>
      <div id="topic-5" class="knowledge-component">
        <h2>Smart Contracts and Decentralized Applications (DApps)</h2>
        <div class="knowledge-content">
          <p>
            Smart contracts are self-executing contracts with predefined rules
            and conditions encoded on a blockchain. They automatically execute
            transactions or actions when specific conditions are met. Smart
            contracts enable decentralized applications (DApps) to operate on
            blockchain platforms like Ethereum. DApps leverage the transparency,
            security, and immutability of blockchain to provide a wide range of
            services and functionalities, including financial applications,
            gaming platforms, supply chain management, and more. Developers can
            build and deploy smart contracts to create innovative and trustless
            applications that operate without central authorities.
          </p>
        </div>
      </div>
      <div id="topic-6" class="knowledge-component">
        <h2 className="subsection">How to Get Started Trading Crypto</h2>
        <div class="knowledge-content">
          <p>
            Trading cryptocurrencies can be an exciting and potentially
            profitable endeavor. Here are some steps to help you get started:
          </p>
          <p>
            1. Educate Yourself: Before diving into crypto trading, it's crucial
            to educate yourself about the basics of cryptocurrencies, blockchain
            technology, and trading concepts. Familiarize yourself with terms
            like market orders, limit orders, stop-loss orders, and candlestick
            charts. Understanding these fundamentals will give you a solid
            foundation.
          </p>
          <p>
            2. Choose a Reliable Exchange: Selecting a reputable cryptocurrency
            exchange is essential for trading. Research and compare different
            exchanges based on factors such as security, trading fees, available
            cryptocurrencies, liquidity, and user experience. Popular exchanges
            include Binance, Coinbase, Kraken, and Bitstamp.
          </p>
          <p>
            3. Create an Account: Once you've chosen an exchange, sign up and
            create an account. You'll likely need to provide some personal
            information and complete a verification process to comply with
            regulatory requirements.
          </p>
          <p>
            4. Secure Your Account: Take measures to enhance the security of
            your exchange account. Enable two-factor authentication (2FA), use a
            strong and unique password, and consider storing your
            cryptocurrencies in a separate wallet for added security.
          </p>
          <p>
            5. Conduct Market Research: Before making any trades, spend time
            researching the cryptocurrencies you're interested in. Analyze their
            price trends, market capitalization, trading volume, team members,
            partnerships, and any recent news or developments. This research
            will help inform your trading decisions.
          </p>
          <p>
            6. Develop a Trading Strategy: A trading strategy outlines your
            approach to buying and selling cryptocurrencies. It can include
            criteria for entering and exiting trades, risk management
            techniques, and specific indicators or patterns you'll use for
            decision-making. Stick to your strategy and avoid making impulsive
            trades based on emotions.
          </p>
          <p>
            7. Start with Small Investments: When you're ready to start trading,
            consider beginning with a small amount of capital. This allows you
            to gain experience, learn from your trades, and minimize potential
            losses. As you become more comfortable and confident, you can
            gradually increase your investment amounts.
          </p>
          <p>
            8. Practice Risk Management: Cryptocurrency trading involves risks,
            and it's essential to manage them effectively. Set a maximum
            percentage of your trading capital that you're willing to risk on a
            single trade. Consider using stop-loss orders to limit potential
            losses and take-profit orders to secure profits.
          </p>
          <p>
            9. Monitor the Market: Keep a close eye on the market and stay
            updated with news and events that can impact cryptocurrency prices.
            Utilize trading tools and platforms that offer real-time price data,
            charts, and indicators to help you make informed decisions.
          </p>
          <p>
            10. Learn from Experience: As you gain experience in trading,
            reflect on your trades and learn from both your successes and
            failures. Continuous learning and adaptation are vital in the
            dynamic cryptocurrency market.
          </p>
          <p className="subsection">
            ______________Remember, trading crypto involves risks, and it's
            important to only invest what you can afford to lose. Consider
            consulting with a financial advisor before engaging in trading
            activities, especially if you're new to
            investing.________________________________
          </p>

          <img src={dApps} className="dapps"></img>
        </div>
      </div>
      <div className="imageDiv">
        <img src={defitransformed} alt="defitransformed" id="defitransformed" />
        {/* <img src={blockchainLink} alt="blockchainLink" id="blockchainLink" /> */}
      </div>
    </div>
  );
};

export default KnowledgeHardCode;
