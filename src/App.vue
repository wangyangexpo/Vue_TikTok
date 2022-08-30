<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
@supports (bottom: constant(safe-area-inset-bottom)) or
  (bottom: env(safe-area-inset-bottom)) {
  body {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    -webkit-overflow-scrolling: touch;
  }
  #app {
    font-family: -apple-system, Helvetica Neue, Arial, Segoe UI, PingFang SC,
      Hiragino Sans GB, STHeiti, Microsoft YaHei, Microsoft JhengHei,
      Source Han Sans SC, Noto Sans CJK SC, Source Han Sans CN, Noto Sans SC,
      Source Han Sans TC, Noto Sans CJK TC, WenQuanYi Micro Hei, SimSun,
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}
</style>
