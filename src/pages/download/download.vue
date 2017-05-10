<template>
  <div class="home">
    <common-header :headerTitle="headerTitle"></common-header>
    <common-footer></common-footer>
    <div>这里是download</div>
  </div>
</template>

<script>
  import commonHeader from '../../components/header.vue'
  import commonFooter from '../../components/footer.vue'
  export default {
    name: 'download',
    components: {
      commonHeader,
      commonFooter
    },
    data () {
      return {
        headerTitle: '下载'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
