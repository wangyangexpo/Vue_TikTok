<template>
  <div class="auto-hide-wrap">
    <div ref="content" v-auto-hidden>
      {{ content }}
    </div>
    <div class="expand-all" @click="expandAll">{{ isExpand ? '收起' : '展开' }}</div>
  </div>
</template>

<script>
const LINE_HEIGHT = 20;
const LINE_NUMBER = 4;

export default {
  name: 'CommentContent',
  props: {
    content: String,
  },
  data() {
    return {
      isExpand: false,
    };
  },
  directives: {
    autoHidden: {
      inserted(el) {
        const { height } = el.getBoundingClientRect();
        const safeHeight = Math.ceil((window.innerWidth / 375) * LINE_HEIGHT * LINE_NUMBER);
        if (height > safeHeight) {
          // eslint-disable-next-line
          el.className = 'show-expand trigger-hidden';
        }
      },
    },
  },
  methods: {
    expandAll() {
      if (!this.isExpand) {
        this.$refs.content.className = 'show-expand';
        this.isExpand = true;
      } else {
        this.$refs.content.className = 'show-expand trigger-hidden';
        this.isExpand = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.auto-hide-wrap {
  font-weight: 400;
  font-size: 14px;
  color: #1b1f26;
  line-height: 20px;
  word-break: break-all;

  & .trigger-hidden {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  & .show-expand + .expand-all {
    display: inline-block;
  }

  & .expand-all {
    display: none;
    font-weight: 500;
    color: #0095ff;
  }
}
</style>
