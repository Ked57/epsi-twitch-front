<template>
<div class="container is-centered app">
  <br>
  <h1 class="title is-text-centered ">Liste des jeux</h1>
  <table class="table is-bordered is-striped is-truncated">
		<thead>
			<tr>
				<th>Nom du jeu</th>
        <th>Nombre de vues</th>
        <th>Bonus</th>
			</tr>
		</thead>
		<tbody  v-for="game in games" :key="game.id" >
      <tr>
				<td>{{ game.name }}</td>
				<td>{{ game.username }}</td>
        <td>wow</td>
			</tr>	
		</tbody>
	</table>
  </div>
</template>

<script>
export default{
  data(){
    return{
      games:[]
    }
  },
  methods: {
    getGames() {
      const axios = require('axios');
      axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.games = response.data
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  created: function (){
    this.getGames()
  } 
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
