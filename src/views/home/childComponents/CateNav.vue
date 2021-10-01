<template>
  <div id="cate-nav" @click="routerLinkClick">
    <a
      v-for="item in cateItems"
      :key="item.name"
      :navigator-url="item.navigator_url"
      href="javascript:;"
    >
      <img :src="item.image_src" alt="" />
    </a>
  </div>
</template>

<script>
/* 导入路由跳转混入 */
import { aTagRouterLinkMixin } from "common/mixin.js";
/* 导入网络请求方法 */
import { getCateNavData } from "network/home.js";

export default {
  name: "CateNav",
  mixins: [aTagRouterLinkMixin],
  data() {
    return {
      cateItems: {},
    };
  },
  created() {
    this.getCateNavData();
  },
  methods: {
    getCateNavData() {
      getCateNavData().then((res) => {
        this.cateItems = res.message;
      });
    },
  },
};
</script>

<style scoped>
#cate-nav {
  display: flex;
  padding: 14px;
  background-color: #fff;
}

#cate-nav a {
  flex: 1;
}

#cate-nav img {
  width: 100%;
}
</style>