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
import { Swiper, SwiperItem } from "components/common/swiper/index.js";

import { getSwiperData } from "network/home.js";

export default {
  name: "HomeSwiper",
  data() {
    return {
      banners: {},
    };
  },
  created() {
    getSwiperData().then((res) => {
      this.banners = res.message;
    });
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style scoped>
</style>