<template>
  <div class="check-button" :class="{ active: isChecked }">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.check-button {
  --button-size: 22px;
  display: inline-block;
  overflow: hidden;
  width: var(--button-size) !important;
  height: var(--button-size) !important;
  border: 2px solid #888;
  border-radius: 50%;
}

.check-button img {
  width: 100%;
  height: 100%;
}

.active {
  background-color: rgb(255, 0, 0);
  border-color: transparent;
}
</style>