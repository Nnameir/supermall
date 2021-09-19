<template>
  <swiper>
    <swiper-item
      v-for="item in banners"
      :key="item.goods_id"
      :href-link="item.navigator_url"
      :image-src="item.image_src"
    />
  </swiper>
</template>

<script>
/* 导入通用组件 */
import { Swiper, SwiperItem } from "components/common/swiper/index.js";
/* 导入网络请求方法 */
import { getSwiperData } from "network/home.js";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      banners: {},
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