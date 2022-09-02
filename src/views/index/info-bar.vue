<template>
  <div class="info-bar">
    <div class="infobar-item">
      {{ videoData.descriptions }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoBar',
  props: ['videoData'],
};
</script>

<style lang="less">
.info-bar {
  color: #ffffff;
  font-size: 16px;
  padding-left: 16px;
  width: 270px;
  box-sizing: border-box;
  .infobar-item {
    font-weight: 400;
    font-size: 14px;
    color: #ffffff;
    line-height: 20px;
    word-break: break-all;
  }
}
</style>
