import { request } from "./request.js";

export function getSwiperData() {
  return request({
    url: '/home/swiperdata'
  });
};
