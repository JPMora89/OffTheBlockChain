import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from './Homepage';
import Watchlist from "./watchlistComponents/watchlist";
import CoinDetail from "./coinComponents/CoinsDetail";
import KnowledgeComponent from "./knowledgeComponents/KnowledgeComponent";
import KnowledgeContainer from "./knowledgeComponents/KnowledgeContainer";
import coinTable from "./coinComponents/coinTable";



import LoginForm from './userComponents/LoginForm';

import SignupForm from './userComponents/SignupForm';
import HomeAnon from "./HomeAnon";
import CoinTable from "./coinComponents/coinTable";

function UserRoutes({ login, register, token, watchlist, coins, removeFromWatchlist, addToWatchlist }) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
        {token ? <Homepage/> : <HomeAnon/>}
        </Route>
        <Route exact path="/watchlist">
          {token ? (<Watchlist watchlist={watchlist} coins={coins} removeFromWatchlist={removeFromWatchlist} addToWatchlist={addToWatchlist}/>) : <Redirect to='/login'/>}
        </Route>
        <Route exact path="/coinDetail">
          {token ? <CoinDetail/> : <Redirect to='/login'/>}
        </Route>
        <Route exact path="/knowledge">
          {token ? <KnowledgeContainer/> : <Redirect to='/login'/>}
        </Route>
        <Route exact path="/coins">
          {token ? <CoinTable/> : <Redirect to='/login'/>}
        </Route>

        <Route exact path="/login">
          <LoginForm login={login}/>
        </Route>

        <Route exact path="/signup">
          <SignupForm register={register}/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default UserRoutes;