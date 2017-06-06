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
        <router-link to="/practice">
          <div class="icon-wrapper">
            <i class="icon icon-project"></i>
          </div>
          <span class="menu-tag">实战</span>
        </router-link>
        <router-link to="/career">
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
        <router-link to="/mark">
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
      <course-sort :sortInfo="sortInfoRec"></course-sort>
      <div class="course-list">
        <course-info
          v-for="course in courseInfoRec"
          :courseInfo="course"
          :key="course.id"
          @clickBox="clickBox">
        </course-info>
      </div>
      <course-sort :sortInfo="sortInfoPra"></course-sort>
      <div class="course-list">
        <courseInfo
          v-for="course in courseInfoPra"
          :courseInfo="course"
          :key="course.id"
          @clickBox="clickBox"
        ></courseInfo>
      </div>
    </div>
  </div>
</template>

<script>
  import commonHeader from '../../components/header.vue'
  import commonFooter from '../../components/footer.vue'
  import courseSort from '../../components/course_sort.vue'
  import courseInfo from '../../components/course_box.vue'
  import { home } from '../../api/index'
  import { mapGetters } from 'vuex'
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
        sortInfoRec: {
          iconClass: 'icon-recommend',
          content: '课程推荐',
          handle: true
        },
        sortInfoPra: {
          iconClass: 'icon-good',
          content: '实战推荐',
          handle: true
        },
        courseInfoRec: {
        },
        courseInfoPra: {
        }
      }
    },
    methods: {
      clickBox (id, isCharge) {
        let path = isCharge ? '/course_charge/' : '/course_free/'
        this.$router.push(path + id)
      }
    },
    mounted () {
      home.getRecommendCourse().then(res => {
        this.courseInfoRec = res
      })
      home.getPracticeCourse().then(res => {
        this.courseInfoPra = res
      })
    },
    computed: {
      ...mapGetters(['isLogin'])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../../assets/color";
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
    background: $white-color;
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
          color: $white-color;
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
  .course-list{
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-between;

    .course-box{
      &:last-child{
        align-self: flex-start;
        justify-self:start;
      }
    }
  }
</style>
