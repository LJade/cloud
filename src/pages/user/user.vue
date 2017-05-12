<template>
  <div class="home">
    <common-header :headerTitle="headerTitle"></common-header>
    <common-footer></common-footer>
    <div class="content">
      <div class="user-header">
        <div class="user-intro">
          <div class="avatar-wrapper">
            <img src="../../assets/images/avatar.png" alt="">
          </div>
          <div class="user-desc">
            <h3>灵公子</h3>
            <p><span>学习时长<em>345小时</em></span><span>经验<em>14761</em></span></p>
          </div>
        </div>
        <div class="user-info">
          <div class="info-wrapper">
            <span>关注</span>
            <em>33</em>
          </div>
          <div class="info-wrapper">
            <span>粉丝</span>
            <em>63</em>
          </div>
          <div class="info-wrapper">
            <span>积分</span>
            <em>100</em>
          </div>
        </div>
      </div>
      <div class="user-nav">
        <router-link to="">
          <i class="icon icon-course"></i>
          <span>我的课程</span>
        </router-link>
        <router-link to="">
          <i class="icon icon-project"></i>
          <span>我的实战</span>
        </router-link>
        <router-link to="">
          <i class="icon icon-question"></i>
          <span>我的猿问</span>
        </router-link>
        <router-link to="">
          <i class="icon icon-mark"></i>
          <span>我的手记</span>
        </router-link>
      </div>
      <div class="user-link">
        <router-link to="">
          <div class="link-left">
            <i class="icon icon-history"></i>
            历史记录
          </div>
          <div class="link-arrow">
            <i class="icon-right"></i>
          </div>
        </router-link>
        <router-link to="">
          <div class="link-left">
            <i class="icon icon-achieve"></i>
            我的路径
          </div>
          <div class="link-arrow">
            <i class="icon-right"></i>
          </div>
        </router-link>
        <router-link to="">
          <div class="link-left">
            <i class="icon icon-coursetable"></i>
            我的课表
          </div>
          <div class="link-arrow">
            <i class="icon-right"></i>
          </div>
        </router-link>
      </div>
      <div class="user-link">
        <router-link to="">
          <div class="link-left">
            <i class="icon icon-order"></i>
            我的订单
          </div>
          <div class="link-arrow">
            <i class="icon-right"></i>
          </div>
        </router-link>
        <router-link to="">
          <div class="link-left">
            <i class="icon icon-cart"></i>
            购物车
          </div>
          <div class="link-arrow">
            <i class="icon-right"></i>
          </div>
        </router-link>
        <router-link to="">
          <div class="link-left">
            <i class="icon icon-coupon"></i>
            优惠券
          </div>
          <div class="link-arrow">
            <i class="icon-right"></i>
          </div>
        </router-link>
      </div>
      <div class="user-link">
        <router-link to="">
          <div class="link-left">
            <i class="icon icon-night"></i>
            夜间模式
          </div>
            <mt-switch v-model="nightModel"></mt-switch>
        </router-link>
        <a href="javascript:void(0)">
          <div class="link-left">
            <i class="icon icon-setting"></i>
            设置
          </div>
          <div class="link-arrow">
            <i class="icon-right"></i>
          </div>
        </a>
      </div>

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
        headerTitle: '我的',
        nightModel: false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .user-header {
    width: 100%;
    height: 14rem;
    background: #ffffff;
    .user-intro, .user-info {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .user-intro {
      height: 11rem;
      .avatar-wrapper {
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .user-desc {
        h3 {
          color: #333333;
          font-size: 1.6rem;
          padding-left: 1rem;
          margin: 1rem 0;
        }
        p {
          padding-left: 1rem;
          margin: 1rem 0;
          font-size: 1.2rem;
          color: #999999;
          span {
            em {
              margin: 0 1rem;
            }
            &:nth-child(1) {
              :after {
                content: '|';
                font-size: 1rem;
                color: #e5e5e5;
                display: inline-block;
                padding-left: 1rem;
              }
            }
          }
        }
      }
    }
    .user-info {
      height: 3rem;
      font-size: 1.2rem;
      .info-wrapper {
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        span {
          margin-bottom: 1px;
        }
        em {
          font-size: 1.3rem;
          margin-left: 1rem;
        }
        &:nth-child(1), &:nth-child(2) {
          &:after {
            content: '|';
            font-size: 1rem;
            color: #e5e5e5;
            display: inline-block;
            position: absolute;
            right: 0;;
          }
        }
      }
    }

  }
  .user-nav{
    height: 9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    margin-top: 1rem;
    a{
      display: block;
      width: 25%;
      font-size: 1.2rem;
      text-align: center;
      span{
        display: block;
        margin-top: 1rem;
      }
      i.icon{
        display: block;
        font-size: 3rem;
      }
      &:nth-child(1){
        i.icon{
          color: #0bb5ff;
        }
      }
      &:nth-child(2){
        i.icon{
          color: #f2a615;
        }
      }
      &:nth-child(3){
        i.icon{
          color: #19cd83;
        }
      }
      &:nth-child(4){
        i.icon{
          color: #07b0ff;
        }
      }
    }

  }
  .user-link{
    background: #ffffff;
    margin-top: 1rem;
    a{
      display: flex;
      line-height: 4rem;
      justify-content: space-between;
      padding-left: 1rem;
      padding-right: 1rem;
      color: #666666;
      i{
        font-size: 1.8rem;
        vertical-align: sub;
      }
      .link-left{
        i{
          margin-right: 1rem;
        }
      }
    }
  }
</style>
