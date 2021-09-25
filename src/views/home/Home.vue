<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物广场</div>
    </nav-bar>
    <scroll ref="scroll" class="home-content">
      <home-swiper @swiper-loaded="swiperLoaded" />
      <cate-nav />
      <floor />
    </scroll>
  </div>
</template>

<script>
/* 导入通用组件 */
import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";
/* 导入专用组件 */
import HomeSwiper from "./childComponents/HomeSwiper.vue";
import CateNav from "./childComponents/CateNav.vue";
import Floor from "./childComponents/floor/Floor.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Scroll,
    HomeSwiper,
    CateNav,
    Floor,
  },
  methods: {
    swiperLoaded() {
      this.$refs.scroll.refresh();
    },
  },
};
</script>

<style scoped>
#home {
  background-color: var(--color-background-gray);
}

.home-nav-bar {
  width: 100%;
  background-color: var(--color-tint);
  color: #fff;
}

.home-content {
  height: calc(100vh - 44px - 49px);
}
</style>