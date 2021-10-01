<template>
  <div>
    <nav-bar class="shopcart-nav-bar">
      <div slot="center">购物车 ({{ purchaseCount }})</div>
    </nav-bar>
    <div v-if="isEmpty" class="empty-box">
      <empty-shopcart class="empty-shopcart" />
    </div>
    <scroll v-else class="shopcart-content">
      <shopcart-list />
    </scroll>
    <shopcart-bottom-bar />
  </div>
</template>

<script>
/* 导入插件 */
import { mapGetters } from "vuex";
/* 导入通用组件 */
import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";
/* 导入专用组件 */
import ShopcartList from "./childComponents/ShopcartList.vue";
import EmptyShopcart from "./childComponents/EmptyShopcart.vue";
import ShopcartBottomBar from "./childComponents/ShopcartBottomBar.vue";

export default {
  name: "Shopcart",
  components: {
    NavBar,
    Scroll,
    ShopcartList,
    EmptyShopcart,
    ShopcartBottomBar,
  },
  computed: {
    ...mapGetters(["purchaseCount"]),
    isEmpty() {
      return this.purchaseCount === 0;
    },
  },
};
</script>

<style scoped>
.shopcart-nav-bar {
  width: 100%;
  background-color: var(--color-tint);
  color: #fff;
}

.shopcart-content {
  height: calc(100vh - 44px - 45px - 49px);
}

.empty-box {
  position: relative;
  height: calc(100vh - 44px - 45px - 49px);
}

.empty-box .empty-shopcart {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>