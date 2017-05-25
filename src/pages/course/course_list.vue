<template>
  <div class="course-tab">
    <div class="course-header">
      <div class="icon-wrapper">
        <i class="icon icon-cloud"></i>
      </div>
      <h3>云计算</h3>
      <div class="tab-header clear-fix">
        <div class="tab-item" @click="tab('all')" :class="{active:tabName==='all'}"><span>全部</span></div>
        <div class="tab-item" @click="tab('base')" :class="{active:tabName==='base'}"><span>基础</span></div>
        <div class="tab-item" @click="tab('cases')" :class="{active:tabName==='cases'}"><span>案例</span></div>
        <div class="tab-item" @click="tab('frame')" :class="{active:tabName==='frame'}"><span>框架</span></div>
      </div>
    </div>
    <div class="course-body">
      <div class="tab-body" v-show="tabName==='all'">
        <course-short :courseIntro="courseIntro"></course-short>
        <course-short :courseIntro="courseIntro"></course-short>
      </div>
      <div class="tab-body" v-show="tabName==='base'">
        <course-short :courseIntro="courseIntro1"></course-short>
        <course-short :courseIntro="courseIntro1"></course-short>
      </div>
      <div class="tab-body" v-show="tabName==='cases'">
        <course-short :courseIntro="courseIntro2"></course-short>
        <course-short :courseIntro="courseIntro2"></course-short>
      </div>
      <div class="tab-body" v-show="tabName==='frame'">
        <course-short :courseIntro="courseIntro3"></course-short>
        <course-short :courseIntro="courseIntro3"></course-short>
      </div>

    </div>
  </div>
</template>

<script>
  import courseShort from '../../components/course_short.vue'
  export default {
    name: 'course-tab',
    data () {
      return {
        tabName: 'all',
        courseIntro: {
          imgUrl: require('assets/images/course.png'),
          title: '第一个Docker化的Java应用',
          desc: '云服务的底层技术-虚拟化介绍云服务的底层技术-虚拟化介绍',
          level: '高级',
          count: '1245'
        },
        courseIntro1: {
          imgUrl: require('assets/images/course.png'),
          title: 'Vue带你走向人生巅峰',
          desc: '云服务的底层技术-虚拟化介绍云服务的底层技术-虚拟化介绍',
          level: '中级',
          count: '124587'
        },
        courseIntro2: {
          imgUrl: require('assets/images/course.png'),
          title: 'Java是一个让人着迷的技术',
          desc: '云服务的底层技术-虚拟化介绍云服务的底层技术-虚拟化介绍',
          level: '高级',
          count: '1245'
        },
        courseIntro3: {
          imgUrl: require('assets/images/course.png'),
          title: '今年听说Go语言很火？',
          desc: '云服务的底层技术-虚拟化介绍云服务的底层技术-虚拟化介绍',
          level: '高级',
          count: '1245'
        }
      }
    },
    methods: {
      tab (type) {
        switch (type) {
          case 'all':
            this.tabName = 'all'
            break
          case 'base':
            this.tabName = 'base'
            break
          case 'cases':
            this.tabName = 'cases'
            break
          case 'frame':
            this.tabName = 'frame'
            break
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
  @import "../../assets/color";
  .course-header {
    height: 15rem;
    text-align: center;
    background: #41a3ec;
    .icon-wrapper {
      color: $white-color;
      padding: 2rem 2rem 0 2rem;
      i {
        font-size: 5rem;
        font-weight: 200;
      }
    }
    h3 {
      color: $white-color;
      margin: 1.5rem auto;
    }
    .tab-header {
      .tab-item {
        float: left;
        width: 25%;
        color: rgba(255, 255, 255, 0.5);
        span {
          display: inline-block;
          line-height: 4rem;
        }
        &.active {
          color: $white-color;
          span {
            border-bottom: 2px solid $white-color;
          }
        }
      }
    }
    .course-body {
      .tab-body {
        display: none;
      }
    }
  }
</style>
