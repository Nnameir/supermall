import { request } from './request.js';

export function getGoodsList(cid, pagenum) {
  return request({
    url: '/goods/search',
    params: {
      cid,
      pagenum,
    },
  });
};
