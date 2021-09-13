<template>
  <div>
    <goods-list-nav-bar />
    <tab-control :title="tabControlTitle" class="goods-list-tab-control" />
    <scroll
      class="goods-list-content"
      ref="scroll"
      :probe-type="3"
      @scroll="scrollCallback"
      :pull-up-load="true"
      @pulling-up="pullingUpCallback"
    >
      <goods-list-content :goods-list="goodsList" />
    </scroll>
    <back-top v-show="isShow" @click.native="backTopClick" />
  </div>
</template>

<script>
/* 导入通用组件 */
import TabControl from "components/content/tabControl/TabControl.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backTop/BackTop.vue";
/* 导入专用组件 */
import GoodsListNavBar from "./childComponents/GoodsListNavBar.vue";
import GoodsListContent from "./childComponents/GoodsListContent/GoodsListContent.vue";

import { getGoodsList } from "network/goodslist.js";

export default {
  name: "GoodsList",
  created() {
    this.cid = this.$route.query.cid;
    this.updateGoodsList();
  },
  data() {
    return {
      cid: 0,
      pagenum: 0,
      tabControlTitle: ["综合", "销量", "价格"],
      goodsList: [],
      total: 0,
      isShow: false,
    };
  },
  methods: {
    updateGoodsList() {
      this.pagenum++;
      getGoodsList(this.cid, this.pagenum).then((res) => {
        const message = res.message;
        this.goodsList.push(...message.goods);
        this.total = message.total;
      });
    },
    scrollCallback(position) {
      this.isShow = -position.y > 600;
    },
    pullingUpCallback() {
      if (this.goodsList.length < this.total) {
        this.updateGoodsList();
        this.$refs.scroll.finishPullUp();
      }
    },
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
  },
  components: {
    TabControl,
    Scroll,
    BackTop,
    GoodsListNavBar,
    GoodsListContent,
  },
};
</script>

<style scoped>
.goods-list-tab-control {
  position: fixed;
  top: 44px;
  z-index: 999;
}

.goods-list-content {
  margin-top: 84px;
  height: calc(100vh - 44px - 40px);
}
</style>