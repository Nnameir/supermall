<template>
  <div>
    <goods-nav-bar>
      <div slot="center">商品列表</div>
    </goods-nav-bar>
  </div>
</template>

<script>
/* 导入通用组件 */
import GoodsNavBar from "components/content/goodsNavBar/GoodsNavBar.vue";

export default {
  name: "GoodsListNavBar",
  components: {
    GoodsNavBar,
  },
};
</script>

<style scoped>
</style>