import axios from 'axios';
import Vue from 'vue';
import { baseUrl } from './host.js';

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 50000,
  withCredentials: true,
  transformResponse: [
    (response) => {
      const res = response ? JSON.parse(response) : {};
      if (res.code === 0) {
        return res.data;
      } else if (res.code === 404) {
        Vue.prototype.$toast('抱歉，您没有访问权限!');
        throw new Error(res.message);
      } else {
        Vue.prototype.$toast(res.message || '请求失败，请稍后再试');
        throw new Error(res.message);
      }
    },
  ],
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    if (error.response) {
      Vue.prototype.$toast('服务器响应错误!');
    } else if (error.message.indexOf('timeout') > -1) {
      Vue.prototype.$toast('网络请求超时!');
    } else {
      Vue.prototype.$toast(error.message);
    }
    return Promise.reject(error);
  },
);

export default instance;
