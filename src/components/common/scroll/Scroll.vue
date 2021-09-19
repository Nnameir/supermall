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
    pullUpLoad: {
      type: Boolean,
      default: false,
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
  mounted() {
    this.initBScroll();
    this.onScroll();
    this.onPullingUp();
  },
  methods: {
    initBScroll() {
      this.scroll = new BScroll(this.$refs.wraper, {
        // probeType 探测类型, 0(默认值)/1(非实时, 滚动超过一定时间之后派发滚动事件)/2(手指滚动屏幕的实时派发滚动事件)/3(内容滚动的实时派发滚动事件)
        probeType: this.probeType,
        // click 设定是否允许滚动区域中非按钮元素的点击事件
        click: this.click,
        // pullUpLoad 设定是否允许上拉加载, 必须调用 finishPullUp 之后才可以进行下一次上拉加载
        pullUpLoad: this.pullUpLoad,
        // bounce 设定是否添加回弹动画
        bounce: this.bounce,
      });
    },
    onScroll() {
      // 监听滚动事件, 回调函数的第一个参数是滚动的位置
      if (this.probeType) {
        this.scroll.on("scroll", (position) => {
          this.$emit("scroll", position);
        });
      }
    },
    onPullingUp() {
      // 监听上拉事件
      if (this.pullUpLoad) {
        this.scroll.on("pullingUp", () => {
          this.$emit("pulling-up");
        });
      }
    },
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      // 完成上拉, 允许下一次上拉
      this.scroll.finishPullUp();
    },
    refresh() {
      // 重新计算 content 高度
      this.scroll.refresh();
    },
  },
};
</script>

<style scoped>
.wraper {
  overflow: hidden;
}
</style>