<template>
  <div class="career-container">
    <div class="career-header"></div>
    <div class="career-body">
      <career-box v-for="careerInfo in career" :careerInfo="careerInfo" :key="careerInfo.id"></career-box>
    </div>
  </div>
</template>

<script>
  import careerBox from './career_box.vue'
  export default {
    name: 'career',
    components: {
      careerBox
    },
    data () {
      return {
        career: [{
          id: 'f1v4rs5rf',
          imgUrl: '/static/images/angular.jpg',
          title: 'HTML5和CSS3实现动态网页',
          courseNum: 29,
          studyNum: 1083,
          description: '带你通过系统学习，完成从"会做网页"到"做出好的动态网页"的蜕变',
          price: 599.00
        }, {
          id: 'd4v1fr4ds2',
          imgUrl: '/static/images/react.jpg',
          title: '零基础入门Android语法与界面',
          courseNum: 41,
          studyNum: 565,
          description: '从基础语法入门，到能完成主流APP的界面，学习Android从这里开始',
          price: 399.00
        }]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .career-container {
    position: relative;
    min-height: 100vh;
    background: #fff;
    .career-header{
      width: 100%;
      height: 12rem;
      background: url("../../assets/images/headerbg.png") no-repeat;
      background-size: cover;
    }
    .career-body{
      position: absolute;
      top: 6rem;
    }
  }
</style>
