// @ts-ignore
import request from '../utils/request.js'

/**
 * 获取文章列表
 * @param params
 */
export function getArticleList(params: object) {
  return request({
    url: '/article',
    method: 'get',
    params
  })
}

/**
 * 获取文章详情
 * @param id
 */
export function getArticleDetail(id: string) {
  return request({
    url: `/article/${id}`,
    method: 'get'
  })
}
