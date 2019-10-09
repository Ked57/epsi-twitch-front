<template>
  <div id="app" class="container">
    <h1 class="title is-1 has-text-centered titre">Games View Number (Today)</h1>
    <canvas id="myChart" :labels="labels" :values="votes"></canvas>
    <div class="control pad-top pad-left-right ">
        <div class="select" v-for="n in numberDropdown" v-bind:key="n">
            <select>
                <option>Select dropdown</option>
                <option>With options</option>
            </select>
        </div>
        <a class="button is-primary" @click="addDropdown">+</a>
        <button class="button is-primary">Submit</button>
    </div>
  </div>
</template>
<script>
import Chart from 'chart.js'
export default {
 
  data(){
    return{
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        votes: [12, 19, 3, 5, 2, 15],
        numberDropdown: 1
    }
  },
    methods:{
        addDropdown: function() {
           this.numberDropdown += 1 
        }
    },
     mounted: function() {
        var ctx = document.getElementById('myChart').getContext('2d')
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: this.labels,
                datasets: [
                    {
                        label: "Nombre de vues",
                        data: [12, 19, 3, 5, 2, 15],
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.6)",
                            "rgba(54, 162, 235, 0.6)",
                            "rgba(255, 206, 86, 0.6)",
                            "rgba(75, 192, 192, 0.6)",
                            "rgba(153, 102, 255, 0.6)",
                            "rgba(255, 159, 64, 0.6)"
                        ],
                        borderColor: [
                            "rgba(255,99,132,1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)"
                        ],
                        borderWidth: 1
                    }
                ]
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
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titre{
  padding-top: 25px;
  padding-bottom: 10px;
}
.pad-top{
  padding-top: 20px;
}
</style>
