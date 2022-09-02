<template>
  <div class="home">
    <router-view />
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from '../components/footer';
export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {
    AppFooter,
  },
};
</script>
