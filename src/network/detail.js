import { request } from './request.js';

export function getGoodsDetail(goods_id) {
  return request({
    url: '/goods/detail',
    params: {
      goods_id,
    },
  });
};

export class goodsBaseInfo {
  constructor(goodsMessage) {
    this.goods_price = goodsMessage.goods_price;
    this.goods_name = goodsMessage.goods_name;
  }
};
