<template>
  <div class="course-intro-box">
    <div class="img-wrapper">
      <img src="../assets/images/course.jpg" alt="">
    </div>
    <div class="content-wrapper">
      <div class="title">KVM虚拟化技术</div>
      <div class="desc">云服务的底层技术-虚拟化介绍</div>
      <div class="intro">
        <span class="higher">高级</span>
        <span>6032人学习</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'course_short',
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .course-intro-box{
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
