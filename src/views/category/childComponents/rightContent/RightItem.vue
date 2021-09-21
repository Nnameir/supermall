<template>
  <div class="right-item">
    <div class="goods-title">{{ rightItemData.cat_name }}</div>
    <div class="goods-container">
      <div
        v-for="item in rightItemData.children || { rightItemData }"
        :key="item.cat_id"
        :cat-id="item.cat_id"
      >
        <img :src="item.cat_icon" alt="" />
        <div>{{ item.cat_name }}</div>
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
  --grid-gap: 3vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: var(--grid-gap);
  padding: 0 var(--grid-gap) 12px;
  text-align: center;
  font-size: var(--font-size);
}

.goods-container img {
  width: 100%;
  height: calc((75vw - 4 * var(--grid-gap)) / 3);
}

.goods-container div div {
  margin-top: 5px;
}
</style>