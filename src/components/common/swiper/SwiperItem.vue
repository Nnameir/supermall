<template>
  <div class="slide">
    <!-- 每一张 slide 都由 a > img 组成, 只有链接依赖于具体项目 -->
    <a :href="hrefLink">
      <img :src="imageSrc" alt="" />
    </a>
  </div>
</template>

<script>
export default {
  name: "SwiperItem",
  props: {
    hrefLink: {
      type: String,
      default: "",
    },
    imageSrc: {
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