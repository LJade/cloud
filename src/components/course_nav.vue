<template>
  <div class="course-nav">
    <div class="title">{{courseData.title}}</div>
    <div class="course-list">
        <div class="course-wrapper" v-for="course in courseData.courses">
          <router-link to="/course_list">
          <div class="icon-wrapper" :style="{background:course.color}">
            <i class="icon":class="course.iconName"></i>
          </div>
          <span>{{course.type}}</span>
          </router-link>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'course_nav',
    data () {
      return {
      }
    },
    props: {
      courseData: Object
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.course-nav{
  width: 100%;
  background: #ffffff;
  .title{
    padding: 1rem;
    color: #999999;
  }
  .course-list{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row wrap;
    text-align: center;
    .course-wrapper{
      width: 33%;
      margin-bottom: 1.5rem;
      .icon-wrapper{
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        margin: 0 auto;
        i{
          font-size: 2rem;
          color: #ffffff;
          line-height: 3rem;
        }
      }
      span{
        display: block;
        margin-top: 5px;
        font-size: 1.2rem;
        width: 100%;
        color: #666666;
      }
    }

  }
}
</style>
