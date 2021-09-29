import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('views/home/Home.vue');
const Category = () => import('views/category/Category.vue');
const Shopcart = () => import('views/shopcart/Shopcart.vue');
const Profile = () => import('views/profile/Profile.vue');
const GoodsList = () => import('views/goodslist/GoodsList.vue');
const Detail = () => import('views/detail/Detail.vue');

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
  }, {
    path: '/detail',
    component: Detail
  }
];

const router = new VueRouter({
  routes,
  // vue.config.js 中配置 publicPath 时只能适用于 hash 模式
  // mode: 'history'
});

router.beforeEach((to, from, next) => {
  // 清除 toast 当前状态
  Vue.prototype.$toast.clearToast();
  next();
});

export default router;
