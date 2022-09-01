/*
  -json数据键名需要和 api中的键名一一对应，比如 api/index.js 中的 getEnumTypes
  -支持mockjs数据参数，具体语法参照mockjs官方文档[http://mockjs.com/examples.html]
  -参数的格式, 最终都会转成 { code: 0, data: xxx }的形式返回
*/
import Mock from 'mockjs';

const getVideoUrl = (index) => {
  const urlArr = [
    '//www.w3schools.com/html/movie.mp4',
    '//clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
    '//vjs.zencdn.net/v/oceans.mp4',
    '//www.w3school.com.cn/example/html5/mov_bbb.mp4',
  ];
  return urlArr[index % urlArr.length];
};

export default {
  getDataExample_number: 1000,
  getDataExample_string: '@title',
  getDataExample_array: {
    'data|5': [{ label: '@name', value: '@guid' }],
  },
  getDataExample_object: { name: '@name', 'age|18-28': 1 },

  getShortVideoList: {
    code: 0,
    data: Array(10)
      .fill(0)
      .map((_, index) => ({
        id: '@uuid',
        descriptions: '@cparagraph(1, 5)',
        videoUrl: getVideoUrl(index),
        likeCount: '@integer(0, 10)',
        likeStatus: 'N',
        commentCount: '@integer(0, 10)',
      })),
  },

  getShortVideoDetail: {
    code: 0,
    data: {
      id: '@uuid',
      descriptions: '@cparagraph(1, 5)',
      videoUrl: '//www.w3schools.com/html/movie.mp4',
      likeCount: '@integer(0, 10)',
      likeStatus: 'N',
      commentCount: '@integer(0, 10)',
    },
  },

  thumbUpVideo: {
    code: 0,
    data: null,
  },
  getVideoCommentList: {
    code: 0,
    data: {
      pageNum: 1,
      pageSize: 10,
      totalCount: 20,
      'list|5': [
        {
          id: '@uuid',
          sourceId: '@uuid',
          picture: Mock.Random.image('100x100'),
          nickName: '@cname',
          commentTime: 1661936422000,
          content: '@cparagraph(1, 6)',
        },
      ],
    },
  },
};
