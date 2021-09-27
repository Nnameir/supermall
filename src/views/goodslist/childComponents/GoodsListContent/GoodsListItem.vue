<template>
  <div class="goods" :goods-id="goods.goods_id">
    <div class="goods-logo">
      <img :src="goods.goods_small_logo" alt="" />
    </div>
    <div class="goods-info">
      <p class="multi-line-overflow">{{ goods.goods_name }}</p>
      <span class="goods-price">￥{{ goods.goods_price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.goods {
  height: 35vw;
  border-bottom: 2px solid var(--color-background-gray);
}

.goods:hover {
  background-color: #ddd;
}

.goods > div {
  float: left;
  height: 100%;
}

.goods-logo {
  width: 35vw;
  padding: 8px 8px 8px 16px;
}

.goods-logo img {
  width: 100%;
  vertical-align: middle;
}

.goods-info {
  position: relative;
  width: 65vw;
  height: 100%;
  padding: 16px 8px 0 12px;
}

.goods-price {
  position: absolute;
  left: 8px;
  bottom: 3vw;
  font-size: 18px;
  color: rgb(212, 33, 27);
}
</style>