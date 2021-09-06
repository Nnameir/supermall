import { request } from "./request.js";

export function getSwiperData() {
  return request({
    url: '/home/swiperdata'
  });
};

export function getCateNavData() {
  return request({
    url: '/home/catitems'
  });
};

export function getFloorData() {
  return request({
    url: '/home/floordata'
  });
};
