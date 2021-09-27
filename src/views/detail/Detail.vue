<template>
  <div>
    <detail-nav-bar />
    <scroll
      ref="scroll"
      class="detail-content"
      :probe-type="3"
      @scroll="scrollCallback"
    >
      <detail-swiper
        :goods-swiper-data="goodsSwiperData"
        @swiper-loaded="swiperLoaded"
      />
      <detail-base-info :goods-base-info="goodsBaseInfo" />
      <detail-goods-info :goods-info="goodsInfo" />
    </scroll>
    <detail-bottom-bar :cart-goods-info="cartGoodsInfo" />
    <back-top v-show="isShowBackTop" @click.native="backTopClick" />
  </div>
</template>

<script>
/* 导入通用组件 */
import Scroll from "components/common/scroll/Scroll.vue";
/* 导入专用组件 */
import DetailNavBar from "./childComponents/DetailNavBar.vue";
import DetailSwiper from "./childComponents/DetailSwiper.vue";
import DetailBaseInfo from "./childComponents/DetailBaseInfo.vue";
import DetailGoodsInfo from "./childComponents/DetailGoodsInfo.vue";
import DetailBottomBar from "./childComponents/DetailBottomBar.vue";
/* 导入混入对象 */
import { backTopMixin } from "common/mixin.js";
/* 导入网络请求方法 */
import {
  getGoodsDetail,
  GoodsBaseInfo,
  CartGoodsInfo,
} from "network/detail.js";

export default {
  name: "Detail",
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailGoodsInfo,
    DetailBottomBar,
  },
  mixins: [backTopMixin],
  data() {
    return {
      goodsId: undefined,
      goodsSwiperData: [],
      goodsBaseInfo: new GoodsBaseInfo({}),
      goodsInfo: "",
      cartGoodsInfo: new CartGoodsInfo({}),
    };
  },
  created() {
    this.goodsId = this.$route.query.goodsId;
    this.getGoodsDetail();
  },
  methods: {
    getGoodsDetail() {
      getGoodsDetail(this.goodsId).then((res) => {
        const message = res.message;
        this.goodsSwiperData = message.pics;
        this.goodsBaseInfo = new GoodsBaseInfo(message);
        this.goodsInfo = message.goods_introduce;
        this.cartGoodsInfo = new CartGoodsInfo(message);
      });
    },
    scrollCallback(position) {
      this.getIsShowBackTop(position);
    },
    swiperLoaded() {
      this.$refs.scroll.refresh();
    },
  },
};
</script>

<style scoped>
.detail-content {
  height: calc(100vh - 44px - 49px);
}
</style>