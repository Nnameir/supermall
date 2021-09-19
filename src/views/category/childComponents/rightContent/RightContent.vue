<template>
  <div class="right-content" @click="goodsClick">
    <right-item
      v-for="item in rightContentData"
      :key="item.cat_id"
      :right-item-data="item"
    />
  </div>
</template>

<script>
/* 导入专用组件 */
import RightItem from "./RightItem.vue";

export default {
  name: "RightContent",
  props: {
    rightContentData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    RightItem,
  },
  methods: {
    goodsClick(event) {
      let catId = event.target.parentNode.getAttribute("cat-id");
      if (catId || (catId = event.target.getAttribute("cat-id"))) {
        this.$router.push({
          path: "/goodslist",
          query: {
            cid: catId,
          },
        });
      }
    },
  },
};
</script>

<style scoped>
</style>