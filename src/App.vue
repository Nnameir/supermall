<template>
  <div id="app">
    <keep-alive :exclude="/GoodsList|Detail/">
      <router-view />
    </keep-alive>
    <main-tab-bar v-show="allowedPath.includes($route.path)" />
  </div>
</template>

<script>
/* 导入通用组件 */
import MainTabBar from "components/content/mainTabBar/MainTabBar.vue";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
  data() {
    return {
      allowedPath: ["/home", "/category", "/shopcart", "/profile"],
    };
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>