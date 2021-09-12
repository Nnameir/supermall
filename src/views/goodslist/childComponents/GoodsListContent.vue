<template>
  <div class="goods-list">
    <div v-for="item in goods" :key="item.goods_id" class="goods">
      <div>
        <img :src="item.goods_big_logo" alt="" />
      </div>
      <div>
        <p>{{ item.goods_name }}</p>
        <span>￥{{ item.goods_price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListContent",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.goods-list {
  margin-top: 84px;
  color: #000;
}

.goods {
  height: 35vw;
  border-bottom: 2px solid var(--color-background-gray);
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

.goods-list p {
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.goods span {
  position: absolute;
  left: 8px;
  bottom: 6vw;
  font-size: 18px;
  color: rgb(212, 33, 27);
}
</style>