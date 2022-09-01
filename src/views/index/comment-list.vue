<template>
  <transition name="up">
    <div class="comment-warp" v-if="visible">
      <div class="comment-top">
        <div class="number">{{ totalCount }} 条评论</div>
        <svg-icon icon-class="close" class="icon-close" @click="hide" />
      </div>

      <div class="comment-body">
        <div class="comment-box">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoadMore"
          >
            <div v-for="item in commentList" :key="item.id" class="comment-item">
              <div class="user-pic">
                <van-image class="avatar" round :src="item.picture" />
              </div>
              <div class="item-info">
                <div class="reply-name">{{ item.nickName }}</div>
                <comment-content :content="item.content" class="reply-content" />
                <div class="reply-time">{{ item.commentTime | formatDate('YYYY-MM-DD') }}</div>
              </div>
            </div>
          </van-list>
        </div>
        <!-- 评论框 -->
        <div class="reply-input">
          <input
            type="text"
            v-model="commentValue"
            placeholder="留下你的精彩评论"
            autocomplete="off"
            maxlength="200"
          />
          <span class="send-btn" @click="sendComment">发送</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import CommentContent from './comment-content-item.vue';
import VideoApi from '@api/video';

export default {
  name: 'CommentList',
  props: ['videoData', 'visible'],
  components: {
    CommentContent,
  },
  data() {
    return {
      commentValue: '',
      commentList: [],
      totalCount: 0,
      pageNum: 1,
      pageSize: 10,
      loading: false,
      finished: false,
    };
  },
  methods: {
    hide() {
      this.$emit('close');
    },
    sendComment() {
      if (!this.commentValue || !this.commentValue.trim()) {
        return;
      }
      VideoApi.addVideoComment({
        sourceType: 4,
        sourceId: this.videoData.id,
        content: this.commentValue,
      }).then(() => {
        this.pageNum = 1;
        this.finished = false;
        this.commentList = [];
        this.onLoadMore();
      });
      this.commentValue = '';
    },
    onLoadMore() {
      this.loading = true;
      VideoApi.getVideoCommentList({
        sourceId: this.videoData.id,
        sourceType: 4,
        pageNum: this.pageNum,
        pageSize: this.pageSize,
      })
        .then((data) => {
          const { list, totalCount } = data || {};
          if (this.pageNum === 1) {
            this.commentList = list;
          } else {
            this.commentList = this.commentList.concat(list || []);
          }
          if (this.commentList.length >= totalCount) {
            this.finished = true;
          }
          this.totalCount = totalCount;
          this.loading = false;
          this.pageNum += 1;
          if (totalCount !== this.videoData.commentCount) {
            this.$emit('totalCountChange', this.videoData.id, totalCount);
          }
        })
        .catch(() => {
          this.loading = false;
          this.finished = true;
          this.totalCount = 0;
        });
    },
  },
  watch: {
    visible() {
      if (!this.visible) {
        this.commentList = [];
        this.totalCount = 0;
        this.pageNum = 1;
        this.finished = false;
        this.loading = false;
        this.commentValue = '';
      }
    },
  },
};
</script>

<style lang="less" scoped>
@commentHeight: 500px;

.comment-warp {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: @commentHeight;
  width: 100%;
  background: #fff;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  z-index: 1001;
  padding: 12px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.comment-top {
  display: flex;
  padding: 0 12px;
  align-items: center;
  justify-content: space-between;
  .number {
    font-weight: 500;
    font-size: 16px;
    color: #303133;
    line-height: 24px;
  }
  .icon-close {
    padding: 4px;
    width: 15px;
    height: 15px;
    color: #191919;
  }
}

.comment-body {
  overflow: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  .comment-box {
    flex: 1;
    overflow: auto;
    padding: 0 12px;

    /deep/ .van-list__finished-text {
      color: @placeholder-color;
      font-size: 12px;
    }
  }

  .comment-item {
    display: flex;
    align-items: flex-start;
    .user-pic {
      flex-shrink: 0;
      .avatar {
        height: 26px;
        width: 26px;
        display: block;
      }
    }
    .item-info {
      flex: 1;
      padding-bottom: 12px;
      border-bottom: 1px solid #ececec;
      margin-left: 8px;
      .reply-name {
        height: 26px;
        line-height: 26px;
        text-align: left;
        font-weight: 500;
        font-size: 14px;
        color: #292d33;
      }

      .reply-content {
        margin-top: 8px;
      }

      .reply-time {
        margin-top: 4px;
        font-weight: 400;
        font-size: 12px;
        color: #8d93a0;
      }
    }
  }

  .comment-item + .comment-item {
    margin-top: 12px;
  }

  .reply-input {
    flex-shrink: 0;
    width: 100%;
    height: 48px;
    background: #ffffff;
    display: flex;
    align-items: center;
    padding: 0 0 0 12px;
    box-sizing: border-box;
    box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05);

    input {
      flex: 1;
      line-height: 32px;
      border: none;
      padding: 0 12px;
      background: #f7f9fc;
      border-radius: 16px;
      font-size: 14px;
    }
    .send-btn {
      padding: 6px 12px;
      color: @theme-color;
    }
  }
}

.up-enter-active,
.up-leave-active {
  transition: all 0.2s ease-in-out;
}
.up-enter,
.up-leave-to {
  opacity: 1;
  transform: translateY(100%);
}

@supports (bottom: constant(safe-area-inset-bottom)) or (bottom: env(safe-area-inset-bottom)) {
  .reply-input {
    height: calc(@commentHeight + constant(safe-area-inset-bottom));
    height: calc(@commentHeight + env(safe-area-inset-bottom));
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }

  .comment-warp {
    height: calc(@commentHeight + constant(safe-area-inset-bottom));
    height: calc(@commentHeight + env(safe-area-inset-bottom));
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
}
</style>
