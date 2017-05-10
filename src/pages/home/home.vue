<template>
  <div class="home">
    <common-header :headerTitle="headerTitle"></common-header>
    <common-footer></common-footer>
    <div class="content">
      <div class="banner">
        <mt-swipe :auto="3000">
          <mt-swipe-item><img src="../../assets/images/index_banner1.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="../../assets/images/index_banner2.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="../../assets/images/index_banner3.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="../../assets/images/index_banner4.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="../../assets/images/index_banner5.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="nav-menu">
        <router-link to="">
          <div class="icon-wrapper">
            <i class="icon icon-project"></i>
          </div>
          <span class="menu-tag">实战</span>
        </router-link>
        <router-link to="">
          <div class="icon-wrapper">
            <i class="icon icon-route"></i>
          </div>
          <span class="menu-tag">路径</span>
        </router-link>
        <router-link to="">
          <div class="icon-wrapper">
            <i class="icon icon-question"></i>
          </div>
          <span class="menu-tag">猿问</span>
        </router-link>
        <router-link to="">
          <div class="icon-wrapper">
            <i class="icon icon-mark"></i>
          </div>
          <span class="menu-tag">手记</span>
        </router-link>
        <router-link to="">
          <div class="icon-wrapper">
            <i class="icon icon-find"></i>
          </div>
          <span class="menu-tag">发现</span>
        </router-link>
      </div>
      <course-sort :sortInfo="sortInfo"></course-sort>
      <course-info :courseInfo="courseInfo"></course-info>
    </div>
  </div>
</template>

<script>
  import commonHeader from '../../components/header.vue'
  import commonFooter from '../../components/footer.vue'
  import courseSort from '../../components/course_sort.vue'
  import courseInfo from '../../components/course_box.vue'
  export default {
    name: 'home',
    components: {
      commonHeader,
      commonFooter,
      courseSort,
      courseInfo
    },
    data () {
      return {
        headerTitle: '首页',
        sortInfo: {
          iconClass: 'icon-home',
          content: '课程推荐',
          handle: true
        },
        courseInfo: {
          name: ['CSS', '前端工具', 'VueJS', 'VueX'],
          title: '使用2.0实现购物车和地址选配功能,还有很多功能是很炫酷',
          desc: '本视频教程集合案例贯穿各个知识点，轻松玩转vue2,实现各种牛逼功能',
          note: '1125人学习'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .banner {
    width: 100%;
    height: 11.25rem;
    overflow: hidden;
    img {
      width: 100%;
    }
  }

  .nav-menu {
    width: 100%;
    height: 8rem;
    background: #ffffff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      display: block;
      text-align: center;
      span {
        display: block;
        margin-top: 5px;
      }
      .icon-wrapper {
        display: inline-block;
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 40%;
        i {
          font-size: 2rem;
          line-height: 3.5rem;
          color: #ffffff;
        }
      }
      &:nth-child(1) {
        .icon-wrapper {
          background: #ffba50;
        }
      }
      &:nth-child(2) {
        .icon-wrapper {
          background: #41e199;
        }
      }
      &:nth-child(3) {
        .icon-wrapper {

          background: #95a2e6;
        }
      }
      &:nth-child(4) {
        .icon-wrapper {

          background: #2bb8fd;
        }
      }
      &:nth-child(5) {
        .icon-wrapper {

          background: #ff4f6e;
        }
      }
    }
  }
</style>
