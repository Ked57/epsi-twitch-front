<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <h1 class="navbar-item">Twitch Statistics</h1>
    </div>

    <div class="navbar-start">
      <router-link class="navbar-item" to="/">Curve Chart</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background-color: #6441a5;
}
.navbar-item {
  color: white;
}
a.navbar-item:hover {
  color: black;
}
</style>
