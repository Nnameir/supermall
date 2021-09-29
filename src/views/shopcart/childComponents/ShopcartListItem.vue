<template>
  <div class="shopcart-list-item">
    <div class="check-button">
      <check-button
        :is-checked="cartGoodsInfo.checked"
        @click.native="checkButtonClick"
      />
    </div>
    <div class="goods-logo">
      <img :src="cartGoodsInfo.goodsImage" alt="" />
    </div>
    <div class="goods-info">
      <p class="multi-line-overflow">{{ cartGoodsInfo.goodsName }}</p>
      <span class="goods-price">￥{{ cartGoodsInfo.goodsPrice }}</span>
      <div class="countBtn">
        <div class="decrement" @click="decrement">-</div>
        <span class="goods-count">{{ cartGoodsInfo.goodsCount }}</span>
        <div class="increment" @click="increment">+</div>
      </div>
    </div>
  </div>
</template>

<script>
/* 导入通用组件 */
import CheckButton from "components/content/checkButton/CheckButton.vue";
/* 导入 mutation 类型 */
import {
  CHECKED_TOGGLE,
  GOODS_DECREMENT,
  GOODS_INCREMENT,
} from "store/mutation-types.js";

export default {
  name: "ShopcartListItem",
  components: {
    CheckButton,
  },
  props: {
    cartGoodsInfo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    checkButtonClick() {
      this.$store.commit(CHECKED_TOGGLE, this.cartGoodsInfo.goodsId);
    },
    decrement() {
      this.$store.commit(GOODS_DECREMENT, this.cartGoodsInfo.goodsId);
    },
    increment() {
      this.$store.commit(GOODS_INCREMENT, this.cartGoodsInfo.goodsId);
    },
  },
};
</script>

<style scoped>
.shopcart-list-item {
  --check-box: 36px;
  height: 30vw;
  border-bottom: 2px solid var(--color-background-gray);
}

.shopcart-list-item > div {
  float: left;
  height: 100%;
}

.check-button {
  position: relative;
  width: var(--check-box);
  height: 100%;
}

.check-button > * {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.goods-logo {
  width: calc((100vw - var(--check-box)) / 3);
  padding: 5px;
}

.goods-logo img {
  width: 100%;
  vertical-align: middle;
}

.goods-info {
  position: relative;
  width: calc((100vw - var(--check-box)) / 3 * 2);
  height: 100%;
  padding: 16px 8px 0 12px;
}

.goods-info p {
  -webkit-line-clamp: 2;
}

.goods-price {
  position: absolute;
  left: 8px;
  bottom: 3vw;
  font-size: 18px;
  color: rgb(212, 33, 27);
}

.countBtn {
  position: absolute;
  bottom: 3vw;
  right: 8px;
}

.countBtn .decrement,
.countBtn .increment {
  display: inline-block;
  border: 1px solid #666;
  background-color: #ccc;
  width: 20px;
  height: 20px;
  text-align: center;
  color: #000;
  border-radius: 3px;
}

.countBtn .goods-count {
  display: inline-block;
  width: 24px;
  text-align: center;
}
</style>