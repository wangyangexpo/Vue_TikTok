<template>
  <div class="home">
    <router-view />
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from '../components/TabBar'
export default {
  name: 'Home',
  data(){
    return{

    }
  },
  components: {
    TabBar
  }
}
</script>
