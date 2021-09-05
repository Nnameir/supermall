<template>
  <div class="slide">
    <!-- 每一张 slide 都由 a > img 组成, 只有链接依赖于具体项目 -->
    <a :href="href_link">
      <img :src="image_src" alt="" />
    </a>
  </div>
</template>

<script>
export default {
  name: "SwiperItem",
  props: {
    href_link: {
      type: String,
      default: "#",
    },
    image_src: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.slide {
  width: 100%;
  flex-shrink: 0;
}

.slide img {
  width: 100%;
}
</style>