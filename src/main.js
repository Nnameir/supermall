import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Toast from "components/common/toast";

Vue.config.productionTip = false;
// 事件总线上的事件处理函数的默认环境是 $bus
Vue.prototype.$bus = new Vue();
// 安装 Toast 插件
Vue.use(Toast);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
