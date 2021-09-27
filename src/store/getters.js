export default {
  purchases(state) {
    return state.shopcart;
  },
  purchaseCount(state) {
    return state.shopcart.length;
  },
};
