import Toast from "./Toast.vue";

const toastPlugin = {};

toastPlugin.install = function (Vue) {
  // 1. 生成组件构造器
  const ToastConstructor = Vue.extend(Toast);
  // 2. 创建实例
  const toastInstance = new ToastConstructor();
  // 3. 将实例挂载到 dom 上
  toastInstance.$mount(document.createElement('div'));
  // 4. 将 dom 插入文档中
  document.body.appendChild(toastInstance.$el);
  // 5. 将插件添加到 Vue 原型上
  Vue.prototype.$toast = toastInstance;
};

export default toastPlugin;
