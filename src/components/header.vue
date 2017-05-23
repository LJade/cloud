<template>
  <div class="header">
    <header id="common_header">
      <h1>{{headerText}}</h1>
      <div class="nav-link">
        <router-link to="/home">
          <i class="icon icon-search"></i>
        </router-link>
        <router-link to="/home">
          <i class="icon icon-envelope"></i>
        </router-link>
        <router-link to="/cart">
          <i class="icon icon-cart"></i>
        </router-link>
      </div>
    </header>
    <div class="mask"></div>
  </div>
</template>

<script>
  export default {
    name: 'header',
    props: ['headerTitle'],
    data () {
      return {
        headerText: this.headerTitle
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
  #common_header {
    width: 100%;
    height: 6rem;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    z-index: 100;
    display: flex;
    align-items: center;
    h1 {
      font-weight: 200;
      font-size: 1.5rem;
      flex: 1 0 auto;
      padding-left: 3rem;
    }
    .nav-link {
      flex: 2 0 auto;
      text-align: right;
      a {
        color: #ffffff;
        margin-right: 2rem;
        padding: 5px;
        i.icon {
          vertical-align: middle;
          font-size: 1.6rem;
        }
      }
    }

  }
  .mask{
    display: block;
    width: 100%;
    height: 6rem;
    background: rgb(53, 56, 73);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
  }
</style>
