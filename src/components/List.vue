<template>
<div class="container">
  <section class="section">
  <h1 class="title has-text-centered ">Game List</h1>
  <table class="table is-bordered is-striped is-truncated ">
		<thead>
			<tr>
				<th>Game Name</th>
        <th>View Number</th>
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
  </section>
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
