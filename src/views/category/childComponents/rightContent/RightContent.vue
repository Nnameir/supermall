<template>
  <div class="right-content">
    <right-item
      v-for="item in rightContentData"
      :key="item.cat_id"
      :right-item-data="item"
    ></right-item>
  </div>
</template>

<script>
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
};
</script>

<style scoped>
</style>