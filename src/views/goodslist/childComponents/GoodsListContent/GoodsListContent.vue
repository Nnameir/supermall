<template>
  <div class="goods-list" @click="goodsClick">
    <goods-list-item
      v-for="goods in goodsList"
      :key="goods.goods_id"
      :goods="goods"
    />
  </div>
</template>

<script>
/* 导入专用组件 */
import GoodsListItem from "./GoodsListItem.vue";

export default {
  name: "GoodsListContent",
  components: {
    GoodsListItem,
  },
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    goodsClick(event) {
      const targetGoods = event.target.closest("[goods-id]");
      const goodsId = targetGoods.getAttribute("goods-id");
      this.$router.push({
        path: "/detail",
        query: {
          goodsId,
        },
      });
    },
  },
};
</script>

<style scoped>
.goods-list {
  color: #000;
}
</style>