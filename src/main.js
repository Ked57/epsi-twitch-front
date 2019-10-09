import Vue from 'vue'
import router from './router'
import App from './App.vue'
import "../node_modules/bulma/css/bulma.css"

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  render: h => h(App)
})
