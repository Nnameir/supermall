<template>
  <swiper :is-loaded="isLoaded" @click.native="routerLinkClick">
    <swiper-item
      v-for="item in banners"
      :key="item.goods_id"
      :navigator-url="item.navigator_url"
      href-link="javascript:;"
      :image-src="item.image_src"
      @image-loaded="imageLoaded"
    />
  </swiper>
</template>

<script>
/* 导入混入对象 */
import { swiperMixin, aTagRouterLinkMixin } from "common/mixin.js";
/* 导入网络请求方法 */
import { getSwiperData } from "network/home.js";

export default {
  name: "HomeSwiper",
  mixins: [swiperMixin, aTagRouterLinkMixin],
  data() {
    return {
      banners: [],
    };
  },
  created() {
    this.getSwiperData();
  },
  methods: {
    getSwiperData() {
      getSwiperData().then((res) => {
        this.banners = res.message;
      });
    },
  },
};
</script>

<style scoped>
</style>