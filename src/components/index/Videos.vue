<template>
  <div class="videos">
     <video-player  class="video-player vjs-custom-skin"
          ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"></video-player> 
  </div>
</template>

<script>
// import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
export default {
  name:'Videos',
  //子组件接收父组件(VideoList)
  props:['videoList','index'] ,
  data(){
    return{
      playerOptions : {
          autoplay: false, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          preload: 'auto', 
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [
              {
                  src: this.videoList.url,  // 路径
                  type: 'video/mp4'  // 类型
              }, 
          ],
          width: document.documentElement.clientWidth,
          notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar:false
      },
      playing:true
    }
},
created(){
  this.autoPlayAction();
},
methods:{
  playOrStop(){
    if(this.playing){
      this.$refs.videoPlayer.player.pause();
      this.playing = false;
    }else{
      this.$refs.videoPlayer.player.play();
      this.playing = true;
    }
  },
  //自动播放第一个视频
  autoPlayAction(){
    if(this.index == 0){
      this.playerOptions.autoplay = true;
    }
  },

  play(){
    //重新载入
    this.$refs.videoPlayer.player.load();
    this.$refs.videoPlayer.player.play();
    this.playing = true;
  },
  stop(){
    this.$refs.videoPlayer.player.pause();
    this.playing = false;
  }
},
  components: {
    videoPlayer
  }
}
</script>

<style>
  .videos{
    position: relative;
  }
  .videos .vjs-custom-skin >.video-js .vjs-big-play-button{
    background: rgba(0,0,0,0.4);
    font-size: 30px;
    border-radius: 50%;
    width:50px;
    height:50px;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }

</style>