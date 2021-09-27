import { ADD_NEW_GOODS, ADD_COUNTER } from './mutation-types.js';

export default {
  addToShopcart(context, cartGoodsInfo) {
    const { shopcart, shopcartHashMap } = context.state;
    const { goodsId } = cartGoodsInfo;
    if (shopcartHashMap.hasOwnProperty(goodsId)) {
      context.commit(ADD_COUNTER, shopcartHashMap[goodsId]);
    } else {
      shopcartHashMap[goodsId] = shopcart.length;
      context.commit(ADD_NEW_GOODS, cartGoodsInfo);
    }
  }
};
