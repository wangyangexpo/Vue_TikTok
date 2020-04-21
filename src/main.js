import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//自定义弹框
import Toast from './components/toast/toast.js'
//挂载(链式)
Vue.prototype.$toast = Toast

//引入阿里图标库
import './assets/iconfont/iconfont.css'
//导入组件+样式
import  VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
//播放器
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
//使用
Vue.use(VueAwesomeSwiper)
Vue.use(VueVideoPlayer)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

