<template>
  <div class="detail-base-info clear-fix">
    <span class="goods-price">￥ {{ goodsBaseInfo.goodsPrice }}</span>
    <div class="collect">
      <img src="~assets/img/common/collect.svg" alt="" />
      收藏
    </div>
    <p class="goods-base-info multi-line-overflow">
      {{ goodsBaseInfo.goodsName }}
    </p>
  </div>
</template>

<script>
/* 导入数据类 */
import { GoodsBaseInfo } from "network/detail.js";

export default {
  name: "DetailBaseInfo",
  props: {
    goodsBaseInfo: {
      type: GoodsBaseInfo,
      required: true,
    },
  },
};
</script>

<style scoped>
.detail-base-info {
  padding: 8px 5px 8px 10px;
}

.collect {
  float: right;
  width: 80px;
  border-left: 2px solid #bbb;
  text-align: center;
}

.collect img {
  display: block;
  margin: 0 auto 5px;
  width: 25px;
}

.goods-price {
  display: block;
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 700;
  color: rgb(212, 33, 27);
}

.goods-base-info {
  overflow: hidden;
  padding: 0 5px 0 0;
  font-size: 17px;
  line-height: 1.4;
  -webkit-line-clamp: 2;
}
</style>