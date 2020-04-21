<template>
  <div class="message">
    <my-header title="消息" :hasRight="true" rightTx="发起聊天"></my-header>
    <div class="msg-warp">
      <div class="msg-nav">
        <div class="msg-nav-item">
          <div class="icon-box"><span></span></div>
          <p>粉丝</p>
        </div>
        <div class="msg-nav-item">
          <div class="icon-box"><span></span></div>
          <p>赞</p>
        </div>
        <div class="msg-nav-item">
          <div class="icon-box"><span></span></div>
          <p>@我的</p>
        </div>
        <div class="msg-nav-item">
          <div class="icon-box"><span></span></div>
          <p>评论</p>
        </div>
      </div>

      <div class="msg-list-box">
        <div class="msg-list">
          <img src="../../assets/img/xxx.jpeg">
          <div class="user-des">
            <div class="top">
              <span>抖音小助手</span>
              <span>13:00</span>
            </div>
            <div class="top top-msg">
              <span>欢迎来到抖音</span>
              <span class="no-see"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from '../../components/header/myHeader'
export default {
  components:{
    myHeader
  }
}
</script>

<style>
  .msg-warp{
    padding:0 20px;
    color: #ffffff;
    background-color: #101821;
    /* height:-webkit-fill-available; */
    height:1000px;
  }
  .msg-nav{
    padding:20px 5px;
    display: flex;
    justify-content: space-between;

  }
  .msg-nav-item{
    text-align: center;
    width:60px;
  }
  .icon-box{
    height:60px;
    width:60px;
    background-color:#ff4074;
    border-radius: 5px;
    margin-bottom: 5px;
  }
  .msg-list-box{
    padding-top:30px;

  }
  .msg-list{
    display: flex;
    padding:10px 0;
    /* justify-content: space-between; */
  }
  .msg-list img{
    width:50px;
    height:50px;
    border-radius: 50%;
  }
  .user-des{
    flex: 1;
    height:60px;
  }
  .user-des .top{
    font-size: 14px;
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
    line-height: 25px;
  }
  .top-msg{
    color: #666;
    align-items: center;
  }
  .no-see{
    width:8px;
    height: 8px;
    border-radius: 50%;
    background-color:#face15 ;
  }
</style>