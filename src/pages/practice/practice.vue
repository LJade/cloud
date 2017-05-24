<template>
  <div class="practice">
    <div class="banner">
      <mt-swipe :auto="3000">
        <mt-swipe-item><img src="../../assets/images/index_banner1.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/images/index_banner2.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/images/index_banner3.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/images/index_banner4.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/images/index_banner5.jpg" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="classify">
      <div class="item active">全部</div>
      <div class="item">前端开发</div>
      <div class="item">后端开发</div>
      <div class="item">移动开发</div>
      <div class="item">数据库</div>
      <div class="item">运维&测试</div>
    </div>
    <div class="list">
      <course-preview v-for="info in list" :previewInfo="info" :key="info.id"></course-preview>
    </div>
  </div>
</template>

<script>
  import coursePreview from '../../components/course_preview.vue'
  export default {
    name: 'practice',
    components: {
      coursePreview
    },
    data () {
      return {
        list: [{
          id: 'ec4d5s5v',
          title: 'ES6零基础教学 解析彩票项目，带你装逼带你飞',
          price: '188.00',
          imgUrl: '/static/images/es6.jpg'
        }, {
          id: 'ec4d5s5v',
          title: 'ES6零基础教学 解析彩票项目，带你装逼带你飞',
          price: '188.00',
          imgUrl: '/static/images/es6.jpg'
        }, {
          id: 'ec4d5s5v',
          title: 'ES6零基础教学 解析彩票项目，带你装逼带你飞',
          price: '188.00',
          imgUrl: '/static/images/es6.jpg'
        }, {
          id: 'ec4d5s5v',
          title: 'ES6零基础教学 解析彩票项目，带你装逼带你飞',
          price: '188.00',
          imgUrl: '/static/images/es6.jpg'
        }]
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

  .classify {
    background: #ffffff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    height: 8rem;
    .item {
      width: 9rem;
      height: 2.5rem;
      line-height: 2.5rem;
      text-align: center;
      border: 1px solid #f2f2f2;
      border-radius: 20px;
      &.active {
        background: #fd2d4f;
        border: 1px solid #fd2d4f;
        color: #ffffff;
      }
    }
  }
  .list{
    .course-preview{
      border-bottom: 1px solid #e5e5e5;
      padding: 1rem;
      &:last-child{
        border-bottom: 0;
      }
    }
  }
</style>
