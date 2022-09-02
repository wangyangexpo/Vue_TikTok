<template>
  <div class="right-bar">
    <div class="rightbar-item">
      <div class="avatar-border">
        <svg
          class="icon-thumb"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
        >
          <path
            d="M42.666667 896h170.666666V384H42.666667v512z m938.666666-469.333333c0-47.146667-38.186667-85.333333-85.333333-85.333334H626.56l40.746667-194.986666c0.853333-4.266667 1.493333-8.746667 1.493333-13.44 0-17.706667-7.253333-33.706667-18.773333-45.226667L604.586667 42.666667 323.626667 323.626667C308.266667 339.2 298.666667 360.533333 298.666667 384v426.666667c0 47.146667 38.186667 85.333333 85.333333 85.333333h384c35.413333 0 65.706667-21.546667 78.506667-52.053333l128.64-300.8A85.333333 85.333333 0 0 0 981.333333 512v-81.706667l-0.426666-0.426666L981.333333 426.666667z"
            fill="#fff"
          ></path>
        </svg>
        <span class="iconfont icon-jia-tianchong"></span>
      </div>
    </div>
    <div class="item-icon prevent" @click.stop="showCom($event)">
      <svg
        class="icon-comment"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
      >
        <path
          d="M981.333333 490.666667C981.333333 243.242667 780.757333 42.666667 533.333333 42.666667S85.333333 243.242667 85.333333 490.666667c0 81.834667 21.930667 158.549333 60.245334 224.554666L89.045333 884.906667a42.666667 42.666667 0 0 0 51.456 54.741333l188.330667-50.218667A446.122667 446.122667 0 0 0 533.333333 938.666667C780.757333 938.666667 981.333333 738.090667 981.333333 490.666667zM320 554.666667a64 64 0 1 1 0-128 64 64 0 0 1 0 128z m277.333333-64a64 64 0 1 1-128 0 64 64 0 0 1 128 0z m149.333334 64a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
          fill="#fff"
        ></path>
      </svg>
      <p>1w</p>
    </div>
    <div class="item-icon" @click.stop="showCom($event)">
      <svg
        class="icon-share"
        viewBox="0 0 1252 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
      >
        <path
          d="M789.325694 62.559305h0.28436-0.28436M773.970228 0c-28.436048 0-56.872096 22.748838-56.872096 69.952678V250.237222l-32.132734 1.706162a682.46515 682.46515 0 0 0-398.104671 142.18024C142.689964 511.848862 27.239609 708.626314 0.509724 961.991501A54.881572 54.881572 0 0 0 46.860483 1023.697725a22.748838 22.748838 0 0 0 7.393372 0 48.056921 48.056921 0 0 0 43.507153-25.308083C236.244562 799.337307 532.26382 767.773294 677.572025 767.773294h39.810467v193.080765A59.715701 59.715701 0 0 0 776.529472 1023.697725a65.11855 65.11855 0 0 0 46.350758-20.758315l389.858217-412.038334c50.047444-52.037968 52.606689-106.066459 2.559244-158.104427L815.202497 17.91471A56.872096 56.872096 0 0 0 773.970228 0z"
          fill="#fff"
        ></path>
      </svg>
      <p>1w</p>
    </div>
    <div class="item-icon" @click.stop="showCom($event)">
      <span class="iconfont icon-fenxiang prevent"></span>
      <p>1w</p>
    </div>
    <div class="rightbar-item">
      <div class="right-music">
        <img src="../../assets/img/xxx.jpeg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // VideoList.vue传过来的
  props: ['showComment'],
  data () {
    return {};
  },
  methods: {
    showCom (e) {
      e.preventDefault();
      this.$emit('changeCom', this.showComment);
    },
  },
};
</script>

<style>
/* .right-bar {
    width:80px;
    border:1px solid red;
  } */
.rightbar-item {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
}
.avatar-border {
  height: 50px;
  width: 50px;
  border: 1px white solid;
  border-radius: 50%;
  position: relative;
  text-align: center;
}
.avatar-border img {
  height: 49px;
  width: 49px;
  border-radius: 50%;
}
.icon-jia-tianchong {
  color: red;
  position: absolute;
  top: 35px;
  left: 0;
  right: 0;
}
.item-icon {
  height: 60px;
  text-align: center;
  padding-top: 14px;
}
.item-icon .iconfont {
  color: #ffffff;
  font-size: 35px;
}
.item-icon p {
  color: #ffffff;
  font-size: 14px;
  padding-top: 5px;
}
.right-music {
  height: 54px;
  width: 54px;
  background: #2e2e2e;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  animation: round 6s 0s linear infinite;
}
.right-music img {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}

@keyframes round {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
