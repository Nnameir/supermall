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
/* 导入网络请求方法 */
import { getCategoryData } from "network/category.js";

export default {
  name: "Category",
  components: {
    NavBar,
    Scroll,
    LeftMenu,
    RightContent,
  },
  data() {
    return {
      categoryData: [],
      initialIndex: 1,
      rightContentData: [],
    };
  },
  created() {
    this.getCategoryData();
  },
  methods: {
    getCategoryData() {
      getCategoryData().then((res) => {
        this.categoryData = res.message;
        this.rightContentData = this.categoryData[this.initialIndex].children;
      });
    },
    updateContent(index) {
      this.$refs["right-scroll"].scrollTo(0, 0, 0);
      this.rightContentData = this.categoryData[index].children;
    },
  },
};
</script>

<style scoped>
#category {
  color: #000;
}

.category-nav-bar {
  position: relative;
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