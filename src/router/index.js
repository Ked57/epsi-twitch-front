import Vue from "vue";
import Router from "vue-router";
import Graph from "../components/Graph";
import Curve from "../components/Curve";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Graph",
      component: Graph
    },
    {
        path: "/curve",
        name: "Curve",
        component: Curve
      },

  ]
});