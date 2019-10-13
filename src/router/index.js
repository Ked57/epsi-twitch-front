import Vue from "vue";
import Router from "vue-router";
import Curve from "../components/Curve";

Vue.use(Router);

export default new Router({
  routes: [
    {
        path: "/",
        name: "Curve",
        component: Curve
      },

  ]
});