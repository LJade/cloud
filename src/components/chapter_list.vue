<template>
  <div class="chapter">
    <div class="course-chapter" v-for="chapter in chapters">
      <div class="chapter-title">{{chapter.title}}</div>
      <div class="chapter-item" v-for="item in chapter.section" data-bind="item.id">
        <i class="icon icon-play3"></i>
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'chapter',
    props: {
      chapters: Array
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
  @import "../assets/color";
  .chapter{
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem 1rem 3rem;
    background: #fff;
  }
  .course-chapter{
    border-left: 1px solid $border-color;
    padding-left: 2rem;
    position: relative;
    &:before{
      content: '';
      display: block;
      position: absolute;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background: $border-color;
      left: -0.5rem;
    }
    &:last-child{
      border-left: none;
    }
    .chapter-title{
    }
    .chapter-item{
      line-height: 2.5;
      color: $main-color;
    }
  }
</style>
