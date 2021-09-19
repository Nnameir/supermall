<template>
  <div id="zhu-swiper">
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
      />
    </div>
  </div>
</template>

<script>
import { animationMove } from "common/animation.js";

export default {
  name: "Swiper",
  props: {
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
  },
  data() {
    return {
      slideCount: 0,
      slideWidth: 0,
      swiperElement: null,
      playTimer: 0,
      currentIndex: 0, // currentIndex 表示当前正在活跃的 slide 索引, 索引从 1 开始
      scrolling: false, // scrolling 表示是否正在滚动
      startX: undefined, // startX 为 undefined 表示未开始触摸
    };
  },
  mounted() {
    setTimeout(() => {
      // 网络请求慢？
      this.insertDom();
      this.startSwiper();
    }, 2000);
  },
  methods: {
    // 只有一幅slide？
    insertDom() {
      const zhuSwiper = document.querySelector("#zhu-swiper");
      this.swiperElement = zhuSwiper.querySelector(".swiper");
      const tempSwiper = this.swiperElement;
      zhuSwiper.style.height = tempSwiper.offsetHeight + "px";
      this.slideCount = tempSwiper.children.length;
      this.slideWidth = tempSwiper.offsetWidth;
      if (this.slideCount > 1) {
        // 只有一幅slide？
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
      if (this.scrolling) {
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
#zhu-swiper {
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
  background-color: #fff;
  border-radius: 50%;
}

.active {
  background-color: rgba(212, 62, 46, 1);
  box-shadow: 0 0 3px 3px rgba(212, 62, 46, 0.7);
}
</style>