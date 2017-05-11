<template>
  <div class="course">
    <common-header :headerTitle="headerTitle"></common-header>
    <common-footer></common-footer>
    <div class="content">
      <course-nav :courseData="frondData"></course-nav>
      <course-nav :courseData="backData"></course-nav>
      <course-nav :courseData="mobileData"></course-nav>
      <course-nav :courseData="databaseData"></course-nav>
      <course-nav :courseData="cloudData"></course-nav>
      <course-nav :courseData="testData"></course-nav>
      <course-nav :courseData="designData"></course-nav>
    </div>

  </div>
</template>

<script>
  import commonHeader from '../../components/header.vue'
  import commonFooter from '../../components/footer.vue'
  import courseNav from '../../components/course_nav.vue'
  export default {
    name: 'course',
    components: {
      commonHeader,
      commonFooter,
      courseNav
    },
    data () {
      return {
        headerTitle: '课程',
        frondData: {
          title: '前端开发',
          courses: [{
            type: 'HTML/CSS',
            color: '#7bbef5',
            iconName: 'icon-code'
          }, {
            type: 'JavaScript',
            color: '#f38fc3',
            iconName: 'icon-nodejs'
          }, {
            type: 'jQuery',
            color: '#69b3e2',
            iconName: 'icon-jquery'
          }, {
            type: 'Html5',
            color: '#f3aa87',
            iconName: 'icon-html5'
          }, {
            type: 'Node.js',
            color: '#acdc86',
            iconName: 'icon-nodejs'
          }, {
            type: 'AngularJS',
            color: '#e85e53',
            iconName: 'icon-angular'
          }, {
            type: 'WebApp',
            color: '#f67266',
            iconName: 'icon-webapp'
          }, {
            type: '前端工具',
            color: '#fc75b0',
            iconName: 'icon-tool'
          }, {
            type: 'CSS3',
            color: '#6bb2ff',
            iconName: 'icon-CSS3'
          }, {
            type: 'BootStrap',
            color: '#b48eff',
            iconName: 'icon-bootstrap'
          }, {
            type: 'React.JS',
            color: '#08e5ed',
            iconName: 'icon-react'
          }, {
            type: 'Vue.js',
            color: '#40b983',
            iconName: 'icon-vue'
          }, {
            type: 'Sass/Less',
            color: '#cd68b6',
            iconName: 'icon-sass'
          }]
        },
        backData: {
          title: '后端开发',
          courses: [{
            type: 'PHP',
            color: '#7a91d4',
            iconName: 'icon-php'
          }, {
            type: 'Java',
            color: '#f68e83',
            iconName: 'icon-java'
          }, {
            type: 'Python',
            color: '#086bac',
            iconName: 'icon-python'
          }, {
            type: 'C',
            color: '#2ebbf0',
            iconName: 'icon-C'
          }, {
            type: 'C++',
            color: '#42de5f',
            iconName: 'icon-Cplus'
          }, {
            type: 'Go',
            color: '#90bef2',
            iconName: 'icon-go'
          }, {
            type: 'Ruby',
            color: '#ea5750',
            iconName: 'icon-ruby'
          }]
        },
        mobileData: {
          title: '移动开发',
          courses: [{
            type: 'Android',
            color: '#c4d877',
            iconName: 'icon-android'
          }, {
            type: 'iOS',
            color: '#cbcfd2',
            iconName: 'icon-iOS'
          }, {
            type: 'Unity 3D',
            color: '#26b3aa',
            iconName: 'icon-unity3d'
          }, {
            type: 'Cocos-2D x',
            color: '#29cae7',
            iconName: 'icon-Cocos2d'
          }]
        },
        databaseData: {
          title: '数据库',
          courses: [{
            type: 'MySQL',
            color: '#7a9edc',
            iconName: 'icon-mysql'
          }, {
            type: 'MongoDB',
            color: '#81d34d',
            iconName: 'icon-mongodb'
          }, {
            type: 'Oracle',
            color: '#f65d58',
            iconName: 'icon-oracle'
          }, {
            type: 'SQL Server',
            color: '#f04742',
            iconName: 'icon-sqlserver'
          }]
        },
        cloudData: {
          title: '云计算&大数据',
          courses: [{
            type: '云计算',
            color: '#40a7f4',
            iconName: 'icon-cloud'
          }, {
            type: '大数据',
            color: '#0c79d4',
            iconName: 'icon-big-data'
          }]
        },
        testData: {
          title: '运维&测试',
          courses: [{
            type: '运维',
            color: '#5c6aa7',
            iconName: 'icon-linux'
          }, {
            type: 'v测试',
            color: '#2fbc4b',
            iconName: 'icon-test'
          }]
        },
        designData: {
          title: 'UI设计',
          courses: [{
            type: '设计基础',
            color: '#01b957',
            iconName: 'icon-color'
          }, {
            type: '设计工具',
            color: '#4795dd',
            iconName: 'icon-pen'
          }, {
            type: 'APPUI设计',
            color: '#fe9800',
            iconName: 'icon-webapp'
          }, {
            type: '动画动效',
            color: '#00c7c2',
            iconName: 'icon-animate'
          }]
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .course-nav{
    margin-bottom: 1rem;
  }
</style>
