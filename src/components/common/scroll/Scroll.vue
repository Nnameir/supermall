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
  mounted() {
    this.scroll = new BScroll(this.$refs.wraper, {
      // probeType 探测类型, 0/1/2/3
      probeType: this.probeType,
      // click 设定是否允许滚动区域中非按钮元素的点击事件
      click: this.click,
      pullUpLoad: this.pullUpLoad,
      // bounce 设定是否添加回弹动画
      bounce: this.bounce,
    });
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    click: {
      type: Boolean,
      default: true,
    },
    pullUpLoad: {
      type: Boolean,
      default: true,
    },
    bounce: {
      type: Object,
      default() {
        return {
          top: true,
          bottom: true,
          left: true,
          right: true,
        };
      },
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  methods: {
    scrollTo(x, y, time) {
      this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>

<style scoped>
.wraper {
  overflow: hidden;
}
</style>