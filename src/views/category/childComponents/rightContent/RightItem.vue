<template>
  <div class="right-item">
    <div class="goods-title">{{ rightItemData.cat_name }}</div>
    <div class="goods-container">
      <div v-for="item in rightItemData.children" :key="item.cat_id">
        <img :src="item.cat_icon" alt="" />
        <div>
          {{ item.cat_name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightItem",
  props: {
    rightItemData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.goods-title {
  height: 44px;
  line-height: 44px;
  text-align: center;
}

.goods-title::before,
.goods-title::after {
  content: "/";
  margin: 0 10px;
  color: #ccc;
}

.goods-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 12px 12px;
  padding: 0 12px;
  margin-bottom: 12px;
  text-align: center;
}

.goods-container img {
  width: 100%;
}
</style>