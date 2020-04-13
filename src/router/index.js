import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '@/views/Layout';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: '/home'
  },
  {
    path: "",
    component: Layout,
    hidden: true,
    children: [{
      path: '/home',
      name: "Home",
      component: () => import("../views/Home/index"),
      meta: {
        title: "首页"
      }
    }]
  },
  {
    path: "",
    component: Layout,
    hidden: true,
    children: [{
      path: "/classify",
      name: "Group",
      component: () => import("../views/Classify"),
      meta: {
        title: "分类"
      }
    }]
  }
];

const router = new VueRouter({
  routes
});

export default router;
