# 滑动播放短视频

本项目基于 github 项目 [Vue_Douyin](https://github.com/SeptemberQiu/Vue_Douyin) 对原有视频播放模块进行二次开发；原项目作为示例 poc，只做了基本功能的视频 + 滑动播放组合，且在生产环境（真机调试）有很多未解决的 bug，本项目经过真实生产环境检验，修复了绝大部分遗留 bug，解决了移动端安全区域遮挡等显示问题，具体效果可以下载代码本地调试。

```bash
yarn install
yarn run serve
# http://localhost:8000
```

### 修复问题记录

- [x] `swiper` 上的 `tap` 事件不能阻止冒泡；
- [x] 点赞，评论，分享按钮被 `video` 标签遮挡，导致闪烁；
- [x] `virtual slide` 虚拟滚动实现问题；
- [x] 部分安卓机，竖版视频不能自动撑开高度问题；
- [x] slideNextTransitionStart，slidePrevTransitionStart 在 `virtual slide` 场景下，部分手势不触发问题；
- [x] `swiper slide` 在 `overflow：hidden` 场景下依然出现滚动效果（偶现）；
- [x] 手机锁屏，切换应用到后台再回来，部分安卓机型视频播放卡住，需要点击 2 次屏幕才能触发播放；
- [x] `window.innerHeight` 在首次进入页面，表现不一致的问题，改用 `document.documentElement.clientHeight` 解决；http://t.zoukankan.com/xiaoyucoding-p-7593864.html

### 涉及技术栈

1. vue + vuex + vue-router
2. vantui
3. axios + mockjs
4. 移动端自适应布局（vw）
5. vue-awesome-swiper（虚拟滚动）
6. vue-video-player
7. less style
8. svg 图标（svg-sprite-loader）

### 部分页面截图

#### 视频滑动页

<img src="./screenshot/home.png" width="390" height="850"/>

<img src="./screenshot/comment.png" width="390" height="850"/>

#### 视频分享页

<img src="./screenshot/share.png" width="390" height="850"/>

### 如果觉得不错给个小星星

有任何问题可以提 issue 讨论，欢迎交流；
