<template>
  <div>
    <nav-bar class="shopcart-nav-bar">
      <div slot="center">购物车 ({{ purchaseCount }})</div>
    </nav-bar>
    <shopcart-list />
    <shopcart-bottom-bar />
  </div>
</template>

<script>
/* 导入插件 */
import { mapGetters } from "vuex";
/* 导入通用组件 */
import NavBar from "components/common/navbar/NavBar.vue";
/* 导入专用组件 */
import ShopcartList from "./childComponents/ShopcartList.vue";
import ShopcartBottomBar from "./childComponents/ShopcartBottomBar.vue";

export default {
  name: "Shopcart",
  components: {
    NavBar,
    ShopcartList,
    ShopcartBottomBar,
  },
  computed: {
    ...mapGetters(["purchaseCount"]),
  },
};
</script>

<style scoped>
.shopcart-nav-bar {
  width: 100%;
  background-color: var(--color-tint);
  color: #fff;
}
</style>