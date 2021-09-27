import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
// 事件总线上的事件处理函数的默认环境是 $bus
Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
