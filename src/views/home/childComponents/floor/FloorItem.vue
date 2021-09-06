<template>
  <div class="floor">
    <img class="floor_title" :src="floor_title.image_src" alt="" />
    <div class="floor-grid-container">
      <a
        class="floor-grid-item"
        v-for="item in product_list"
        :key="item.name"
        :href="item.navigator_url"
      >
        <img :src="item.image_src" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FloorItem",
  props: {
    floor_title: {
      type: Object,
      default() {
        return null;
      },
    },
    product_list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.floor {
  margin-top: 12px;
}

.floor_title {
  width: 100%;
  margin-bottom: 6px;
}

.floor-grid-container {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto auto;
  grid-gap: 6px 6px;
  padding: 8px;
  width: 100%;
  background-color: #fff;
}

.floor-grid-item img {
  width: 100%;
  height: 100%;
}

.floor-grid-container .floor-grid-item:first-child {
  grid-area: 1 / 1 / 3 / 2;
}
</style>