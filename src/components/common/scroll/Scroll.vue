<template>
  <div class="wraper" ref="wraper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    click: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wraper, {
      // probeType 探测类型, 0/1/2/3
      probeType: this.probeType,
      click: this.click,
    });
  },
};
</script>

<style scoped>
.wraper {
  overflow: hidden;
}
</style>