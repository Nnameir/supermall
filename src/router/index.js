import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('views/home/Home.vue');
const Category = () => import('views/category/Category.vue');
const Shopcart = () => import('views/shopcart/Shopcart.vue');
const Profile = () => import('views/profile/Profile.vue');
const GoodsList = () => import('views/goodslist/GoodsList.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/category',
    component: Category
  }, {
    path: '/shopcart',
    component: Shopcart
  }, {
    path: '/profile',
    component: Profile
  }, {
    path: '/goodslist',
    component: GoodsList
  }
];

const router = new VueRouter({
  routes,
  // vue.config.js 中配置 publicPath 时只能适用于 hash 模式
  // mode: 'history'
});

export default router;
