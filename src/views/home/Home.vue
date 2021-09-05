<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物广场</div>
    </nav-bar>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "./childComponents/HomeSwiper.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>