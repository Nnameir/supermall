import { Swiper, SwiperItem } from "components/common/swiper/index.js";
import BackTop from "components/content/backTop/BackTop.vue";
import { BACK_TOP_POSITION } from "./const.js";

/* 轮播图组件所需的混入 */
export const swiperMixin = {
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      isLoaded: false,
    };
  },
  methods: {
    imageLoaded() {
      this.isLoaded = true;
      this.$emit("swiperLoaded");
    },
  },
};

/* 回到顶部组件所需的混入 */
export const backTopMixin = {
  components: {
    BackTop,
  },
  data() {
    return {
      isShowBackTop: false,
    };
  },
  methods: {
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    getIsShowBackTop(position) {
      this.isShowBackTop = -position.y > BACK_TOP_POSITION;
    },
  }
};
