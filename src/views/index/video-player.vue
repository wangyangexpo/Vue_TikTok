<template>
  <div class="video-player-container">
    <video-player
      class="short-video-player"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
      @statechanged="onStateChange"
      @error="onVideoError"
    />
    <div v-if="isReady" class="duration">
      <div class="duration-bar" :style="durationStyle"></div>
    </div>
    <transition name="scale">
      <svg-icon
        icon-class="video-pause"
        class="video-icon-pause"
        v-if="isReady && !playing"
      ></svg-icon>
    </transition>
    <svg-icon icon-class="video-error" class="video-icon-fail" v-if="isError"></svg-icon>
  </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player';
import 'video.js/dist/video-js.css';

export default {
  name: 'ShortVideo',
  props: ['videoData', 'current'],
  data() {
    return {
      playerOptions: {
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: true, // 导致视频一结束就重新开始。
        preload: 'auto',
        // fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            src: this.videoData.videoUrl, // 路径
            type: 'video/mp4', // 类型
          },
        ],
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controls: false,
        controlBar: false,
      },
      isReady: false,
      duration: 0,
      playing: false,
      playTime: 0,
      isError: false,
    };
  },
  created() {
    if (this.videoData.index === 0) {
      this.playerOptions.autoplay = true;
    }
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  },
  beforeDestroy() {
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
  },
  computed: {
    durationStyle() {
      const width = `${(this.playTime / this.duration) * 100}%`;
      return {
        width,
      };
    },
    playerInstance() {
      return this.$refs.videoPlayer.player;
    },
  },
  methods: {
    handleVisibilityChange() {
      if (!document.hidden) {
        /**
         * 锁屏唤醒，或者切换后台回来，部分安卓机型会页面卡住；
         * 且进程在后台时，js线程不执行，用setTimeout可以延迟执行；
         * 强制调用一次 play 事件触发播放；
         */
        setTimeout(() => {
          if (this.videoData.index === this.current && this.playing) {
            this.playerInstance.play();
          }
        }, 0);
      }
    },
    onVideoError() {
      this.playing = false;
      this.playTime = 0;
      this.isReady = false;
      this.isError = true;
    },
    onStateChange(state) {
      if (this.videoData.index === this.current) {
        // 当前正在播放的slide，监听播放事件
        const { canplay, playing, timeupdate } = state || {};
        if (canplay) {
          this.isReady = true;
          this.duration = this.playerInstance.duration();
        } else if (playing) {
          this.playing = true;
        } else if (timeupdate) {
          this.playTime = timeupdate;
        }
      }
    },
    playOrStop() {
      if (this.playing) {
        this.playerInstance.pause();
        this.playing = false;
      } else {
        this.playerInstance.play();
        this.playing = true;
      }
    },
    play() {
      // 重新载入
      if (this.playerInstance) {
        this.playerInstance.load();
        this.playerInstance.play();
      }
      this.playTime = 0;
      this.playing = true;
    },
    stop() {
      if (this.playerInstance) {
        this.playerInstance.pause();
      }
      this.isReady = false;
      this.isError = false;
      this.playing = false;
    },
  },
  components: {
    videoPlayer,
  },
};
</script>

<style lang="less">
.video-player-container {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('~@assets/video-bg.svg') no-repeat;
  background-position: center 40vh;
  .short-video-player {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    .video-js {
      height: 100%;
      // .vjs-loading-spinner {
      //   display: none;
      // }
      .vjs-error-display {
        display: none;
      }
    }
  }
  .duration {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 12px;
    height: 2px;
    background: rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition: all 0.2s ease-in-out;
    .duration-bar {
      height: 2px;
      border-radius: 0 1px 1px 0;
      background-color: rgba(255, 255, 255, 0.65);
      will-change: width;
    }
  }
  .video-icon-pause {
    width: 48px;
    height: 48px;
    color: rgba(255, 255, 255, 0.25);
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    transition: all 0.1s ease-out;
    pointer-events: none;

    &.scale-enter,
    &.scale-leave-to {
      opacity: 0;
      transform: translate(-50%, -50%) scale(1.5);
    }
  }
  .video-icon-fail {
    width: 128px;
    height: 128px;
    color: rgba(255, 255, 255, 0.15);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
}
</style>
