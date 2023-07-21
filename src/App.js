

import React, {useState, useEffect, createContext} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import './App.css';
import Routes from './Routes';
import NavBar from './navbar';
import OtbcApi from './api';
import useLocalStorage from './useLocalStorage';
import userContext from './userComponents/userContext';
import Homepage from './Homepage';
import CreateWatchlist from './watchlistComponents/CreateWatchlist';
import WatchlistContainer from './watchlistComponents/WatchlistContainer';
import { UserCoinsProvider } from './userCoinContext';
import KnowledgeContainer from './knowledgeComponents/KnowledgeContainer';



function App() {
  const INITIAL_STATE = '';
  const USER_INIT_STATE = {};
  const [currentUser, setCurrentUser] = useState(INITIAL_STATE);
  const [userInfo, setUserInfo] = useState(USER_INIT_STATE);
  const [currentToken, setCurrentToken] = useLocalStorage('token');
  const [isLoading, setIsLoading] = useState(true);
  const [watchlist, setWatchlist] = useState([]);
  const [coins, setCoins] = useState([]);
  const [watchlists, setWatchlists] = useState([]);
  const [knowledgeTopics, setKnowledgeTopics] = useState([]);
  const [userCoins, setUserCoins] = useState([]);
  

const login = async (loginFormData) => {
    try {
      const res = await OtbcApi.login(loginFormData);
      console.log(res)
      setCurrentToken(res.token);
      console.log("login success")
    } catch (e) {
      alert(e);
      console.error("Problem in login", e)
    }
  }

  const register = async (signupFormData) => {
    const res = await OtbcApi.register(signupFormData);
    setCurrentToken(res.token);
  }

  const logout = async () => {
    setCurrentToken(null);
    setCurrentUser(INITIAL_STATE);
    setUserInfo(USER_INIT_STATE);
    alert("User logged out");
  }

  useEffect(() => {
    // get user info each time there is a login
    const getUserInfo = async (username) => {
      OtbcApi.token = currentToken;
      const res = await OtbcApi.getUser(username);
      setUserInfo(res);
      console.log(res)
      console.log(username)
    }

    // check if there is a token
    const token_check = localStorage.getItem('token');
    if (token_check) {
      const {username} = jwt.decode(token_check);
      setCurrentUser(username);
      getUserInfo(username);
    }
    setIsLoading(false);
  }, [currentToken]);

  if (isLoading) {
    return (<div>LOADING</div>);
  }


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
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={{userInfo, currentUser}}>
          
          <NavBar 
            currentUser={currentUser} 
            logout={logout}
          />
          
          {/* <Route exact path="/" component={Homepage} /> 
            <Route exact path="/watchlist" component={WatchlistContainer} /> 
            <Route exact path="/watchlist/create" component={CreateWatchlist} />
            <Route exact path="/knowledge" component={KnowledgeContainer} />  */}
          <Routes 
            login={login} 
            register={register}
            token={currentToken}
            watchlists={watchlists}
            userCoins={userCoins}
            knowledgeTopics={knowledgeTopics}
      

          />


        </userContext.Provider>
      </BrowserRouter>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Off the Blockchain. All rights reserved. JPMORA.DEV</p>
      </footer>
    </div>
    </UserCoinsProvider>
    
  );
}

export default App;

