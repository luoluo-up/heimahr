import request from '@/utils/request'

/**
 * 获取首页展示数据
 *  **/
export function getHomeData() {
  return request({
    url: '/home/data'
  })
}
