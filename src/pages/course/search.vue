<template>
  <div class="search">
    <div class="search-group">
      <input type="text" v-model="keyword">
    </div>
    <div class="search-block">
      <div class="block-header">搜索历史
        <div class="clear-history">清除</div>
      </div>
      <div class="block-body">
        <div class="search-item">vue</div>
      </div>
    </div>
    <div class="search-block">
      <div class="block-header">热门搜索</div>
      <div class="block-body">
        <div class="search-item">AngularJS</div>
        <div class="search-item">Vue</div>
        <div class="search-item">Java</div>
        <div class="search-item">Android</div>
        <div class="search-item">C</div>
        <div class="search-item">C++</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'search',
    data () {
      return {
        keyword: '',
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../../assets/color";
  .search {
    min-height: 100vh;
    background: $white-color;
    .search-group {
      line-height: 3;
    }
    .search-block {
      padding: 0 1rem;
      .block-header {
        border-bottom: 1px solid $border-color;
        line-height: 3;
        color: $vice-color;
        position: relative;
        .clear-history {
          position: absolute;
          font-size: 1.2rem;
          color: $tip-color;
          right: 1rem;
          top: 0.5rem;
        }
      }
      .block-body {
        padding: 2rem 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        .search-item {
          line-height: 2;
          color: $main-color;
        }
      }
    }
  }
</style>
