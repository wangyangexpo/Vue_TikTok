import Mock from 'mockjs';
import mockData from './mockdata';

const toString = Object.prototype.toString;

// 是否为对象
const isObject = (obj) => {
  return toString.call(obj) === '[object Object]';
};

// obj是否含有code或者data键值
const hasData = (obj) => {
  if (!isObject(obj)) return false;
  return Object.keys(obj).find((key) => /^(data|code)/.test(key));
};

// 模拟接口延迟，默认为0毫秒
const delay = 300;

export default (apis) => {
  // 正式环境默认关闭proxy功能
  if (process.env.APP_ENV === 'prod') return apis;

  const proxyApis = new Proxy(apis, {
    get(apis, key) {
      // 没有配置mockData，直接返回原值
      if (!mockData[key]) {
        return apis[key];
      }
      return function () {
        console.log(`${key}参数`, arguments[0]);
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            let mockResult = Mock.mock(mockData[key]);
            console.log(`${key}返回值`, mockResult);
            if (mockResult.code && mockResult.code !== 0) {
              reject(mockResult);
            }
            if (hasData(mockResult)) {
              mockResult = mockResult.data;
            }
            resolve(mockResult);
          }, delay);
        });
      };
    },
  });
  return proxyApis;
};
