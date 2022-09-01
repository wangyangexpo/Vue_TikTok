<template>
  <div id="app-footer">
    <div class="wrap-footer">
      <div class="footer-item">
        <router-link to="/index">
          <svg-icon icon-class="home-icon" />
          <span>首页</span>
        </router-link>
      </div>
      <div class="footer-item">
        <router-link to="/friend">
          <svg-icon icon-class="friend-icon" />
          <span>同城</span>
        </router-link>
      </div>
      <div class="footer-item">
        <router-link to="/myself">
          <svg-icon icon-class="mine-icon" />
          <span>我的</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style lang="less" scoped>
#app-footer {
  width: 100%;
  height: @foot-height;
  position: fixed;
  bottom: 0;
  box-shadow: 0 -1px 7px 0 rgba(205, 205, 205, 0.1);
  box-sizing: border-box;
  background-color: #000;
  z-index: 1000;

  .wrap-footer {
    height: 100%;
    display: flex;
    padding: 0 4%;
    align-items: center;
    justify-content: space-between;
  }
  .footer-item {
    width: 20%;
    text-align: center;
    position: relative;
    a {
      color: rgba(255, 255, 255, 0.65);
      font-size: 12px;
      font-weight: 500;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .svg-icon {
        width: 24px;
        height: 24px;
      }
    }

    .router-link-active {
      color: rgba(255, 255, 255, 1);
    }
  }
}

@supports (bottom: constant(safe-area-inset-bottom)) or (bottom: env(safe-area-inset-bottom)) {
  #app-footer {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    height: calc(@foot-height + constant(safe-area-inset-bottom));
    height: calc(@foot-height + env(safe-area-inset-bottom));
  }
}
</style>
