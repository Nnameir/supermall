<template>
  <div id="category">
    <nav-bar class="category-nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <scroll class="left" :bounce="{ top: false, bottom: false }">
      <left-menu
        :left-menu-data="categoryData"
        :initial-index="initialIndex"
        @menu-click="updateContent"
      />
    </scroll>
    <scroll ref="right-scroll" class="right">
      <right-content :right-content-data="rightContentData" />
    </scroll>
  </div>
</template>

<script>
/* 导入通用组件 */
import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";
/* 导入专用组件 */
import LeftMenu from "./childComponents/LeftMenu.vue";
import RightContent from "./childComponents/rightContent/RightContent.vue";

import { getCategoryData } from "network/category.js";

export default {
  name: "Category",
  data() {
    return {
      categoryData: [],
      initialIndex: 1,
      rightContentData: [],
    };
  },
  components: {
    NavBar,
    Scroll,
    LeftMenu,
    RightContent,
  },
  created() {
    getCategoryData().then((res) => {
      this.categoryData = res.message;
      this.rightContentData = this.categoryData[this.initialIndex].children;
    });
  },
  methods: {
    updateContent(index) {
      this.$refs["right-scroll"].scrollTo(0, 0, 0);
      this.rightContentData = this.categoryData[index].children;
    },
  },
};
</script>

<style scoped>
#category {
  position: relative;
  padding: 44px 0 49px 0;
  color: #000;
}

.category-nav-bar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background-color: var(--color-tint);
  color: #fff;
}

.left {
  float: left;
  width: 25%;
  height: calc(100vh - 44px - 49px);
}

.right {
  float: right;
  width: 75%;
  height: calc(100vh - 44px - 49px);
}
</style>