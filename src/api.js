import axios from "axios";


const REACT_APP_BASE_URL = "https://otbc-backend.onrender.com"
const BASE_URL = REACT_APP_BASE_URL || "http://localhost:3001";
// const BASE_URL =  "http://localhost:3001";


/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 
 */

class OtbcApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${OtbcApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

static setupInterceptors() {
    axios.interceptors.request.use(
      (config) => {
        if (OtbcApi.token) {
          config.headers["Authorization"] = `Bearer ${OtbcApi.token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }



  
  // Individual API routes
  static async login({ username, password }) {
    let res = await this.request(
      "auth/token",
      {
        username: username,
        password: password,
      },
      "post"
    );
    this.token = res.token;
    return res;
  }

  static async register(formData) {
    let res = await this.request("auth/register", formData, "post");
    this.token = res.token;
    return res;
  }
  // Adding coins to coinlist section

  static async addAllCoinstoDB() {
    let res = await this.request("coins/");

    console.log(res);
    return res;
  }

  static async addAllCoins(coins) {
    let res = await this.request("coins/", coins, "post");

    console.log(res);
    return res;
  }

  /** Get details on a coin by name. */

  // Get coin by ID
  static async getCoin(CoinId) {
    let res = await this.request(`coins/${CoinId}`);
    console.log(res.coin);

    return res.coin;
  }

  // Get coin by name or symbol
  static async getCoinByNameOrSymbol(coinNameOrSymbol) {
    console.log("This function has been called: getCoinByNameOrSymbol");
    let res = await this.request(`coins/name-or-symbol/${coinNameOrSymbol}`);
    // console.log(res.coin)

    return res.coin;
  }

  // Get coin by name
  static async getCoinByName(coinName) {
    let res = await this.request(`coins/name/${coinName}`);
    console.log(res.coin);
    return res.coin;
  }

  // Get top 25 coins
  static async getAllCoins() {
    let res = await this.request("coins/all");
    return res.coins;
  }

  static async getSearchedCoins(coin_name) {
    let res = await this.request(`coins/${coin_name}`, { name: coin_name });
    return res.coins;
  }

  static async addCoin(coin, watchlistId) {
    let res = await this.request("coins/update", coin, "post");

    if (res.message === "Coin added to watchlist") {
      await this.addToWatchlist(coin.coinId, watchlistId);
    }

    return res;
  }

  // watchlist routes
  static async watchlist() {
    let res = await this.request("watchlist/");
    return res.watchlist;
  }

  static async getUser(username) {
    let res = await this.request(`user/${username}`);
    return res.user;
  }

  static async updateUser(profileData, username) {
    let res = await this.request(`user/${username}`, profileData, "patch");
    return res.user;
  }

  static async addToWatchlist(coinId, watchlistId) {
    let res = await this.request(
      `watchlist/${watchlistId}/${coinId}`,
      {},
      "post"
    );
    console.log(res);
    return res;
  }

  static async removeFromWatchlist(coinName, watchlistId) {
    try {
      const coin = await this.getCoinByName(coinName);
      console.log(coin);
      console.log("This function has been called: removeFromWatchlist");

      if (!coin) {
        throw new Error(`Coin not found: ${coinName}`);
      }

      const { id: coinId } = coin;
      console.log(coinId);
      console.log("This function has been called: removeFromWatchlist");

      const res = await this.request(
        `watchlist/${watchlistId}/${coinId}`,
        {},
        "delete"
      );
      console.log("This function has been called: removeFromWatchlist");

      if (!res || !res.message) {
        throw new Error(
          `Unexpected response from the backend API: ${JSON.stringify(res)}`
        );
      }

      return res;
    } catch (error) {
      console.error("Error removing coin from watchlist:", error);
      throw error;
    }
  }

  static async getWatchlist() {
    let res = await this.request(`watchlist/`);
    return res.watchlist;
  }

  static async getWatchlistCoin(coin_name) {
    let res = await this.request(`watchlist/${coin_name}`);
    return res.coin;
  }
  // ...

  static async createWatchlist(name) {
    let res = await this.request("watchlist/", { name }, "post");
    return res.watchlist;
  }

  // watchlist routes
  static async getAllWatchlists() {
    let res = await this.request("watchlist/");
    return res.watchlists;
  }

  static async getWatchlistItems(watchlistId) {
    let res = await this.request(`watchlist/${watchlistId}/items`);
    return res.watchlistItems;
  }

  // Retrieve watchlists from the backend and ensure they are available
  // every time the page reloads
  static async getWatchlists() {
    let watchlists;
    try {
      watchlists = await this.getAllWatchlists();
    } catch (error) {
      console.error("Error retrieving watchlists:", error);
      watchlists = [];
    }
    return watchlists;
  }

  static async updateWatchlist(watchlistId, updatedWatchlist) {
    let res = await this.request(
      `watchlist/${watchlistId}`,
      updatedWatchlist,
      "patch"
    );
    return res.watchlist;
  }

  static async deleteWatchlist(watchlistId) {
    let res = await this.request(`watchlist/${watchlistId}`, {}, "delete");
    console.log(res);

    return res;
  }

  // News API call to the backend to avoid CORS issue
  static async getCoinNews(coinSymbol) {
    try {
      const response = await axios.get(`${BASE_URL}/coins/news/${coinSymbol}`);
      return response.data.news;
    } catch (error) {
      console.error("Error fetching coin news:", error);
      throw error;
    }
  }

}

export default OtbcApi;
