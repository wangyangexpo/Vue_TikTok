import Vue from 'vue';
import SvgIcon from '@/components/svg-icon/index.vue';

Vue.component('svg-icon', SvgIcon);

const req = require.context('../assets/svg-icons', false, /\.svg$/);
const requireAll = (requireContext) => requireContext.keys().map(requireContext);
requireAll(req);
