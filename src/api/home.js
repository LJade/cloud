import Ax from './axios'

// 获取课程数据
export function getRecommendCourse () {
  return Ax.get('/recommend').then(
    res => res.data)
}
