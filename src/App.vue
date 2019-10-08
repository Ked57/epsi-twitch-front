<template>
<body>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <h1 class="navbar-item has-text-white">Twitch Statistique</h1>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item has-text-white">Home</a>
      </div>
    </div>
  </nav>
  <List></List>
  <Graph></Graph>
</body>
</template>

<script>
import List from "./components/List.vue";
import Graph from "./components/Graph.vue";

export default {
  name: "app",
  components: {
    List,
    Graph
  }
}; 
</script>

<style>
@import "~bulma/css/bulma.css";
.navbar{
  background-color: #6441a5;
}
</style>
