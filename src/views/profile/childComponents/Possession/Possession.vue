<template>
  <div class="possession">
    <possession-item
      v-for="(item, index) in possession"
      :key="index"
      :possession-item="item"
    />
  </div>
</template>

<script>
/* 导入专用组件 */
import PossessionItem from "./PossessionItem.vue";

export default {
  name: "Possession",
  components: {
    PossessionItem,
  },
  data() {
    return {
      possession: [
        {
          name: "我的余额",
          value: 0.0,
          unit: "元",
        },
        {
          name: "我的优惠",
          value: 0,
          unit: "个",
        },
        {
          name: "我的积分",
          value: 0,
          unit: "分",
        },
      ],
    };
  },
};
</script>

<style scoped>
.possession {
  display: flex;
  height: 80px;
  background-color: #eee;
}

.possession > * {
  margin-right: 3px;
}

.possession > *:last-child {
  margin-right: 0;
}
</style>