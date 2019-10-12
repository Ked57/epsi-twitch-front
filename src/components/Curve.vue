<template>
  <div id="app" class="container">
    <h1 class="title is-1 has-text-centered titre">View Curve Evolution</h1>
    <canvas id="myChart"></canvas>
    <div class="control pad-top">
      <div class="container">
  <label class="label">numbers</label>
  <p class="control">
    <select multiple  name="games" v-model="selectedGames" options="games">
    </select>
  </p>
</div>
      <button class="button is-primary" @click="createChart">Submit</button>
    </div>
  </div>
</template>
<script>
import Chart from "chart.js";
import { API_URL, GAMES_ROUTE, GAMES_LIST_ROUTE } from "../types";
import { fetchGames, fetchGamesList } from "../api";
import { computeGamesData } from "../compute";

export default {
  data() {
    return {
      games: [],
      times: [],
      gamesList: [],
      selectedGames: []
    };
  },
  methods: {
    async createChart() {
      const result = await fetchGames(`${API_URL}${GAMES_ROUTE}`, {
        date: "2019-10-10T09:33:00.000Z",
        scale: "h",
        games: "Overwatch"
      });
      const { games, times } = computeGamesData(result);
      this.games = games;
      this.times = Array.from(times);
      const datasets = this.games.map(game => ({
        label: game.name,
        data: game.points
      }));
      const ctx = document.getElementById("myChart").getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: this.times,
          datasets,
          backgroundColor: ["rgba(255, 99, 132, 0.6)"],
          borderColor: ["rgba(255,99,132,1)"],
          borderWidth: 1
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
    }
  },
  async mounted() {
      const result = await fetchGamesList(`${API_URL}${GAMES_LIST_ROUTE}`)
      this.gamesList = result.map(game => game.value)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titre {
  padding-top: 25px;
  padding-bottom: 10px;
}
.pad-top {
  padding-top: 20px;
}
.pad-left-right {
  padding-left: 25px;
  padding-right: 25px;
}
</style>
