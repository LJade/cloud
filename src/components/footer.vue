<template>
  <div class="footer">
    <footer id="common_footer">
      <router-link to="/home">
        <i class="icon icon-home"></i>
        <span class="tag">首页</span>
      </router-link>
      <router-link to="/course">
        <i class="icon icon-app"></i>
        <span class="tag">课程</span>
      </router-link>
      <router-link to="/download">
        <i class="icon icon-download"></i>
        <span class="tag">下载</span>
      </router-link>
      <router-link to="/user">
        <i class="icon icon-user"></i>
        <span class="tag">我的</span>
      </router-link>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'footer',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
  @import "../assets/color";
  #common_footer{
    width: 100%;
    height: 5rem;
    position: fixed;
    bottom:0;
    left: 0;
    background: $white-color;
    box-shadow: 0 1px 2px 2px $border-color;
    display: flex;
    align-items: center;
    justify-content: space-around;
    a{
      text-align: center;
      span.tag{
        display: block;
        font-size: 1.2rem;
        margin-top: 5px;
      }
      i.icon{
        font-size: 1.6rem;
      }
    }
  }
  .router-link-active{
    span.tag,i{
      color: $red-color
    };
  }
</style>
