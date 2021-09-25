<template>
  <div>
    <nav-bar class="goods-nav-bar">
      <div slot="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center">
        <slot name="center"></slot>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  name: "GoodsNavBar",
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
.goods-nav-bar {
  width: 100%;
  background-color: var(--color-tint);
  color: #fff;
}
</style>