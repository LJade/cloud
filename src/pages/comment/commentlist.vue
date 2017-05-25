<template>
  <div class="common-list">
    <div  v-for="comment in comments">
      <comment :comment="comment"></comment>
    </div>
  </div>
</template>

<script>
  import comment from '../../components/comment.vue'
  import { comments } from '../../api/index'
  export default {
    name: 'hello',
    components: {
      comment
    },
    data () {
      return {
        comments: []
      }
    },
    mounted () {
      comments.getCommentList().then(res => {
        this.comments = res
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
