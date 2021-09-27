import { ADD_NEW_GOODS, ADD_COUNTER, CHECKED_TOGGLE, SELECT_ALL_TOGGLE } from './mutation-types.js';
import Vue from "vue";

export default {
  [ADD_NEW_GOODS](state, cartGoodsInfo) {
    // 添加新商品时, 设置是否选中, 并添加至响应式系统
    Vue.set(cartGoodsInfo, 'checked', true);
    state.shopcart.push(cartGoodsInfo);
  },
  [ADD_COUNTER](state, goodsIndex) {
    state.shopcart[goodsIndex].goodsCount++;
  },
  [CHECKED_TOGGLE](state, goodsId) {
    const goodsIndex = state.shopcartHashMap[goodsId];
    const goods = state.shopcart[goodsIndex];
    goods.checked = !goods.checked;
  },
  [SELECT_ALL_TOGGLE](state, isSelect) {
    const { shopcart } = state;
    shopcart.forEach((goods) => {
      goods.checked = isSelect;
    });
  }
};
