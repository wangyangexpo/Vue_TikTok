<template>
  <div class="video-list">
    <swiper :options="swiperOption" ref="videoSwiper" class="video-swiper-container">
      <!-- 循环输出 -->
      <swiper-slide
        class="video-swiper-slide"
        :class="{ sliding: isSliding }"
        v-for="item in virtualDataList"
        :key="item.index"
        :virtualInde="item.index"
        :style="{ top: offsetTop + 'px' }"
      >
        <div class="video-wrap" :class="{ collapsed: commentVisible }">
          <video-player :ref="`videos_${item.index}`" :videoData="item" :current="currentIndex" />
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
      :videoData="currentVideoData"
      @totalCountChange="onCommentChange"
      @close="commentVisible = false"
    />
  </div>
</template>

<script>
// 导入swiper组件'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import VideoApi from '@api/video';
import 'swiper/css/swiper.css';

// 导入播放组件
import InfoBar from './info-bar';
import RightBar from './right-bar';
import VideoPlayer from './video-player';
import CommentList from './comment-list';

export default {
  name: 'VideoList',
  components: {
    Swiper,
    SwiperSlide,
    VideoPlayer,
    InfoBar,
    RightBar,
    CommentList,
  },
  data() {
    return {
      isFetching: false,
      currentIndex: 0,
      isSliding: false,
      commentVisible: false,
      swiperOption: {
        // 垂直方向滑动
        direction: 'vertical',
        grabCursor: true,
        setWrapperSize: true,
        // autoHeight: true,
        slidesPerView: 1,
        mousewheel: true,
        mousewheelControl: true,
        noSwipingClass: 'prevent-tap',
        // 高度设置，占满设备高度
        height: window.innerHeight,
        resistanceRatio: 0,
        observeParents: true,
        virtual: {
          slides: [],
          renderExternal: (data) => {
            this.offsetTop = data.offset;
            this.virtualDataList = data.slides;
          },
        },
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
          slideChange: () => {
            const { realIndex } = this.swiper;
            if (realIndex > this.currentIndex) {
              this.nextVideo(realIndex);
            } else {
              this.preVideo(realIndex);
            }
            this.currentIndex = realIndex;
            this.commentVisible = false;
          },
          touchEnd: () => {
            this.isSliding = false;
          },
          sliderFirstMove: () => {
            this.isSliding = true;
          },
        },
      },
      dataList: [],
      virtualDataList: [],
      offsetTop: 0,
    };
  },
  created() {
    this.getVideoList();
  },
  deactivated() {
    if (this.$refs[`videos_${this.currentIndex}`]) {
      this.$refs[`videos_${this.currentIndex}`][0].stop();
    }
  },
  activated() {
    if (this.$refs[`videos_${this.currentIndex}`]) {
      this.$refs[`videos_${this.currentIndex}`][0].play();
    }
  },
  methods: {
    onCommentChange(videoId, totalCount) {
      this.virtualDataList = this.virtualDataList.map((item) => {
        return {
          ...item,
          commentCount: item.id === videoId ? totalCount : item.commentCount,
        };
      });
    },
    getVideoList() {
      if (this.isFetching) {
        return;
      }
      this.isFetching = true;
      const excludeList = this.dataList.slice(-3);
      const lastOne = excludeList[excludeList.length - 1];

      VideoApi.getShortVideoList({
        currentId: lastOne && lastOne.id,
        excludeIds: lastOne && excludeList.map((exc) => exc.id).join(),
      })
        .then((res) => {
          this.dataList = this.dataList.concat(res || []).map((item, index) => ({
            ...item,
            index,
          }));
          this.swiper.virtual.slides = [...this.dataList];
          this.swiper.virtual.update();
        })
        .finally(() => {
          this.isFetching = false;
        });
    },
    playAction(index) {
      this.$refs[`videos_${index}`][0].playOrStop();
    },
    // 上滑
    nextVideo(index) {
      this.$refs[`videos_${index - 1}`][0].stop();
      this.$refs[`videos_${index}`][0].play();
      if (this.dataList.length - index <= 3) {
        this.getVideoList();
      }
    },
    // 下滑
    preVideo(index) {
      this.$refs[`videos_${index + 1}`][0].stop();
      this.$refs[`videos_${index}`][0].play();
    },
  },
  computed: {
    swiper() {
      return this.$refs.videoSwiper.$swiper;
    },
    currentVideoData() {
      return this.dataList[this.currentIndex];
    },
  },
};
</script>

<style lang="less" scoped>
@commentHeight: 500px;

.video-list {
  height: 100vh;
  background-color: #000;
  background-image: url('~@assets/video-bg.svg');
  background-repeat: no-repeat;
  background-position: center 40vh;
  overflow: hidden;

  .video-swiper-container {
    background-color: #000;

    .video-swiper-slide {
      box-sizing: border-box;

      &.sliding {
        .video-wrap {
          /deep/ .video-player-container {
            .duration {
              opacity: 0.2;
              transition: none;
            }
          }
        }
        .infobar-warp {
          opacity: 0.2;
        }
        .right-warp {
          opacity: 0.2;
        }
      }
      .video-wrap {
        height: calc(100vh - @foot-height);
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
        bottom: 72px;
        left: 0;
      }
      .right-warp {
        position: absolute;
        bottom: 108px;
        right: 16px;
      }
    }
  }
}

@supports (bottom: constant(safe-area-inset-bottom)) or (bottom: env(safe-area-inset-bottom)) {
  .video-list {
    height: calc(100vh - constant(safe-area-inset-bottom));
    height: calc(100vh - env(safe-area-inset-bottom));
    .video-swiper-container {
      .video-swiper-slide {
        .video-wrap {
          height: calc(100vh - @foot-height - constant(safe-area-inset-bottom));
          height: calc(100vh - @foot-height - env(safe-area-inset-bottom));
          &.collapsed {
            height: calc(100vh - @commentHeight - constant(safe-area-inset-bottom));
            height: calc(100vh - @commentHeight - env(safe-area-inset-bottom));
          }
        }
        .infobar-warp {
          padding-bottom: constant(safe-area-inset-bottom);
          padding-bottom: env(safe-area-inset-bottom);
        }
        .right-warp {
          padding-bottom: constant(safe-area-inset-bottom);
          padding-bottom: env(safe-area-inset-bottom);
        }
      }
    }
  }
}
</style>
