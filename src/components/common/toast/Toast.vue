<template>
  <div class="toast" v-show="isShow">{{ message }}</div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "Hello Toast !",
      isShow: false,
      defaultMsg: "Hello Toast !",
      toastTimer: null,
    };
  },
  methods: {
    show(message = this.defaultMsg, duration = 2000) {
      if (this.isShow) {
        // 防抖
        clearTimeout(this.toastTimer);
      } else {
        this.message = message;
        this.isShow = true;
      }
      this.toastTimer = setTimeout(() => {
        this.hideToast();
      }, duration);
    },
    hideToast() {
      this.isShow = false;
      this.message = this.defaultMsg;
    },
    clearToast() {
      // 清除 toast 的所有状态, 回归到默认状态
      clearTimeout(this.toastTimer);
      this.hideToast();
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 99999;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
  color: #fff;
  border-radius: 5px;
  white-space: nowrap;
}
</style>