import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/vantui';
import './plugins/index';
import './plugins/rem';

// 自定义弹框
import Toast from './components/toast/toast.js';

// 引入阿里图标库
import './assets/iconfont/iconfont.css';
// 挂载(链式)
Vue.prototype.$toast = Toast;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
