// import React from "react";
// import { Route, Switch, Redirect } from "react-router-dom";
// import Homepage from './Homepage';
// import Watchlist from "./watchlistComponents/watchlist";
// import CoinDetail from "./coinComponents/CoinsDetail";
// import KnowledgeComponent from "./knowledgeComponents/KnowledgeComponent";
// import KnowledgeContainer from "./knowledgeComponents/KnowledgeContainer";
// import coinTable from "./coinComponents/coinTable";
// import WatchlistContainer from "./watchlistComponents/WatchlistContainer";
// import WatchlistPage from "./watchlistComponents/WatchlistPage";
// import CoinDetailsPage from "./coinComponents/CoinDetailsPage";
// // import KnowledgePage from "./knowledgeComponents/KnowledgePage";
// // import knowledgeTopics from "./knowledgeComponents/knowledgeTopics";



// import LoginForm from './userComponents/LoginForm';

// import SignupForm from './userComponents/SignupForm';
// import HomeAnon from "./HomeAnon";
// import CoinTable from "./coinComponents/coinTable";

// function UserRoutes({ login, register, token, watchlist, coins, removeFromWatchlist, addToWatchlist, knowledgeTopics }) {
//   return (
//     <div>
//       <Switch>
//         <Route exact path="/">
//         {token ? <Homepage/> : <HomeAnon/>}
//         </Route>
//         <Route exact path="/watchlist">
//           {token ? (<WatchlistPage/>) : <Redirect to='/login'/>}
//         </Route>
//         <Route exact path="/coinDetail">
//           {token ? <CoinDetail/> : <Redirect to='/login'/>}
//         </Route>
//         <Route exact path="/knowledge">
//           {token ? <KnowledgeContainer/> : <Redirect to='/login'/>}
//         </Route>

//         <Route exact path="/coins">
//           {token ? <CoinTable/> : <Redirect to='/login'/>}
//         </Route>
//         <Route exact path="/coin/:coinId"> 
//           {token ? <CoinDetailsPage/> : <Redirect to='/login'/>} 
//         </Route>

//         <Route exact path="/login">
//           <LoginForm login={login}/>
//         </Route>

//         <Route exact path="/signup">
//           <SignupForm register={register}/>
//         </Route>
//         <Redirect to="/" />
//       </Switch>
//     </div>
//   );
// }

// export default UserRoutes;
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from './Homepage';
import Watchlist from "./watchlistComponents/watchlist";
import CoinDetail from "./coinComponents/CoinsDetail";
import KnowledgeComponent from "./knowledgeComponents/KnowledgeComponent";
import KnowledgeContainer from "./knowledgeComponents/KnowledgeContainer";
import coinTable from "./coinComponents/coinTable";
import WatchlistContainer from "./watchlistComponents/WatchlistContainer";
import WatchlistPage from "./watchlistComponents/WatchlistPage";
import CoinDetailsPage from "./coinComponents/CoinDetailsPage";
import LoginForm from './userComponents/LoginForm';
import SignupForm from './userComponents/SignupForm';
import HomeAnon from "./HomeAnon";
import CoinTable from "./coinComponents/coinTable";
import KnowledgePage from "./knowledgeComponents/knowledgePage";
import KnowledgeHardCode from "./knowledgeComponents/knowledgehardcoded";

function UserRoutes({ login, register, token, watchlist, userCoins, removeFromWatchlist, addToWatchlist, knowledgeTopics }) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          {token ? <Homepage /> : <HomeAnon />}
        </Route>
        <Route exact path="/watchlist">
          {token ? <WatchlistPage /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/coinDetail">
          {token ? <CoinDetail /> : <Redirect to="/login" />}
        </Route>
        <Route
        exact
        path="/watchlist"
        render={(props) => (
          <WatchlistPage {...props} userCoins={userCoins} />
        )}
      />
        <Route exact path="/knowledge">
          {token ? <KnowledgeHardCode/> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/knowledge/:topicId">
          {token ? <KnowledgePage knowledgeTopics={knowledgeTopics} /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/coins">
          {token ? <CoinTable /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/coin/:coinId">
          {token ? <CoinDetailsPage /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/login">
          <LoginForm login={login} />
        </Route>
        <Route exact path="/signup">
          <SignupForm register={register} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default UserRoutes;
