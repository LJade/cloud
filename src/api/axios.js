import axios from 'axios'
import Qs from 'qs'

let Ax = axios.create({
  baseURL: '/api',
  headers: {
    'x-token': ''
  },
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'repeat'})
  }
})
Ax.interceptors.request.use(function (config) {
  // Do something before request is sent
  // config.headers['x-token'] = JSON.parse(window.localStorage.getItem('userInfo')).token ? JSON.parse(window.localStorage.getItem('userInfo')).token : ''
  config.headers['x-token'] = ''
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

Ax.interceptors.response.use(function (response) {
  // Do something with response data
  /**
   * Todo loading可以在这里写
   */
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default Ax
