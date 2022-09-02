import Vue from 'vue';
import moment from 'moment';

// 注册focus指令
Vue.directive('focus', {
  inserted: (el) => {
    if (el.nodeName.toUpperCase() === 'INPUT') {
      el.focus();
    } else {
      const node = el.querySelector('input');
      node.focus();
    }
  },
});

//  格式化日期
Vue.filter('formatDate', (value, type = 'YYYY-MM-DD') => {
  if (!value) return '';
  return moment(value).format(type);
});

const SI = [
  { value: 1, symbol: '' },
  { value: 1e4, symbol: '万' },
];

// 12000 -------> 1.2万
Vue.filter('omitDisplay', (value) => {
  let level = null;
  for (let i = SI.length - 1; i >= 0; i--) {
    if (value >= SI[i].value) {
      level = SI[i];
      break;
    }
  }
  return level ? `${Number((value / level.value).toFixed(1))}${level.symbol}` : value;
});
