<template>
  <div class="follow"></div>
</template>

<script>
export default {};
</script>

<style lang="less">
@backgroundColor: #000;

.follow {
  height: 100vh;
  background: @backgroundColor;
  overflow: hidden;

  .body {
    height: calc(100vh - @foot-height);
    overflow: auto;

    .content {
      // 这里是页面内容样式
    }
  }

  .footer {
    height: @foot-height;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
  }
}

@supports (bottom: constant(safe-area-inset-bottom)) or (bottom: env(safe-area-inset-bottom)) {
  .follow {
    height: calc(100vh - constant(safe-area-inset-bottom));
    height: calc(100vh - env(safe-area-inset-bottom));

    .body {
      height: calc(100vh - @foot-height - constant(safe-area-inset-bottom));
      height: calc(100vh - @foot-height - env(safe-area-inset-bottom));
    }

    .footer {
      height: calc(@foot-height + constant(safe-area-inset-bottom));
      height: calc(@foot-height + env(safe-area-inset-bottom));
      padding-bottom: constant(safe-area-inset-bottom);
      padding-bottom: env(safe-area-inset-bottom);
    }
  }
}
</style>
