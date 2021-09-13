<template>
  <div id="app">
    <keep-alive exclude="GoodsList">
      <router-view />
    </keep-alive>
    <main-tab-bar v-if="$route.path !== '/goodslist'" />
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar.vue";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>