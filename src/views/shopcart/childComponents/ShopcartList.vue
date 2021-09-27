<template>
  <div>
    <shopcart-list-item
      v-for="goods in purchases"
      :key="goods.goodsId"
      :cart-goods-info="goods"
    />
  </div>
</template>

<script>
/* 导入插件 */
import { mapGetters } from "vuex";
/* 导入专用组件 */
import ShopcartListItem from "./ShopcartListItem.vue";

export default {
  name: "ShopcartList",
  components: {
    ShopcartListItem,
  },
  computed: {
    ...mapGetters(["purchases"]),
  },
};
</script>

<style scoped>
</style>