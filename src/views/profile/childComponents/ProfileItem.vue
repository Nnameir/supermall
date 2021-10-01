<template>
  <div class="profile-item clear-fix" @click="itemClick">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="description" :class="{ bordered: hasBorder }">
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileItem",
  props: {
    path: {
      type: String,
      default: "",
    },
    hasBorder: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    itemClick() {
      if (this.path === "") {
        this.$toast.show("暂无相关页面");
      } else {
        this.$router.push(this.path);
      }
    },
  },
};
</script>

<style scoped>
.profile-item {
  padding-left: 8px;
  background-color: #fff;
  font-size: 15px;
}

.profile-item > div {
  height: 40px;
}

.icon {
  float: left;
  width: 40px;
  padding: 10px;
}

.icon img {
  width: 100%;
}

.description {
  overflow: hidden;
  line-height: 40px;
  box-sizing: content-box;
}

.bordered {
  border-bottom: 2px solid #eee;
}
</style>