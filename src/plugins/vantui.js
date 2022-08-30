import Vue from 'vue';
import {
  Toast,
  Search,
  Sticky,
  Field,
  Tabs,
  Tab,
  Popup,
  Loading,
  Button,
  Image,
  List,
  Cell,
  Icon,
  Tabbar,
  TabbarItem,
  Dialog,
} from 'vant';
import 'vant/lib/index.css';

// 按需加载vant组件，减少生产打包体积
Vue.use(Toast);
Vue.use(Search);
Vue.use(Sticky);
Vue.use(Field);
Vue.use(Tabs);
Vue.use(Tab);
Vue.use(Popup);
Vue.use(Loading);
Vue.use(Button);
Vue.use(Image);
Vue.use(List);
Vue.use(Cell);
Vue.use(Icon);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Dialog);
