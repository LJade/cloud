<template>
  <div class="comment-box">
    <div class="comment-header">
      <div class="header-left clear-fix">
        <div class="avatar">
          <img :src="comment.avatarUrl" alt="">
        </div>
        <span class="name">{{comment.user}}</span>
        <div class="star">
          <i class="icon-stars"></i>
          <i class="icon-stars"></i>
          <i class="icon-stars"></i>
          <i class="icon-stars"></i>
          <i class="icon-stars"></i>
        </div>
      </div>
      <div class="header-right">
        <div v-show="comment.time" class="time">{{comment.time}}</div>
      </div>
    </div>
    <div class="comment-body">{{comment.content}}</div>
  </div>
</template>
<script>
  export default {
    name: 'comment',
    props: {
      comment: Object
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .comment-box {
    padding: 1rem;
    border-bottom: 1px solid #e5e5e5;
    background: #ffffff;
    &:last-child{
      border-bottom: none;
    }
    .comment-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #666666;
      .header-left{
        width: 60%;
        .avatar,.name,.star{
          float: left;
          margin-right: 1rem;
          line-height: 1.8rem;
        }
        .avatar{
          width: 1.8rem;
          height: 1.8rem;
          border-radius: 50%;
          overflow: hidden;
          display: inline-block;
          img{
            width: 100%;
          }
        }
        .star{
          color: #999999;
        }
      }
    }
    .comment-body {
      padding-left: 2.8rem;
      line-height: 1.5;
      padding-top: 1rem;
    }
  }
</style>
