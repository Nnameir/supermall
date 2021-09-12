<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in title"
      :key="index"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  background-color: #fff;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 15px;
}

.tab-control div {
  flex: 1;
  border-bottom: 2px solid var(--color-background-gray);
}

.tab-control .active {
  border-bottom: 2px solid var(--color-tint);
  color: var(--color-high-text);
}
</style>