<template>
  <div>
    <goods-list-nav-bar />
    <tab-control :title="tabControlTitle" class="goods-list-tab-control" />
    <scroll class="goods-list-content">
      <goods-list-content :goods="goods" />
    </scroll>
  </div>
</template>

<script>
/* 导入通用组件 */
import TabControl from "components/content/tabControl/TabControl.vue";
import Scroll from "components/common/scroll/Scroll.vue";
/* 导入专用组件 */
import GoodsListNavBar from "./childComponents/GoodsListNavBar.vue";
import GoodsListContent from "./childComponents/GoodsListContent.vue";

import { getGoodsList } from "network/goodslist.js";

export default {
  name: "GoodsList",
  created() {
    this.cid = this.$route.query.cid;
    getGoodsList(this.cid, this.pagenum++).then((res) => {
      const message = res.message;
      this.goods = message.goods;
      this.total = message.total;
    });
  },
  data() {
    return {
      cid: 0,
      pagenum: 1,
      tabControlTitle: ["综合", "销量", "价格"],
      goods: [],
      total: 0,
    };
  },
  components: {
    TabControl,
    Scroll,
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
  height: calc(100vh - 44px - 40px);
}
</style>