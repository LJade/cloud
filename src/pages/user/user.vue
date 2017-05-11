<template>
  <div class="home">
    <common-header :headerTitle="headerTitle"></common-header>
    <common-footer></common-footer>
    <div class="content">
      <div class="user-header">
        <div class="avatar-wrapper">
          <img src="../../assets/images/avatar.png" alt="">
        </div>
        <div class="user-desc">
          <h3>灵公子</h3>
          <p><span>学习时长345小时</span><span>经验14761</span></p>
        </div>
        <div class="user-info">
          <div class="info-wrapper">
            关注
            <em>33</em>
          </div>
          <div class="info-wrapper">
            粉丝
            <em>63</em>
          </div>
          <div class="info-wrapper">
            积分
            <em>100</em>
          </div>
        </div>
      </div>
      <ul class="user-nav">
        <li><i class="icon"></i>
        <span>我的课程</span>
        </li>
      </ul>
      <ul class="user-link"></ul>

    </div>
  </div>
</template>

<script>
  import commonHeader from '../../components/header.vue'
  import commonFooter from '../../components/footer.vue'
  export default {
    name: 'user',
    components: {
      commonHeader,
      commonFooter
    },
    data () {
      return {
        headerTitle: '我的'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
