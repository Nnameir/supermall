<template>
  <div>
    <goods-nav-bar>
      <div slot="center">商品详情</div>
    </goods-nav-bar>
  </div>
</template>

<script>
/* 导入通用组件 */
import GoodsNavBar from "components/content/goodsNavBar/GoodsNavBar.vue";

export default {
  name: "DetailNavBar",
  components: {
    GoodsNavBar,
  },
};
</script>

<style scoped>
</style>