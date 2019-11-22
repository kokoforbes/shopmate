import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/products/:id",
    name: "product",
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/product.vue")
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import(/* webpackChunkName: "cart" */ "../views/cart.vue")
  },
  {
    path: "/:category/",
    name: "category",
    component: () =>
      import(/* webpackChunkName: "category" */ "../views/category.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
