// 专门处理漫画相关的接口请求
// 引入封装好的axios
import request from '@/utils/request'

// 一个接口就暴露一个函数

// 获取轮播图
export const getBanner = () => {
  // return的是接口调用之后，axios返回的Promise对象
  return request({
    url: '/mhd/comic_v2/getproad',
    method: 'GET',
    // 需要请求体参数，用data
    // 需要查询字符串参数，用params
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web - app',
      adgroupid: 123
    }
  })
}
