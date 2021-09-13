<template>
  <div class="goods-list">
    <goods-list-item
      v-for="goods in goodsList"
      :key="goods.goods_id"
      :goods="goods"
    />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";

export default {
  name: "GoodsListContent",
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodsListItem,
  },
};
</script>

<style scoped>
.goods-list {
  color: #000;
}
</style>