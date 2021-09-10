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
import { getFloorData } from "network/home.js";
import FloorItem from "./FloorItem.vue";

export default {
  name: "Floor",
  data() {
    return {
      floorData: {},
    };
  },
  created() {
    getFloorData().then((res) => {
      this.floorData = res.message;
    });
  },
  components: {
    FloorItem,
  },
};
</script>

<style scoped>
</style>