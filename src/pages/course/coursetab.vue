<template>
  <div class="course-tab">
    <div class="course-header">
      <div class="icon-wrapper">
        <i class="icon icon-cloud"></i>
      </div>
      <h3>云计算</h3>
      <div class="tab-header">
        <div class="tab-item">全部</div>
        <div class="tab-item">基础</div>
        <div class="tab-item">案例</div>
        <div class="tab-item">框架</div>
      </div>
    </div>
    <div class="course-body">
      <course-short></course-short>
    </div>
  </div>
</template>

<script>
  import courseShort from '../../components/course_sort.vue'
  export default {
    name: 'course-tab',
    data () {
      return {
      }
    },
    components: {
      courseShort
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
