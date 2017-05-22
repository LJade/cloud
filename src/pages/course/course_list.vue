<template>
  <div class="course-tab">
    <div class="course-header">
      <div class="icon-wrapper">
        <i class="icon icon-cloud"></i>
      </div>
      <h3>云计算</h3>
      <div class="tab-header clear-fix">
        <div class="tab-item active"><span>全部</span></div>
        <div class="tab-item"><span>基础</span></div>
        <div class="tab-item"><span>案例</span></div>
        <div class="tab-item"><span>框架</span></div>
      </div>
    </div>
    <div class="course-body">
      <course-short :courseIntro="courseIntro"></course-short>
      <course-short :courseIntro="courseIntro"></course-short>
    </div>
  </div>
</template>

<script>
  import courseShort from '../../components/course_short.vue'
  export default {
    name: 'course-tab',
    data () {
      return {
        courseIntro: {
          imgUrl: require('assets/images/course.png'),
          title: '第一个Docker化的Java应用',
          desc: '云服务的底层技术-虚拟化介绍云服务的底层技术-虚拟化介绍',
          level: '高级',
          count: '1245'
        }
      }
    },
    components: {
      courseShort
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.course-header{
  height: 15rem;
  text-align: center;
  background: #41a3ec;
  .icon-wrapper{
    color: #ffffff;
    padding: 2rem 2rem 0 2rem;
    i{
      font-size: 5rem;
      font-weight: 200;
    }
  }
  h3{
    color: #ffffff;
    margin: 1.5rem auto;
  }
  .tab-header{
    .tab-item{
      float: left;
      width: 25%;
      color: rgba(255,255,255,0.5);
      span{
        display: inline-block;
        line-height: 4rem;
      }

      &.active{
        color: rgb(255,255,255);
        span{
          border-bottom: 2px solid #ffffff;
        }
      }
    }
  }
}
</style>
