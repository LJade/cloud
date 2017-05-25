<template>
  <div class="mark-box">
    <div class="title">{{markInfo.title}}</div>
    <div class="mark-content">{{markInfo.content}}</div>
  </div>
</template>

<script>
  export default {
    name: 'mark-box',
    props: {
      markInfo: Object
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
  @import "../../assets/base";
  .mark-box{
    width: 90%;
    margin: 0 auto;
    border-bottom: 1px solid $border-color;
    overflow: hidden;
    &:last-child{
      border-bottom: 0;
    }
    .title{
      padding: 1.5rem 0;
      font-size: 1.6rem;
      color: $black-color;
      font-weight: 600;
    }
    .mark-content{
      color: $vice-color;
      line-height: 1.5;
      overflow: hidden;
      margin-bottom: 2rem;
      @include word-overflow(3)
    }
  }
</style>
