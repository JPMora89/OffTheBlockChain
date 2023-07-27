import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import jwt from "jsonwebtoken";
import "./App.css";
import Routes from "./Routes";
import NavBar from "./navbar";
import OtbcApi from "./api";
import useLocalStorage from "./useLocalStorage";
import userContext from "./userComponents/userContext";

import { UserCoinsProvider } from "./userCoinContext";
import KnowledgeContainer from "./knowledgeComponents/KnowledgeContainer";
import {
  WatchlistContext,
  WatchlistProvider,
} from "./watchlistComponents/WatchlistContext";

function App() {
  const INITIAL_STATE = "";
  const USER_INIT_STATE = {};
  const [currentUser, setCurrentUser] = useState(INITIAL_STATE);
  const [userInfo, setUserInfo] = useState(USER_INIT_STATE);
  const [currentToken, setCurrentToken] = useLocalStorage("token");
  const [isLoading, setIsLoading] = useState(true);
  const [watchlists, setWatchlists] = useState([]);
  const [userCoins, setUserCoins] = useState([]);

  const login = async (loginFormData) => {
    try {
      const res = await OtbcApi.login(loginFormData);
      setCurrentToken(res.token);
    } catch (e) {
      alert(e);
      console.error("Problem in login", e);
    }
  };

  const register = async (signupFormData) => {
    const res = await OtbcApi.register(signupFormData);
    setCurrentToken(res.token);
  };

  const logout = async () => {
    setCurrentToken(null);
    setCurrentUser(INITIAL_STATE);
    setUserInfo(USER_INIT_STATE);
    alert("User logged out");
  };

  useEffect(() => {
    const getUserInfo = async (username) => {
      OtbcApi.token = currentToken;
      const res = await OtbcApi.getUser(username);
      setUserInfo(res);
    };

    const token_check = localStorage.getItem("token");
    if (token_check) {
      const { username } = jwt.decode(token_check);
      setCurrentUser(username);
      getUserInfo(username);
    }
    setIsLoading(false);
  }, [currentToken]);

  const fetchAllWatchlists = async () => {
    try {
      const watchlists = await OtbcApi.getAllWatchlists();
      setWatchlists(watchlists);
      const userCoins = await OtbcApi.getAllCoins();
      setUserCoins(userCoins);
    } catch (error) {
      console.error("Error fetching watchlists:", error);
    }
  };

  return (
    <UserCoinsProvider>
      <WatchlistProvider>
        <div className="App">
          <BrowserRouter>
            <userContext.Provider value={{ userInfo, currentUser }}>
              <NavBar currentUser={currentUser} logout={logout} />
              <Routes
                login={login}
                register={register}
                token={currentToken}
                watchlists={watchlists}
                userCoins={userCoins}
              />
            </userContext.Provider>
          </BrowserRouter>
          <footer className="footer">
            <p>
              © {new Date().getFullYear()} Off the Blockchain. All rights
              reserved. JPMORA.DEV
            </p>
          </footer>
        </div>
      </WatchlistProvider>
    </UserCoinsProvider>
  );
}

export default App;
