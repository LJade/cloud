import Vue from 'vue'
import Router from 'vue-router'

// 登录相关
import login from '../pages/login/login.vue'

// 首页相关
import home from '../pages/home/home.vue'

// 课程相关
import course from '../pages/course/course.vue' // 课程导航
import courseList from '../pages/course/course_list.vue'  // 课程介绍
import freeDetail from '../pages/course/cuorse_free_detail.vue'  // 免费课程细节
import chargeDetail from '../pages/course/course_charge_detail.vue'  // 付费课程细节

// 下载相关
import download from '../pages/download/download.vue'

// 个人中心
import user from '../pages/user/user.vue'

// 购物车相关
import cart from '../pages/cart/cart.vue'

// 评论相关
import comment from '../pages/comment/commentlist.vue'

// 视频播放
import video from '../pages/video/video.vue'

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
      path: '/course_list',
      name: 'courseList',
      component: courseList
    },
    {
      path: '/course_free/:id',
      name: 'courseDetail',
      component: freeDetail
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/comment',
      name: 'comment',
      component: comment
    },
    {
      path: '/course_charge/:id',
      name: 'chargeCourse',
      component: chargeDetail
    },
    {
      path: '/video',
      name: 'video',
      component: video
    }
  ]
})
