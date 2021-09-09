<template>
  <div class="left-menu">
    <div
      v-for="(item, index) in leftMenuData"
      :key="item.cat_id"
      :class="{ active: index === currentIndex }"
      @click="menuClick(index)"
    >
      {{ item.cat_name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftMenu",
  beforeUpdate() {
    this.menuClick(this.initialIndex);
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
    menuClick(index) {
      this.currentIndex = index;
      this.$emit("menuclick", index);
    },
  },
};
</script>

<style scoped>
.left-menu div {
  border-left: 3px solid transparent;
  height: 44px;
  width: 100%;
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