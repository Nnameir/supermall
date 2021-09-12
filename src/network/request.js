import axios from 'axios';

export function request(config) {
  const axiosInstance = axios.create({
    baseURL: 'https://api-hmugo-web.itheima.net/api/public/v1',
    timeout: 5000
  });
  axiosInstance.interceptors.request.use(config => {
    return config;
  }, err => {
    console.log(err);
    return err;
  });
  axiosInstance.interceptors.response.use(res => {
    return res.data; // 修改网络请求返回的Promise对象的抛出值
  }, err => {
    console.log(err);
    return err;
  });
  return axiosInstance(config);
};
