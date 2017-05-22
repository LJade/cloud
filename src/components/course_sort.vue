<template >
  <div class="sort">
    <nav class="sort-nav">
      <h4 class="sort-name">
        <i class="icon" :class="sortInfo.iconClass"></i>
        {{sortInfo.content}}
      </h4>
      <span class="sort-link" v-if="sortInfo.handle" @click="clickHandle">
        <i class="icon-refresh"></i>
        换一换</span>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'caption',
    data () {
      return {
      }
    },
    props: {
      sortInfo: Object
    },
    methods: {
      clickHandle () {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .sort-nav{
    position: relative;
    padding: 1rem 0;
    h4{
      text-align: center;
      font-size: 1.6rem;
      color: #666666;
      i{
        font-size: 1.8rem;
        color: #1db1f7
      }
    }
    .sort-link{
      color: #999999;
      font-size: 1.2rem;
      position: absolute;
      right: 2rem;
      top:1.2rem;
    }
  }

</style>
