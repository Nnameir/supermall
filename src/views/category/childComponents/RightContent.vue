<template>
  <div class="right-content">
    <div v-for="item in rightContentData" :key="item.cat_id">
      {{ item.cat_name }}
    </div>
  </div>
</template>

<script>
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
};
</script>

<style scoped>
.right-content {
  background-color: #fff;
}
</style>