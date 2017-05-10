<template>
  <div class="course_box">
    <div class="course-box">
      <div class="course-name">
        <span v-for="item in courseInfo.name">
          {{ item }}
        </span>
      </div>
      <div class="course-title">
        {{courseInfo.title}}
      </div>
      <div class="course-desc">
        {{courseInfo.desc}}
      </div>
      <div class="course-note">
        {{courseInfo.note}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'course_box',
    data () {
      return {}
    },
    props: {
      courseInfo: Object
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../assets/base";
  .course-box {
    width: 15.5rem;
    height: 14rem;
    background: #ffffff;
    overflow: hidden;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 1rem;
    line-height: 1.5em;
    .course-name{
      height: 3em;
      line-height: 3em;
      padding: 0 1rem;
      font-size: 1.3em;
      color: #ffffff;
      background: rgba(87,152,208,1);
      @include word-overflow(1);
      span{
        margin-left: 1rem;
        &:first-child{
        margin-left: 0;
      }
      }
    }
    .course-title{
      height: 2.6em;
      font-size: 1.4em;
      margin: 0.5rem 1rem;
      @include word-overflow(2)
    }
    .course-desc{
      color: $border-color;
      margin: 0.5rem 1rem;
      @include word-overflow(2)
    }
    .course-note{
      height: 3.5em;
      font-size: 1.2em;
      color: $vice-color;
      margin: 1rem;
    }
  }
</style>
