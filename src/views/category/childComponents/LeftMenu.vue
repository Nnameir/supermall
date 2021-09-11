<template>
  <div class="left-menu" @click="menuClick">
    <div
      v-for="(item, index) in leftMenuData"
      :key="item.cat_id"
      :class="{ active: index === currentIndex }"
      :data-index="index"
    >
      {{ item.cat_name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftMenu",
  created() {
    this.currentIndex = this.initialIndex;
  },
  props: {
    leftMenuData: {
      type: Array,
      default() {
        return [];
      },
    },
    initialIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    menuClick(event) {
      const index = Number(event.target.getAttribute("data-index"));
      this.currentIndex = index;
      this.$emit("menu-click", index);
    },
  },
};
</script>

<style scoped>
.left-menu {
  background-color: var(--color-background-gray);
}

.left-menu div {
  border-left: 3px solid transparent;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-sizing: border-box;
}

.left-menu .active {
  border-left: 3px solid var(--color-tint);
  background-color: #fff;
  color: var(--color-high-text);
}
</style>