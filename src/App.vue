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
        data-target="navbarMenu"
        @click="show"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarMenu" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item has-text-white" to="/">Graph</router-link>
        <router-link class="navbar-item has-text-white" to="/table">Table</router-link>
      </div>
    </div>
  </nav>
  <aside class="menu" v-show="hidden">
  <p class="menu-label">
    General
  </p>
  <ul class="menu-list">
    <li><router-link to="/">Graph</router-link></li>
    <li><router-link to="/table">Table</router-link></li>
  </ul>
</aside>
  <router-view></router-view>
</body>
</template>

<script>

export default {
  name: "app",
  components: {

  },
  data(){
    return{
      hidden: false
    }
  },
  methods: {
    show: function() {
      if(this.hidden){
        this.hidden =false
      }else{
        this.hidden =true
      }  
    }
  }
}; 
</script>

<style>
@import "~bulma/css/bulma.css";
.navbar{
  background-color: #6441a5;
}
</style>
