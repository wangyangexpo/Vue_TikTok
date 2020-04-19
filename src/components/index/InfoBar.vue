<template>
  <div class="info-bar">
    <div class="infobar-item"><span>@测试员一号</span></div>
    <div class="infobar-item"><span>测试文本，使用vuecli实现抖音App</span></div>
    <div class="infobar-item music-item">
      <span class="iconfont icon-yinfu"></span>
      <div class="music-name">
        <span data-text="测试员1号原声">测试员1号原声</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .info-bar{
    color:#ffffff;
    font-size: 16px;
    padding-left: 10px;
  }
  .infobar-item{
    padding:6px 0;
  }
  .infobar-item>.icon-yinfu{
    margin-right: 5px;
  }
  .music-item{
    /* width:200px; */
    /* border:1px solid red; */
    display: flex;
  }
  .music-name{
    width:150px;
    white-space: nowrap;
    overflow: hidden;
    font-size: 14px;
  }
  .music-name>span{
    display: inline-block;
    animation: scroll 5s linear infinite;
  }
  .music-name>span::after{
    content: attr(data-text);
    margin-left: 30px;
  }

  @keyframes scroll{
    from{
      transform: translateX(0);
    }
    to{
      transform: translateX(calc(-50% - 20px));
    }
  }
</style>