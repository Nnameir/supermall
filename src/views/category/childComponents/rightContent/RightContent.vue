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
  components: {
    RightItem,
  },
  props: {
    rightContentData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    goodsClick(event) {
      const targetDOM = event.target.closest("[cat-id]");
      if (targetDOM) {
        const catId = targetDOM.getAttribute("cat-id");
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