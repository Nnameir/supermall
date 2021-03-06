<template>
  <div class="zhu-swiper" ref="zhuSwiper">
    <div
      class="swiper"
      @touchstart="touchEventHandlers"
      @touchmove="touchEventHandlers"
      @touchend="touchEventHandlers"
    >
      <slot></slot>
    </div>
    <div class="indicators" v-if="showIndicator && slideCount > 1">
      <div
        class="indicator-item"
        v-for="index in slideCount"
        :key="index"
        :class="{ active: index === currentIndex }"
        :style="{ 'background-color': indicatorColor }"
      />
    </div>
  </div>
</template>

<script>
import { animationMove } from "common/animation.js";

export default {
  name: "Swiper",
  props: {
    isLoaded: {
      type: Boolean,
      default: false,
      required: true,
    },
    swiperInterval: {
      type: Number,
      default: 3000,
    },
    swiperDuration: {
      type: Number,
      default: 300,
    },
    swiperFrames: {
      type: Number,
      default: 30,
    },
    moveRatio: {
      type: Number,
      default: 0.3,
    },
    showIndicator: {
      type: Boolean,
      default: true,
    },
    indicatorColor: {
      type: String,
      default: "#fff",
    },
  },
  data() {
    return {
      isInit: false, // 用于记录 swiper 是否已经初始化
      slideCount: 0,
      slideWidth: 0,
      swiperElement: null,
      playTimer: 0,
      currentIndex: 0, // currentIndex 表示当前正在活跃的 slide 索引, 索引从 1 开始
      scrolling: false, // scrolling 表示是否正在滚动
      startX: undefined, // startX 为 undefined 表示未开始触摸
    };
  },
  watch: {
    isLoaded() {
      if (!this.isInit && this.isLoaded) {
        this.isInit = true;
        this.initSwiper();
      }
    },
  },
  methods: {
    /* 初始化 swiper, 当图片加载完毕时, 调用该方法 */
    initSwiper() {
      this.insertDom();
      if (this.slideCount > 1) {
        this.startSwiper();
      }
    },
    insertDom() {
      const zhuSwiper = this.$refs.zhuSwiper;
      this.swiperElement = zhuSwiper.querySelector(".swiper");
      const tempSwiper = this.swiperElement;
      zhuSwiper.style.height = tempSwiper.offsetHeight + "px";
      this.slideCount = tempSwiper.children.length;
      this.slideWidth = tempSwiper.offsetWidth;
      if (this.slideCount > 1) {
        const firstSlide = tempSwiper.firstElementChild;
        const firstSlideCopy = firstSlide.cloneNode(true);
        const lastSlideCopy = tempSwiper.lastElementChild.cloneNode(true);
        tempSwiper.insertBefore(lastSlideCopy, firstSlide);
        tempSwiper.appendChild(firstSlideCopy);
        tempSwiper.style.left = `${-this.slideWidth}px`; // swiper 重新定位
        this.currentIndex = 1;
      }
    },
    /* 启动 swiper */
    startSwiper() {
      this.playTimer = setInterval(() => {
        this.currentIndex++;
        this.scrollSwiper();
      }, this.swiperInterval);
    },
    /* 停止 swiper */
    stopSwiper() {
      clearInterval(this.playTimer);
    },
    /* 将 swiper 滚动到 currentIndex 所指的位置并修正 */
    scrollSwiper() {
      this.scrolling = true;
      return animationMove(
        this.swiperElement,
        -this.slideWidth * this.currentIndex,
        this.swiperDuration,
        this.swiperFrames
      ).then(
        () =>
          new Promise((resolve) => {
            this.checkPosition();
            this.scrolling = false;
            resolve();
          })
      );
    },
    /* 修正 swiper 的位置 */
    checkPosition() {
      if (this.currentIndex > this.slideCount) {
        this.currentIndex = 1;
        this.swiperElement.style.left = `${-this.slideWidth}px`;
      } else if (this.currentIndex < 1) {
        this.currentIndex = this.slideCount;
        this.swiperElement.style.left = `${
          -this.slideWidth * this.currentIndex
        }px`;
      }
    },
    /* 触摸事件 */
    touchEventHandlers(event) {
      if (this.scrolling || this.slideCount <= 1) {
        return;
      }
      this[event.type + "Handler"](event);
    },
    touchstartHandler(event) {
      this.stopSwiper();
      this.startX = event.touches[0].clientX;
    },
    touchmoveHandler(event) {
      if (this.startX === undefined) {
        return;
      }
      const currentX = event.changedTouches[0].clientX;
      this.swiperElement.style.left = `${
        -this.slideWidth * this.currentIndex + currentX - this.startX
      }px`;
    },
    touchendHandler(event) {
      if (this.startX === undefined) {
        return;
      }
      const moveX = event.changedTouches[0].clientX - this.startX;
      if (Math.abs(moveX) > this.slideWidth * this.moveRatio) {
        this.currentIndex =
          moveX > 0 ? this.currentIndex - 1 : this.currentIndex + 1;
      }
      this.scrollSwiper().then(() => {
        this.startSwiper();
        this.startX = undefined;
      });
    },
  },
};
</script>

<style scoped>
.zhu-swiper {
  overflow: hidden;
  position: relative;
}

.swiper {
  display: flex;
  position: absolute;
  width: 100%;
}

.indicators {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 8px;
  width: 100%;
}

.indicator-item {
  width: 8px;
  height: 8px;
  margin: 0 5px;
  border-radius: 50%;
}

.active {
  background-color: rgba(212, 62, 46, 1) !important;
  box-shadow: 0 0 3px 3px rgba(212, 62, 46, 0.7);
}
</style>