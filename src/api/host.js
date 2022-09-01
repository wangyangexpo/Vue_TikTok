/**
 * 环境变量配置
 */

const config = ((ENV) => {
  let baseUrl;
  switch (ENV) {
    case 'production':
      baseUrl = 'https://backend.com/';
      return {
        baseUrl,
      };
    case 'test':
      baseUrl = 'https://test.backend.com/';
      return {
        baseUrl,
      };
    default:
      return {};
  }
})('test');

module.exports = config;
