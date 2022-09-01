<template>
  <div class="right-bar">
    <div class="item-icon prevent-tap" @click.stop="clickThumbUp">
      <svg-icon icon-class="thumb" :class="{ 'icon-thumb-up': thumbUp }"></svg-icon>
      <div class="count">{{ likeCount | omitDisplay }}</div>
    </div>
    <div class="item-icon prevent-tap" @click.stop="showCom">
      <svg-icon icon-class="comment"></svg-icon>
      <div class="count">{{ (videoData.commentCount || 0) | omitDisplay }}</div>
    </div>
    <div class="item-icon prevent-tap" @click.stop="showShare">
      <svg-icon icon-class="share" class="icon-share"></svg-icon>
      <div class="share">分享</div>
    </div>
    <div class="very-important-empty-box"></div>
  </div>
</template>

<script>
import * as VideoApi from '@api/video';

export default {
  name: 'InfoBar',
  props: ['videoData'],
  data() {
    const { likeStatus, likeCount } = this.videoData;
    return {
      thumbUp: likeStatus === 'Y',
      likeCount: likeCount || 0,
    };
  },
  methods: {
    showCom(e) {
      e.preventDefault();
      this.$emit('showComment');
    },
    showShare(e) {
      e.preventDefault();
    },
    clickThumbUp(e) {
      e.preventDefault();
      this.thumbUp = !this.thumbUp;
      if (this.thumbUp) {
        this.likeCount += 1;
      } else {
        this.likeCount -= 1;
      }
      VideoApi.thumbUpVideo({
        sourceId: this.videoData.id,
        sourceType: 4,
        status: this.thumbUp ? 'Y' : 'N',
      });
    },
  },
};
</script>

<style lang="less" scoped>
.right-bar {
  width: 32px;

  .item-icon {
    height: 60px;
    text-align: center;
    padding-top: 14px;

    & .svg-icon {
      width: 32px;
      height: 32px;
      color: #fff;
    }

    & .icon-thumb-up {
      color: red;
    }

    & .icon-share {
      width: 30px;
      height: 30px;
    }

    & .count {
      color: #fff;
      font-size: 14px;
      padding-top: 4px;
      font-weight: 500;
      white-space: nowrap;
    }

    & .share {
      color: #fff;
      font-size: 12px;
      padding-top: 4px;
      font-weight: 500;
    }
  }

  /**
   * 不要删除这个，没有这个div真机会有bug。
   * 大概原因：有一个动画div，会强制页面渲染这个区域，不然会被video遮盖，出现闪烁的情况。
   */
  .very-important-empty-box {
    height: 0;
    width: 0;
    animation: round 6s 0s linear infinite;
  }
  @keyframes round {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
