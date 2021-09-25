<template>
  <div>
    <div class="title">图文详情</div>
    <div v-html="goodsInfo"></div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    goodsInfo: {
      type: String,
      default:
        "<p style='margin-top: 20px; text-align: center; font-size: 25px; font-weight: 700;'>无法找到相应图片</p>",
    },
  },
};
</script>

<style scoped>
.title {
  padding: 0 12px;
  border-top: 8px solid #eee;
  border-bottom: 8px solid #eee;
  height: 56px;
  line-height: 40px;
  font-size: 20px;
  font-weight: 700;
  color: var(--color-high-text);
}
</style>