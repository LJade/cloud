import Ax from './axios'

// 获取评论列表
export function getCommentList () {
  return Ax.get('/comments').then(
    res => res.data)
}
