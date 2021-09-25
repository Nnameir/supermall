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
    <back-top v-show="isShowBackTop" @click.native="backTopClick" />
  </div>
</template>

<script>
/* 导入通用组件 */
import TabControl from "components/content/tabControl/TabControl.vue";
import Scroll from "components/common/scroll/Scroll.vue";
/* 导入专用组件 */
import GoodsListNavBar from "./childComponents/GoodsListNavBar.vue";
import GoodsListContent from "./childComponents/GoodsListContent/GoodsListContent.vue";
/* 导入混入对象 */
import { backTopMixin } from "common/mixin.js";
/* 导入网络请求方法 */
import { getGoodsList } from "network/goodslist.js";

export default {
  name: "GoodsList",
  components: {
    TabControl,
    Scroll,
    GoodsListNavBar,
    GoodsListContent,
  },
  mixins: [backTopMixin],
  data() {
    return {
      cid: 0,
      pagenum: 0,
      tabControlTitle: ["综合", "销量", "价格"],
      goodsList: [],
      total: 0,
    };
  },
  created() {
    this.cid = this.$route.query.cid;
    this.updateGoodsList();
  },
  methods: {
    updateGoodsList() {
      this.pagenum++;
      return getGoodsList(this.cid, this.pagenum).then((res) => {
        const message = res.message;
        this.goodsList.push(...message.goods);
        this.total = message.total;
      });
    },
    scrollCallback(position) {
      this.getIsShowBackTop(position);
    },
    pullingUpCallback() {
      if (this.goodsList.length < this.total) {
        this.updateGoodsList().then(() => {
          this.$refs.scroll.finishPullUp();
        });
      }
    },
  },
};
</script>

<style scoped>
.goods-list-content {
  height: calc(100vh - 44px - 40px);
}
</style>