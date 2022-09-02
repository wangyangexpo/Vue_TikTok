<template>
  <div class="edit">
                                        <!-- 子组件传来的@changeBack -->
    <my-header title="编辑资料" hasLeft="true" @changeBack="toBack"></my-header>
    <div class="edit-warp">
      <div class="ava-box">
        <div class="avatar">
          <img src="../../assets/img/xxx.jpeg" alt="">
          <span class="iconfont icon-xiangji"></span>
          <input type="file">
        </div>
        <p>点击更换头像</p>
      </div>

      <div class="edit-box">
        <div class="edit-item">
          <span class="label">名字</span>
          <span>测试员1号<span class="icon">→</span></span>
        </div>
        <div class="edit-item">
          <span class="label">抖音号</span>
          <span>111111<span class="icon">→</span></span>
        </div>
        <div class="edit-item">
          <span class="label">简介</span>
          <span>我是一行简介<span class="icon">→</span></span>
        </div>
        <div class="edit-item">
          <span class="label">学校</span>
          <span>点击设置<span class="icon">→</span></span>
        </div>
        <div class="edit-item">
          <span class="label">性别</span>
          <span>机器人<span class="icon">→</span></span>
        </div>
        <div class="edit-item">
          <span class="label">生日</span>
          <span>2020-04-01<span class="icon">→</span></span>
        </div>
        <div class="edit-item">
          <span class="label">地区</span>
          <span>中国-北京<span class="icon">→</span></span>
        </div>
        <div class="edit-item">
          <span class="label">名字</span>
          <span>测试员1号<span class="icon">→</span></span>
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
  },
  methods:{
    toBack(){
      this.$router.push('/me')
    }
  }
}
</script>

<style>
  .edit{
    background-color: #101823;

  }
  .edit-warp{
    padding:0 10px;
    box-sizing: border-box;
  }
  .ava-box{
    color: #cccccc;
    text-align: center;
    padding:20px;
  }
  .avatar{
    position: relative;
  }
  .avatar img{
    height:100px;
    width:100px;
    border-radius: 50%;
    margin-bottom:16px;
    opacity: .5;
  }
  .avatar .iconfont{
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%, -50%);
    font-size: 26px;
    color: white;
  }
  .avatar input{
    position: absolute;
    left: 50%;
    top: 50%;
    width: 50%;
    transform: translate(-50%, -50%);
    /* 隐藏按钮 */
    opacity: 0;
  }
  .edit-box{
    border-top: 1px #292831 solid;
    color:#cccccc;
  }
  .edit-item{
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }
  .edit-item .label{
    color:#ffffff;
  }
  .icon{
    margin-left: 10px;
  }
</style>