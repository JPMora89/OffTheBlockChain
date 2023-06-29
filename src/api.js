import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
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
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a coin by name. */

  static async getCoin(name) {
    let res = await this.request(`coins/${name}`);
        console.log(res.coin)

    return res.coin;

  }
  static async getAllCoins() {
    let res = await this.request('coins/');
    return res.coins;
  }

  static async getSearchedCoins(coin_name) {
    let res = await this.request(`coins/${coin_name}`, {name: coin_name});
    return res.coins;
  }

  static async addCoin(coins){
    let res = await this.request('coins/update', coins, 'post');
    return res;
  }

  // watchlist routes
  static async watchlist() {
    let res = await this.request('watchlist/');
    return res.watchlist;
  }

  static async login({username, password}) {
    let res = await this.request('auth/token', {
      username: username,
      password: password},
      "post");
    this.token = res;
    return res;
  }

  static async register(formData) {
    let res = await this.request('auth/register', formData, 'post');
    this.token = res;
    return res;
  }

  static async getUser(username) {
    let res = await this.request(`user/${username}`);
    return res.user;
  }

  static async updateUser(profileData, username) {
    let res = await this.request(`user/${username}`,
    profileData,
    'patch'
    );
    return res.user;
  }

    static async addToWatchlist(coin_name) {
        let res = await this.request(`watchlist/${coin_name}`, {}, 'post');
        return res;
    }

    static async removeFromWatchlist(coin_name) {
        let res = await this.request(`watchlist/${coin_name}`, {}, 'delete');
        return res;
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
  let res = await this.request('watchlist/', { name }, 'post');
  return res.watchlist;
};
}


export default OtbcApi;