<template>
  <div class="indexwarp">
    <!-- 首页 -->
    <!-- <span class="iconfont icon-sousuo"></span> -->
    <top-bar></top-bar>
    <router-view />
  </div>
</template>

<script>
import TopBar from '../../components/index/TopBar'
export default {
  name:'Index',
  data(){
    return{

    }
  },
  components:{
    TopBar
  }
}
</script>

<style>
  .indexwarp{
    height:100%;
    background: #000;
  }
</style>