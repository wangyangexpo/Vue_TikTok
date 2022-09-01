<template>
  <div class="video-share">
    <swiper :options="swiperOption">
      <swiper-slide
        class="video-swiper-slide"
        v-for="(item, index) in dataList"
        :key="`${item.id}-${index}`"
      >
        <div class="video-wrap" :class="{ collapsed: commentVisible }">
          <video-player ref="videos" :videoData="item" :current="index" />
        </div>
        <div class="infobar-warp">
          <info-bar :videoData="item" />
        </div>
        <div class="right-warp">
          <right-bar @showComment="commentVisible = true" :videoData="item" />
        </div>
      </swiper-slide>
    </swiper>

    <!-- 评论 -->
    <comment-list
      :visible="commentVisible"
      :videoData="dataList[0]"
      @totalCountChange="onCommentChange"
      @close="commentVisible = false"
    />
  </div>
</template>

<script>
// 导入播放组件
import InfoBar from './info-bar';
import RightBar from './right-bar';
import VideoPlayer from './video-player';
import CommentList from './comment-list';
import * as VideoApi from '@api/video';

import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  name: 'VideoShare',
  components: {
    VideoPlayer,
    InfoBar,
    RightBar,
    CommentList,
    Swiper,
    SwiperSlide,
  },
  data() {
    const videoId = this.$route.params.id;
    return {
      videoId,
      dataList: [],
      commentVisible: false,
      swiperOption: {
        direction: 'vertical',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        slidesPerView: 1,
        mousewheel: true,
        mousewheelControl: true,
        noSwipingClass: 'prevent-tap',
        // 高度设置，占满设备高度
        height: window.innerHeight,
        resistanceRatio: 0,
        observeParents: true,
        on: {
          tap: (e) => {
            const eventPath = e.path || [];
            const findPrevent = eventPath.find(
              (target) => target.className && target.className.includes('prevent-tap'),
            );
            if (findPrevent) {
              /**
               * 通过点击事件的元素className，判断是否点击的视频本身；
               * 如果点击的是评论，分享，点赞等，不需要触发视频暂停或播放；
               */
            } else if (this.commentVisible) {
              /**
               * 如果评论已经展开，需要收起评论列表；
               */
              this.commentVisible = false;
            } else {
              this.playAction(this.currentIndex);
            }
          },
        },
      },
    };
  },
  created() {
    this.getVideoDetail();
  },
  methods: {
    onCommentChange(videoId, totalCount) {
      this.dataList = this.dataList.map((item) => {
        return {
          ...item,
          commentCount: item.id === videoId ? totalCount : item.commentCount,
        };
      });
    },
    getVideoDetail() {
      VideoApi.getShortVideoDetail({ id: this.videoId }).then((data) => {
        this.dataList = [
          {
            ...data,
            index: 0,
          },
        ];
      });
    },
    playAction() {
      this.$refs.videos[0].playOrStop();
    },
  },
};
</script>

<style lang="less" scoped>
@commentHeight: 500px;

.video-share {
  height: 100vh;
  background: #000;
  background-image: url('~@assets/video-bg.svg');
  background-repeat: no-repeat;
  background-position: center 40vh;
  overflow: hidden;

  .video-swiper-slide {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    .video-wrap {
      height: 100vh;
      transition: height 0.2s ease-in-out;

      &.collapsed {
        height: calc(100vh - @commentHeight);

        /deep/ .video-player-container {
          .duration {
            opacity: 0;
          }
        }
      }
    }
    .infobar-warp {
      position: absolute;
      bottom: 24px;
      left: 0;
    }
    .right-warp {
      position: absolute;
      bottom: 60px;
      right: 16px;
    }
  }
}

@supports (bottom: constant(safe-area-inset-bottom)) or (bottom: env(safe-area-inset-bottom)) {
  .video-share {
    height: calc(100vh - constant(safe-area-inset-bottom));
    height: calc(100vh - env(safe-area-inset-bottom));
  }
  .video-share::after {
    content: '';
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
  .video-wrap {
    height: calc(100vh - constant(safe-area-inset-bottom));
    height: calc(100vh - env(safe-area-inset-bottom));
  }
  .video-swiper-slide {
    height: calc(100vh - constant(safe-area-inset-bottom)) !important;
    height: calc(100vh - env(safe-area-inset-bottom)) !important;
  }
}
</style>
