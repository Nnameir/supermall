<template>
  <div class="shopping">
    <profile-item path="/shopcart">
      <img slot="icon" src="~assets/img/profile/cart.svg" alt="" />
      <span slot="description">我的购物车</span>
    </profile-item>
    <profile-item :hasBorder="false">
      <img slot="icon" src="~assets/img/profile/shopping.svg" alt="" />
      <span slot="description">下载购物APP</span>
    </profile-item>
  </div>
</template>

<script>
/* 导入专用组件 */
import ProfileItem from "./ProfileItem.vue";

export default {
  name: "Shopping",
  components: {
    ProfileItem,
  },
  methods: {
    goToShopcart() {
      this.$router.push("/shopcart");
    },
  },
};
</script>

<style scoped>
.shopping {
  padding-top: 10px;
  background-color: #eee;
}
</style>