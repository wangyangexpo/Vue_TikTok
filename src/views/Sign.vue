<template>
  <div class="sign">
    <div class="sign-header">
      <router-link to="/me" class="icon" >x</router-link>
      <span>帮助</span>
    </div>
    <div class="sign-content">
      <div class="des">
        <h2>登录后可展示自己</h2>
        <p>登录即表明同意<a href="#">抖音协议</a>和<a href="#">隐私政策</a></p>
      </div>
      <div class="sign-box">
        <div class="sele">
          <select class="sele-controll" v-model="telErea">
            <option value="">+86</option>
          </select>
        </div>
        <div class="inp">
          <input v-model="phone" @input="changeTel" type="text" class="inp-controll" placeholder="请输入手机号">
        </div>
      </div>
      <div class="not-sign">
        <p>未注册手机号验证后将自动登录</p>
      </div>
      <div class="code-btn">
        <button :disabled="disabled" :class="[btnBg?'active':'']">获取短信验证码</button>
      </div>
      <div class="other">
        <router-link tag="a" to="/tpsign">密码登录</router-link>
        <span @click="show">其他方式登录</span>
      </div>
    </div>

    <transition name="up">
    <div class="mask" v-if="showMask">
      <div class="oauth">
        <ul>
          <li class="oauth-item">今日头条登录</li>
          <li class="oauth-item">QQ登录</li>
          <li class="oauth-item">微信登录</li>
          <li class="oauth-item">微博登录</li>
          <li @click="close" class="oauth-item">取消</li>
        </ul>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  data(){
    return{
      telErea:'',
      showMask:false,
      disabled:true,
      btnBg:false,
      phone:''
    }
  },
  methods:{
    show(){
      this.showMask = true;
    },
    close(){
      this.showMask = false;
    },
    changeTel(e){
      this.phone = e.target.value;
      // 手机号码正则
      var regtel = /^1[345789]{1}\d{9}$/;
      if(regtel.test(this.phone)){
        this.btnBg = true;
        this.disabled = false;
      }else{
        this.btnBg = false;
        this.disabled = true;
      }
    }
  }
}
</script>

<style>
  .sign{
    padding:30px;

  }
  .sign-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
  .icon{
    font-size: 30px;
  }
  .sign-content{
    padding:40px 10px;
  }
  .des h2{
    font-size: 24px;
    font-weight: bold;
  }
  .des p{
    line-height:50px;
    color: #666;
  }
  .des p a{
    color:#628088;
    padding:0 5px;
  }
  .sign-box{
    display: flex;
    height:50px;
    align-items: center;
    background: #f9f9f9;
  }
  .sele-controll{
    background: #f9f9f9;
    height: 36px;
    font-weight: bold;
    margin-left:5px;
    border:none ;
  }
  .inp-controll{
    height:36px;
    background: #f9f9f9;
    border: none;
    width: 90%;
    margin-left: 10px;
  }
  /* 光标颜色 */
  input{
    caret-color: #fe2c55;
  }
  input::-webkit-input-placeholder{
    color:#cccccc;
  }
  .not-sign p{
    color: #cccccc;
    font-size: 14px;
    margin-top: 10px;
  }
  .code-btn button{
    margin: 20px 0;
    width:100%;
    padding:15px 0;
    border: none;
    color: #ffffff;
  }
  .active{
    color:#ffffff;
    background:#fe2c55;
  }
  .other{
    display: flex;
    justify-content:space-between;
  }
  .other a{
    color:#628088;
  }

  .mask{
    width:100%;
    height:100%;
    position: fixed;
    top: 0;
    left:0;
    background: rgba(0, 0, 0, .4);
  }
  .oauth{
    height:48%;
    width:100%;
    position: absolute;
    bottom: 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: white;
    text-align: center;
  }
  .oauth-item{
    border-bottom: 1px solid #f5f5f5;
    line-height: 63px;
  }


  .up-enter-active, .up-leave-active {
    transition: all .5s;
  }
  .up-enter, .up-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 1;
    transform: translateY(100%);
  }
</style>