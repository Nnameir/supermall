<template>
  <div class="shopcart-bottom-bar">
    <div class="selectAll" @click="checkButtonClick">
      <check-button :is-checked="isSelectAll" class="check-button" />
      全选
    </div>
    <div class="totalPrice">合计: ￥{{ totalPrice }}</div>
    <div class="settlement">结算 ({{ settledCount }})</div>
  </div>
</template>

<script>
/* 导入插件 */
import { mapGetters } from "vuex";
/* 导入 mutation 类型 */
import { SELECT_ALL_TOGGLE } from "store/mutation-types.js";
/* 导入通用组件 */
import CheckButton from "components/content/checkButton/CheckButton.vue";

export default {
  name: "ShopcartBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["purchases"]),
    isSelectAll() {
      const shopcart = this.purchases;
      return shopcart.length ? shopcart.every((goods) => goods.checked) : false;
    },
    totalPrice() {
      const shopcart = this.purchases;
      return shopcart.reduce((total, goods) => {
        return (
          total + (goods.checked ? goods.goodsCount * goods.goodsPrice : 0)
        );
      }, 0);
    },
    settledCount() {
      const shopcart = this.purchases;
      return shopcart.filter((goods) => goods.checked).length;
    },
  },
  methods: {
    checkButtonClick() {
      const isSelect = !this.isSelectAll;
      this.$store.commit(SELECT_ALL_TOGGLE, isSelect);
    },
  },
};
</script>

<style scoped>
.shopcart-bottom-bar {
  display: flex;
  position: fixed;
  bottom: 49px;
  left: 0;
  width: 100%;
  height: 45px;
  line-height: 45px;
  border-top: 2px solid var(--color-background-gray);
}

.selectAll {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  line-height: normal;
}

.check-button {
  margin-right: 8px;
}

.totalPrice {
  flex: 1;
  margin-left: 20px;
}

.settlement {
  padding-left: 15px;
  width: 90px;
  background-color: red;
  color: #fff;
}
</style>