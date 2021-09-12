import { request } from './request.js';

export function getCategoryData() {
  return request({
    url: '/categories'
  });
};
