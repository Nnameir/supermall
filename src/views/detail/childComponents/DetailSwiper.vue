<template>
  <swiper :is-loaded="isLoaded" indicator-color="#aaa" class="detail-swiper">
    <swiper-item
      v-for="item in goodsSwiperData"
      :key="item.goods_id"
      :href-link="item.pics_big_url"
      :image-src="item.pics_big"
      @image-loaded="imageLoaded"
      class="detail-swiper-item"
    />
  </swiper>
</template>

<script>
/* 导入混入对象 */
import { swiperMixin } from "common/mixin.js";

export default {
  name: "DetailSwiper",
  mixins: [swiperMixin],
  props: {
    goodsSwiperData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.detail-swiper {
  margin: 0 15vw;
}
</style>