<template>
  <div class="empty-shopcart">
    <img class="message-image" src="~assets/img/cart/empty.gif" alt="" />
    <div class="message-box">购物车空空如也~~~</div>
    <div class="go-shopping" @click="goShoppingClick">马上去购物</div>
  </div>
</template>

<script>
export default {
  name: "EmptyShopcart",
  methods: {
    goShoppingClick() {
      this.$router.push("/category");
    },
  },
};
</script>

<style scoped>
.empty-shopcart {
  text-align: center;
}

.message-image {
  width: 75vw;
}

.message-box {
  margin: 20px 0;
}

.go-shopping {
  display: inline-block;
  width: 150px;
  height: 40px;
  line-height: 40px;
  background-color: rgb(255, 102, 0);
  color: #fff;
  border-radius: 20px;
}
</style>