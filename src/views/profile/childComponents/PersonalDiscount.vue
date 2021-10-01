<template>
  <div class="personal-discount">
    <profile-item>
      <img slot="icon" src="~assets/img/profile/message.svg" alt="" />
      <span slot="description">我的消息</span>
    </profile-item>
    <profile-item>
      <img slot="icon" src="~assets/img/profile/pointer.svg" alt="" />
      <span slot="description">积分商城</span>
    </profile-item>
    <profile-item :has-border="false">
      <img slot="icon" src="~assets/img/profile/vip.svg" alt="" />
      <span slot="description">会员卡</span>
    </profile-item>
  </div>
</template>

<script>
/* 导入专用组件 */
import ProfileItem from "./ProfileItem.vue";

export default {
  name: "PersonalDiscount",
  components: {
    ProfileItem,
  },
};
</script>

<style scoped>
.personal-discount {
  padding-top: 10px;
  background-color: #eee;
}
</style>