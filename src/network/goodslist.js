import { request } from './request.js';

export function getGoodsList(query) {
  return request({
    url: '/goods/search',
    params: query,
  });
};
