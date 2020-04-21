<template>
  <div class="tab-bar">
    <div class="item" @click="changeTab(0)">
      <router-link to="/index" tag="span" :class="tabIndex==0?'active':''">首页</router-link></div>
    <div class="item" @click="changeTab(1)">
      <router-link to="/follow" tag="span" :class="tabIndex==1?'active':''">同城</router-link></div>
    <div class="item" @click="changeTab(2)">
      <router-link to="index" tag="span" :class="tabIndex==2?'active':''"><img src="../assets/img/add.png"></router-link>
    </div>
    <div class="item" @click="changeTab(3)">
      <router-link to="msg" tag="span" :class="tabIndex==3?'active':''">消息</router-link></div>
    <div class="item" @click="changeTab(4)">
      <router-link to="sign" tag="span" :class="tabIndex==4?'active':''">我</router-link></div>
  </div>
</template>

<script>

export default {
  name:'Home',
  data(){
    return{
      tabIndex:0
    }
  },
  methods:{
    changeTab(index){
      this.tabIndex = index;
      console.log(this.tabIndex);
    }
  }
}
</script>

<style>
  .tab-bar{
    height:49px;
    line-height: 49px;
    width: 100%;
    background-color: black;
    position: fixed;
    bottom: 0;
    right:0;
    left:0;
    color:#cccccc;
    font-size: 16px;
    display: flex;
    /* 使用层级关系让被视频盖住的部分显示出来 */
    z-index:99;
  }
  .item{
    flex-grow: 1;
    text-align: center;
  }
  .active{
    color:#ffffff;
  }
  .tab-bar>img{
    padding:2.5px;
  }
</style>