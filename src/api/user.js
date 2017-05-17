import Ax from './axios'

// 登录
export function login (data) {
  return Ax.post('/login', {...data}).then(
    res => res.data)
}

// 退出登录
export function loginout () {
  return Ax.post('/api/logout').then(res => res.data)
}
