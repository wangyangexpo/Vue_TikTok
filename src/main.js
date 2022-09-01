import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/vantui';
import './plugins/index';
import './plugins/svg-icon';
import './styles/common.css';
import 'normalize.css';

// 引入阿里图标库
import './assets/iconfont/iconfont.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
