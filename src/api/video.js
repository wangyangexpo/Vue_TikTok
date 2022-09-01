import request from './request';

// 查询短视频列表
export const getShortVideoList = (params) => {
  return request.get('/video/list', params);
};

// 查询短视频详情
export const getShortVideoDetail = (params) => {
  return request.get('/video/detail', params);
};

// 记录短视频观看过
export const setShortVideoRead = (params) => {
  return request.post('/video/read', params);
};

// 短视频点赞和评论点赞，sourceType: 4-短视频，1-评论
export const thumbUpVideo = (params) => {
  return request.post('/video/like', params);
};

// 查询评论列表
export const getVideoCommentList = (params) => {
  return request.get('/video/commentList', params);
};

// 查询评论列表
export const addVideoComment = (params) => {
  return request.post('/video/addComment', params);
};
