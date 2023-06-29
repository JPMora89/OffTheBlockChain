

import React, {useState, useEffect, createContext} from 'react';
import { BrowserRouter } from 'react-router-dom';
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
  

const login = async (loginFormData) => {
    try {
      const res = await OtbcApi.login(loginFormData);
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

  // const addToWatchlist = (coinId) => {
  //   // Add the coinId to the watchlist state
  //   console.log(coinId)
  //   const updatedWatchlist = [...watchlist, coinId];
  //   const res = OtbcApi.getCoins(coinId);
  //   console.log(res)
  //   if(res.has(res.coinId)){
  //     return;
  //   } else {
  //   setWatchlist([...watchlist, coinId]);}
  // };

  // const removeFromWatchlist = (coinId) => {
  //   // Remove the coinId from the watchlist state
  //   const updatedWatchlist = watchlist.filter((id) => id !== coinId);
  //   setWatchlist(updatedWatchlist);
    
  // };


  return (
    <UserCoinsProvider>
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={{userInfo, currentUser}}>
          
          <NavBar 
            currentUser={currentUser} 
            logout={logout}
          />

          <Routes 
            login={login} 
            register={register}
            token={currentToken}
            watchlist={watchlist}
            coins={coins}
      

          />
          {/* <Homepage /> */}
          {/* <CreateWatchlist onCreateWatchlist={createWatchlist} />
      <WatchlistContainer watchlists={watchlists} /> */}

        </userContext.Provider>
      </BrowserRouter>
    </div>
    </UserCoinsProvider>
  );
}

export default App;