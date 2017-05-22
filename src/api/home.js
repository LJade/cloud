import Ax from './axios'

// 获取推荐课程数据
export function getRecommendCourse () {
  return Ax.get('/recommend?type=recommend').then(
    res => res.data)
}
// 获取实战课程数据
export function getPracticeCourse () {
  return Ax.get('/recommend?type=practice').then(
    res => res.data)
}
