<template>
  <div class="goods" :goods-id="goods.goods_id">
    <div>
      <img :src="goods.goods_big_logo" alt="" />
    </div>
    <div>
      <p class="multi-line-overflow">{{ goods.goods_name }}</p>
      <span>￥{{ goods.goods_price }}</span>
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
}

.goods > div:nth-child(1) {
  width: 35vw;
  padding: 8px 8px 8px 16px;
}

.goods > div:nth-child(2) {
  position: relative;
  width: 65vw;
  height: 100%;
  padding: 16px 8px 0 12px;
}

.goods-list img {
  width: 100%;
  vertical-align: middle;
}

.goods span {
  position: absolute;
  left: 8px;
  bottom: 6vw;
  font-size: 18px;
  color: rgb(212, 33, 27);
}
</style>