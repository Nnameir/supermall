<template>
  <div class="detail-bottom-bar">
    <div class="buy-it">立即购买</div>
    <div class="add-to-shopcart" @click="addToShopcart">加入购物车</div>
    <div class="bar-container">
      <div>
        <i></i>
        <span>客服</span>
      </div>
      <div>
        <i></i>
        <span>店铺</span>
      </div>
      <div @click="goToShopcart">
        <img src="~assets/img/detail/cart.png" alt="" />
        <span>购物车</span>
      </div>
    </div>
  </div>
</template>

<script>
/* 导入数据类 */
import { CartGoodsInfo } from "network/detail.js";

export default {
  name: "DetailBottomBar",
  props: {
    cartGoodsInfo: {
      type: CartGoodsInfo,
      required: true,
    },
  },
  methods: {
    goToShopcart() {
      this.$router.push("/shopcart");
    },
    addToShopcart() {
      this.$store.dispatch("addToShopcart", this.cartGoodsInfo).then(() => {
        this.$toast.show("已成功加入购物车");
      });
    },
  },
};
</script>

<style scoped>
.detail-bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 49px;
  line-height: 49px;
  text-align: center;
  color: #fff;
  font-weight: 700;
}

.add-to-shopcart {
  float: right;
  width: 100px;
  background-color: rgb(255, 166, 0);
}

.buy-it {
  float: right;
  width: 80px;
  background-color: var(--color-tint);
}

.bar-container {
  --img-size: 23px;
  display: flex;
  padding-top: 5px;
  height: 100%;
  background-color: #fff;
  line-height: 1;
  color: #000;
  font-size: 15px;
  font-weight: 400;
}

.bar-container div {
  flex: 1;
}

.bar-container > div span {
  margin-top: 2px;
}

.bar-container > div i {
  display: block;
  margin: 0 auto 2px;
  width: var(--img-size);
  height: var(--img-size);
  background-image: url("~assets/img/detail/detail_bottom.png");
  background-size: 100%;
}

.bar-container div:nth-child(1) i {
  background-position: 0 -55px;
}

.bar-container div:nth-child(2) i {
  background-position: 0 -103px;
}

.bar-container div:nth-child(3) img {
  display: block;
  margin: 0 auto 2px;
  width: var(--img-size);
  height: var(--img-size);
}
</style>