import React, { createContext, useState } from 'react';

// Create the context
export const UserCoinsContext = createContext();

// Create a provider component for the context
export const UserCoinsProvider = ({ children }) => {
  const [userCoins, setUserCoins] = useState([]);

  return (
    <UserCoinsContext.Provider value={{ userCoins, setUserCoins }}>
      {children}
    </UserCoinsContext.Provider>
  );
};
