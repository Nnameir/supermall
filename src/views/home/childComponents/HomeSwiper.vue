<template>
  <swiper :is-loaded="isLoaded">
    <swiper-item
      v-for="item in banners"
      :key="item.goods_id"
      :href-link="item.navigator_url"
      :image-src="item.image_src"
      @image-loaded="imageLoaded"
    />
  </swiper>
</template>

<script>
/* 导入混入对象 */
import { swiperMixin } from "common/mixin.js";
/* 导入网络请求方法 */
import { getSwiperData } from "network/home.js";

export default {
  name: "HomeSwiper",
  mixins: [swiperMixin],
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