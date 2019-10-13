<template>
  <div id="app" class="container">
    <h1 class="title is-1 has-text-centered titre">View Curve Evolution</h1>
    <canvas id="myChart"></canvas>
    <div class="control pad-top">
      <div class="container">
        <SelectDropdown
          :options="gamesList"
          :selected="selectedGames"
          @change="onChange($event)"
          label="Select"
          placeholder="games"
          class="nav-item"
        ></SelectDropdown>
      </div>
    </div>
  </div>
</template>
<script>
import Chart from "chart.js";
import { API_URL, GAMES_ROUTE, GAMES_LIST_ROUTE } from "../types";
import { fetchGames, fetchGamesList } from "../api";
import { computeGamesData } from "../compute";
import SelectDropdown from "@/components/SelectDropdown.vue";

export default {
  data() {
    return {
      games: [],
      times: [],
      gamesList: [],
      selectedGames: [],
      chart: undefined
    };
  },
  components: { SelectDropdown },
  methods: {
    getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    async createChart() {
      console.log("createChart");
      const result = await fetchGames(`${API_URL}${GAMES_ROUTE}`, {
        date: new Date().toISOString(),
        scale: "h",
        games: this.selectedGames
      });
      const { games, times } = computeGamesData(result);
      this.games = games;
      this.times = Array.from(times);
      const datasets = this.games.map(game => ({
        label: game.name,
        data: game.points,
        borderColor: this.getRandomColor(),
        fill: false
      }));
      const ctx = document.getElementById("myChart").getContext("2d");
      this.chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: this.times,
          datasets
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
    },
    onChange(changed) {
      this.createChart();
    }
  },
  async mounted() {
    const result = await fetchGamesList(`${API_URL}${GAMES_LIST_ROUTE}`);
    this.gamesList = result.map(game => game.value);
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
