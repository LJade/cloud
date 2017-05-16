import Vue from 'vue'
import Router from 'vue-router'

// 登录相关
import login from '../pages/login/login.vue'

// 首页相关
import home from '../pages/home/home.vue'

// 课程相关
import course from '../pages/course/course.vue'
import courseTab from '../pages/course/coursetab.vue'

// 下载相关
import download from '../pages/download/download.vue'

// 个人中心
import user from '../pages/user/user.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cloud',
      component: home,
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/course',
      name: 'course',
      component: course
    },
    {
      path: '/download',
      name: 'download',
      component: download
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/coursetab',
      name: 'coursetab',
      component: courseTab
    }
  ]
})
