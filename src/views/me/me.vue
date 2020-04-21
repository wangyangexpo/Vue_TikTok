<template>
  <div class="me">
    <div class="me-top" :style="bgPic">
      <div class="menu-box">
        <div class="menu-icon"></div>
      </div>
    </div>
    <div class="me-wrap">
      <div class="me-content">
        <div class="info">
          <img src="../../assets/img/xxx.jpeg">
          <router-link to="/edit"><button class="btn">编辑资料</button></router-link>
          <button class="btn">+朋友</button>
        </div>
        <div class="des">
          <h2>测试员1号</h2>
          <span>抖音号：111111</span>
          <p>这是一段个人简介</p>
        </div>
        <div class="user-tag">
          <span>18岁</span>
          <span>中国-北京</span>
          <span>+添加学校等标签</span>
        </div>
        <div class="user-tag2">
          <span><a href="#">20w</a>获赞</span>
          <span><a href="#">30w</a>关注</span>
          <span><a href="#">40w</a>粉丝</span>
        </div>
      </div>

      <div class="me-tab">
        <div class="me-navbar">
          <div class="item" @click="changeTab(0)" :class="indexTab==0?'active':''">作品3</div>
          <div class="item" @click="changeTab(1)" :class="indexTab==1?'active':''">动态0</div>
          <div class="item" @click="changeTab(2)" :class="indexTab==2?'active':''">喜欢0</div>
        </div>
        <div class="tab-wrap">

          <div class="tab-con" v-show="indexTab==0">
            <div class="tab-img">
              <img src="../../assets/img/0.jpg" alt="">
              <img src="../../assets/img/1.jpg" alt="">
              <img src="../../assets/img/2.jpg" alt="">
            </div>
          </div>

          <div class="tab-con" v-show="indexTab==1">动态</div>
          <div class="tab-con" v-show="indexTab==2">喜欢</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      bgPic:{
        backgroundImage:'url('+require('../../assets/img/bq.jpg')+')',
        backgroundRepeat:'no-repeat',
        backgroundSize:'100% 100%'
      },
      indexTab:0
    }
  },
  methods:{
    changeTab(index){
      this.indexTab = index;
    }
  }
}
</script>

<style>
  .me{
    position: relative;
  }
  .me-top{
    height:160px;
    display: flex;
    justify-content: flex-end;
    padding:20px;
  }
  .menu-box{
    width:30px;
    height:30px;
    border-radius: 50%;
    background: rgba(0, 0, 0, .3);
    display:flex;
    align-items: center;
    justify-content: center;
  }
  .menu-icon{
    background: white;
    border-top:2px solid white;
    border-bottom:2px solid white;
    background-clip: content-box;
    width:20px;
    height:15px;
    padding:5px 0;
  }
  .me-wrap{
    position: absolute;
    top:140px;
    /* height:100%; */
    width:100%;
    background-color: #101821;
    color:#ffffff;
  }
  .me-content{
    padding:0 20px;
  }
  .info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding-bottom:20px ; */
  }
  .info img{
    height:100px;
    width:100px;
    border-radius: 50%;
    margin-right: 20px;
  }
  .info button{
    height:40px;
    padding:0 24px;
    background-color: #393842;
    border:none;
    color:white;
  }

  .des {
    padding:20px 0;
  }
  .des h2{
    font-size: 24px;
    font-weight: bold;
  }
  .des span{
    padding:10px 0 15px 0;
    /* display: block; */
  }
.des p{
  line-height: 24px;
}
.user-tag span{
  font-size: 14px;
  color: #cccccc;
  margin-right: 5px;
  background: rgba(0, 0, 0, .6);
  padding:5px 8px;
}
.user-tag2{
  padding:20px 0;
}
.user-tag2 span{
  font-size: 14px;
  margin-right: 15px;
  color: #cccccc;
}
.user-tag2 a{
  /* font-size: 18px; */
  margin-right: 5px;
  color: #cccccc;
}
.me-tab{
  height:300px;

}
.me-navbar{
  display: flex;
  padding:0 20px;
  justify-content: space-between;
  align-items: center;
}
.me-navbar .item{
  padding:10px 25px;
  color:#cccccc;
}
.me-navbar .active{
  border-bottom:2px solid #ffdf0e;
  color:white;
}

.tab-img img{
  width:33.3%;
  height:150px;
}
</style>