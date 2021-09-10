<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive">
      <slot name="item-icon-active"></slot>
    </div>
    <div v-else>
      <slot name="item-icon"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    link: {
      type: String,
      required: true,
    },
    activeColor: {
      type: String,
      default: "rgb(231, 107, 125)",
    },
  },
  computed: {
    isActive() {
      return this.link === this.$route.path;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.link);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  font-size: 14px;
}
</style>