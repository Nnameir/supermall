<template>
  <div id="cate-nav">
    <a v-for="item in cateItems" :key="item.name" :href="item.navigator_url">
      <img :src="item.image_src" alt="" />
    </a>
  </div>
</template>

<script>
import { getCateNavData } from "network/home.js";

export default {
  name: "CateNav",
  data() {
    return {
      cateItems: null,
    };
  },
  created() {
    getCateNavData().then((res) => {
      this.cateItems = res.message;
    });
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