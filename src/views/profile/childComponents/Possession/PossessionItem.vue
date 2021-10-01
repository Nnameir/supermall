<template>
  <div class="flex-item">
    <div class="item-value">
      <span class="value-number">{{ possessionItem.value }}</span>
      {{ possessionItem.unit }}
    </div>
    <div class="item-name">{{ possessionItem.name }}</div>
  </div>
</template>

<script>
export default {
  name: "PossessionItem",
  props: {
    possessionItem: {
      type: Object,
      default() {
        return {
          name: "我的××",
          value: 0,
          unit: "单位",
        };
      },
    },
  },
};
</script>

<style scoped>
.flex-item {
  flex: 1;
  padding-top: 16px;
  background-color: #fff;
  text-align: center;
  font-size: 14px;
}

.item-value {
  margin-bottom: 5px;
}

.value-number {
  color: rgb(255, 81, 0);
  font-size: 24px;
}
</style>