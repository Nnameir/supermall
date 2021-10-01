<template>
  <div class="personal-details">
    <div class="avatar">
      <img src="~assets/img/profile/avatar.svg" alt="" />
    </div>
    <div class="login-register">
      <div>登录/注册</div>
      <div class="phone">
        <img class="icon" src="~assets/img/profile/phone.svg" alt="" />
        暂无绑定手机号
      </div>
    </div>
    <div class="arrow-left">
      <img src="~assets/img/common/arrow-left.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalDetails",
};
</script>

<style scoped>
.icon {
  width: 18px;
}

.personal-details {
  position: relative;
  height: 80px;
  background-color: var(--color-tint);
  color: #fff;
}

.personal-details > div {
  float: left;
}

.personal-details img {
  height: 100%;
}

.avatar {
  padding: 10px;
  height: 100%;
}

.login-register {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
}

.login-register > div {
  padding: 3px 0;
}

.login-register .phone {
  font-size: 14px;
}

.arrow-left {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translate(0, -50%);
  height: 20px;
}
</style>