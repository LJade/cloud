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
<style scoped lang="scss">
  .user-header{
    width: 100%;
    height: 14rem;
    background: #ffffff;
    .user-intro,.user-info{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .user-intro{
      height: 11rem;
      .avatar-wrapper{
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        overflow: hidden;
        img{
          width: 100%;
        }
      }
      .user-desc{
        h3{
          color: #333333;
          font-size: 1.6rem;
          padding-left: 1rem;
          margin: 1rem 0;
        }
        p{
          padding-left: 1rem;
          margin: 1rem 0;
          font-size: 1.2rem;
          color: #999999;
          span{
            em{
              margin: 0 1rem;
            }
            &:nth-child(1){
              :after{
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
    .user-info{
      height: 3rem;
      font-size: 1.2rem;
      .info-wrapper{
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        span{
          margin-bottom: 1px;
        }
        em{
          font-size: 1.3rem;
          margin-left: 1rem;
        }
        &:nth-child(1),&:nth-child(2){
          &:after{
            content: '|';
            font-size: 1rem;
            color: #e5e5e5;
            display: inline-block;
            position: absolute;
            right:0;
;          }
      }
      }
    }



  }
</style>
