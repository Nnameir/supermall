<template>
  <div>
    <nav-bar class="goods-list-nav-bar">
      <div slot="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center">商品列表</div>
    </nav-bar>
  </div>
</template>

<script>
/* 导入通用组件 */
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  name: "GoodsListNavBar",
  components: {
    NavBar,
  },
  methods: {
    backClick() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.goods-list-nav-bar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background-color: var(--color-tint);
  color: #fff;
}
</style>