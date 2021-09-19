<template>
  <div>
    <floor-item
      v-for="item in floorData"
      :key="item.floor_title.name"
      :floor-title="item.floor_title"
      :product-list="item.product_list"
    />
  </div>
</template>

<script>
/* 导入专用组件 */
import FloorItem from "./FloorItem.vue";
/* 导入网络请求方法 */
import { getFloorData } from "network/home.js";

export default {
  name: "Floor",
  components: {
    FloorItem,
  },
  data() {
    return {
      floorData: {},
    };
  },
  created() {
    this.getFloorData();
  },
  methods: {
    getFloorData() {
      getFloorData().then((res) => {
        this.floorData = res.message;
      });
    },
  },
};
</script>

<style scoped>
</style>