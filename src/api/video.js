import request from './request';
import proxy from './proxy';

export default proxy({
  // 查询短视频列表
  getShortVideoList(params) {
    return request.get('/video/list', params);
  },

  // 查询短视频详情
  getShortVideoDetail(params) {
    return request.get('/video/detail', params);
  },

  // 短视频点赞和评论点赞
  thumbUpVideo(params) {
    return request.post('/video/like', params);
  },

  // 查询评论列表
  getVideoCommentList(params) {
    return request.get('/video/commentList', params);
  },

  // 查询评论列表
  addVideoComment(params) {
    return request.post('/video/addComment', params);
  },
});
