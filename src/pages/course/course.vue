<template>
  <div class="course">
    <common-header :headerTitle="headerTitle"></common-header>
    <common-footer></common-footer>
    <div>这里是course</div>
  </div>
</template>

<script>
  import commonHeader from '../../components/header.vue'
  import commonFooter from '../../components/footer.vue'
  export default {
    name: 'course',
    components: {
      commonHeader,
      commonFooter
    },
    data () {
      return {
        headerTitle: '课程'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
