<template>
  <div class="top-bar">
    <div class="left">
      <span class="iconfont icon-live"></span>
    </div>
    <div class="middle">
      <div class="item" @click="changeTop(0)">
        <span :class="topIndex==0?'active':''">关注</span>
      </div>
      <div class="item" @click="changeTop(1)">
        <span :class="topIndex==1?'active':''">推荐</span>
      </div>
    </div>
    <div class="right">
      <span class="iconfont icon-sousuo"></span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TopBar',
  data(){
    return{
      topIndex:1
    }
  },
  methods:{
    changeTop(index){
      this.topIndex = index;
    }
  }

}
</script>

<style>
  .top-bar{
    position: fixed;
    /* background-color:black; */
    height:55px;
    width:100%;
    font-size:18px;
    color:#cccccc;
    padding:20px;
    display: flex;
    box-sizing: border-box;
    /* 使用层级关系让被视频盖住的部分显示出来 */
    z-index: 999;
  }
  .left,.right{
    width:20%;
  }
  .iconfont{
    font-size: 24px;
  }
  .middle{
    width:60%;
    display: flex;
    justify-items: center;
  }
  .right{
    text-align: right;
  }
  .middle>.item{
    flex:1;
    text-align: center;
  }
  .middle .item span{
    padding:5px 0;
  }
  .middle .item .active{
    color:white;
    border-bottom: 2px solid #ffffff;
  }
</style>