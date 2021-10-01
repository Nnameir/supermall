<template>
  <div>
    <nav-bar class="profile-nav-bar">
      <div slot="center">我的</div>
    </nav-bar>
    <personal-details @click.native="personalDetailsClick" />
    <possession />
    <personal-discount />
    <shopping />
  </div>
</template>

<script>
/* 导入通用组件 */
import NavBar from "components/common/navbar/NavBar.vue";
/* 导入专用组件 */
import PersonalDetails from "./childComponents/PersonalDetails.vue";
import Possession from "./childComponents/Possession/Possession.vue";
import PersonalDiscount from "./childComponents/PersonalDiscount.vue";
import Shopping from "./childComponents/Shopping.vue";

export default {
  name: "Profile",
  components: {
    NavBar,
    PersonalDetails,
    Possession,
    PersonalDiscount,
    Shopping,
  },
  methods: {
    personalDetailsClick() {
      this.$toast.show("暂无登录/注册页面");
    },
  },
};
</script>

<style scoped>
.profile-nav-bar {
  width: 100%;
  background-color: var(--color-tint);
  color: #fff;
}
</style>