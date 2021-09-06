<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物广场</div>
    </nav-bar>
    <home-swiper class="home-swiper"></home-swiper>
    <cate-nav></cate-nav>
    <floor class="home-floor"></floor>
  </div>
</template>

<script>
/* 导入主页组件 */
import HomeSwiper from "./childComponents/HomeSwiper.vue";
import CateNav from "./childComponents/CateNav.vue";
import Floor from "./childComponents/floor/Floor.vue";
/* 导入通用组件 */
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    CateNav,
    Floor,
    NavBar,
  },
};
</script>

<style scoped>
.home-nav-bar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background-color: var(--color-tint);
  color: #fff;
}

.home-swiper {
  margin-top: 44px;
}

.home-floor {
  margin-bottom: 49px;
}
</style>