import { request } from './request.js';

export function getGoodsDetail(goodsId) {
  return request({
    url: '/goods/detail',
    params: {
      goods_id: goodsId,
    },
  });
};

export class GoodsBaseInfo {
  constructor(goodsMessage) {
    this.goodsName = goodsMessage.goods_name;
    this.goodsPrice = goodsMessage.goods_price;
  }
};

export class CartGoodsInfo extends GoodsBaseInfo {
  constructor(goodsMessage) {
    super(goodsMessage);
    this.goodsId = goodsMessage.goods_id;
    this.goodsImage = goodsMessage.goods_small_logo;
    this.goodsCount = 1;
  }
}
