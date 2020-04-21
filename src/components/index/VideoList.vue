<template>
  <div class="video-list">
    <swiper :options="swiperOption">
      <!-- 幻灯内容 -->
      <!-- 循环输出 -->
      <swiper-slide v-for="(item,index) in dataList" :key="index">
        <div>
          <!-- ref：节点 -->
          <videos ref="videos" :videoList="item" :index="index"></videos>
        </div>
        <div class="infobar-warp">
          <info-bar></info-bar>
        </div>
        <div class="right-warp">
          <!-- 接收RightBar.vue穿过来的方法 -->
          <right-bar @changeCom="showCom"></right-bar>
        </div>
      </swiper-slide>    
      <!-- <swiper-slide>slide2</swiper-slide> 
      <swiper-slide>slide1</swiper-slide>    
      <swiper-slide>slide2</swiper-slide>  -->
    </swiper>

    <!-- 评论 -->
    <transition name="up"> 
    <div class="comment-warp" v-if="showComment">
      <div class="comment-list">

        <div class="comment-top">
          <div class="number">15.0w评论</div>
          <div class="close" @click="close"><span>x</span></div>
        </div>

        <div class="comment-body">
          <div class="comment-box">
            <div class="comment-item">
              <div class="user-pic"><img src="../../assets/img/xxx.jpeg"></div>
              <div class="item-info">
                <div class="reply">
                  <p class="name">测试员</p>
                  <p class="reply-des">这是一段评论测试内容 <span class="time">04-20</span></p>
                </div>
                <div class="zan"><span class="iconfont icon-aixin"></span><p>200</p></div>
              </div>
            </div>
            <!-- 评论框 -->
            <div class="reply-input">
              <input type="text" name="" id="" placeholder="留下你的精彩评论">
              <span class="at1">@</span>
              <span class="iconfont icon-pinglun"></span>
            </div>
          </div>
        </div>

      </div>
    </div>
    </transition>
  </div>
</template>

<script>
//导入swiper组件'
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
//导入播放组件
import Videos from '../../components/index/Videos'
import InfoBar from './InfoBar'
import RightBar from './RightBar'
export default {
  name:'VideoList',
  components:{
    //注册swiper组件
    Swiper,
    SwiperSlide,
    Videos,
    InfoBar,
    RightBar
  },
  methods:{
    playAction(index){
      this.$refs.videos[index].playOrStop()
    },
    //上滑
    nextVideo(index){
      //通过DOM元素来获取子组件的方法
      //上一个视频停止
      this.$refs.videos[index-1].stop();
      //下一个视频开始
      this.$refs.videos[index].play();
    },
    //下滑
    preVideo(index){
      this.$refs.videos[index+1].stop();
      this.$refs.videos[index].play();
    },
    //弹出评论
    showCom(){
      this.showComment = true;
    },
    close(){
      this.showComment = false;
    }


  },
  // directives:{
  //   swiper:directive
  // },
  data(){
    return{
      showComment:false,
      page:1,
      swiperOption: {
        //垂直方向滑动
        direction:"vertical",
        grabCursor: true, 
        setWrapperSize: true, 
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1,
        mousewheel: true, 
        mousewheelControl: true, 
        // 高度设置，占满设备高度
        height: window.innerHeight,
        resistanceRatio: 0, 
        observeParents: true, 

        on:{
          //详见：https://www.swiper.com.cn/api/event/226.html
          tap:() => {
            // console.log('1111');
            this.playAction(this.page-1);
          },
          //上滑
          //详见：https://www.swiper.com.cn/api/event/290.html
          slideNextTransitionStart: () => {
          // alert('开始切换');
            this.page += 1;
            this.nextVideo(this.page-1);
            console.log(this.page);
          },
          slidePrevTransitionStart: () =>{
            if(this.page>1){
              this.page -= 1;
              this.preVideo(this.page-1);
              console.log(this.page);
            }
          }    
        }
      },
  dataList:[
        {
          id:"1",
          url:"http://video.jishiyoo.com/3720932b9b474f51a4cf79f245325118/913d4790b8f046bfa1c9a966cd75099f-8ef4af9b34003bd0bc0261cda372521f-ld.mp4"
        },
        {
          id:"2",
          url:"http://video.jishiyoo.com/1eedc49bba7b4eaebe000e3721149807/d5ab221b92c74af8976bd3c1473bfbe2-4518fe288016ee98c8783733da0e2da4-ld.mp4"
        },
        {
          id:"3",
          url:"http://video.jishiyoo.com/549ed372c9d14b029bfb0512ba879055/8e2dc540573d496cb0942273c4a4c78c-15844fe70971f715c01d57c0c6595f45-ld.mp4"
        },
        {
          id:"4",
          url:"http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4"
        }

      ] 
    }
}
}
</script>

<style>
  .video-list{
    height:100%;
  }
  .swiper-container{
    height:100%;
    position: relative;
  }
  .infobar-warp{
    position: absolute;
    bottom:55px;
    left:0;
  }
  .right-warp{
    position: absolute;
    bottom: 50px;
    right:10px;
  }
  /* 评论 */
  .up-enter-active, .up-leave-active {
    transition: all .5s;
  }
  .up-enter, .up-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 1;
    transform: translateY(100%);
  }

  .comment-warp{
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    height:500px;
    width: 100%;
    background:white ;
    border-top-left-radius:10px;
    border-top-right-radius: 10px;
    z-index:999;
    padding:10px 10px;
    box-sizing: border-box;
  }
  .comment-top{
    display: flex;
    align-items: center;
  }
  .number{
    flex-grow: 1;
    text-align: center;
  }
  .close{
    padding-right:10px;
    font-size: 30px;
    color:#666;
  }
  .comment-body{
    max-width: 450px;
    overflow: auto;
    margin-top: 20px;
  }
  .comment-item{
    display: flex;
  }
  .user-pic img{
    height:33px;
    width:33px;
    border-radius: 50%;

  }
  .item-info{
    margin-left: 10px;
    display: flex;
    flex:1 1 auto;
  }
  .reply{width:90%;}
  .reply-des{line-height: 24px;}
  .reply .name{
    color:#666;
    font-size: 14px;
    margin-bottom: 10px;
  }
  .reply .time{
    color:#666;
  }
  .zan{text-align: center;}
  .zan .iconfont{
    font-size:20px;
  }
  .zan p{
    color:#cccccc;
    margin-top: 5px;
  }

  .reply-input{
    width:100%;
    height:50px;
    position: fixed;
    bottom: 0;
    left:0;
    right:0;
    background: #ffffff;
    display: flex;
    align-items: center;
  }
  .reply-input input{
    line-height: 40px;
    width: 70%;
    border: none;
    padding:0 10px;
  }
  .reply-input .at1{
    font-size: 30px;
    color: #cccccc;
    margin-right: 8%;
  }
  .reply-input .iconfont{
    font-size: 30px;
    color: #cccccc;
  }
</style>