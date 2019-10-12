// import Vue from "vue";
// import Vuex from "vuex";
// import { fetchGamesList, fetchGames } from "./api";
// import {
//   SET_GAMES_LIST_MUTATION,
//   SET_GAMES_MUTATION,
//   API_URL,
//   GAMES_LIST_ROUTE,
//   GAMES_ROUTE,
//   FETCH_GAMES_LIST_ACTION,
//   FETCH_GAMES_ACTION
// } from "./types";
// import { computeGamesData } from "./compute";

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     gamesList: [],
//     games: []
//   },
//   mutations: {
//     [SET_GAMES_LIST_MUTATION]: (state, gamesList) => {
//       state.gamesList = gamesList;
//     },
//     [SET_GAMES_MUTATION]: (state, games) => {
//       state.games = games;
//     }
//   },
//   actions: {
//     [FETCH_GAMES_LIST_ACTION]: async ({ commit }) => {
//       const result = await fetchGamesList(`${API_URL}${GAMES_LIST_ROUTE}`);
//       commit(SET_GAMES_LIST_MUTATION, result);
//     },
//     [FETCH_GAMES_ACTION]: ({ commit }, { date, scale, games }) => {
//     }
//   }
// });
