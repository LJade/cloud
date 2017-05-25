<template>
  <div class="login">
    <div class="mask">
      <h2>欢迎登录慕课网</h2>
      <div class="form-wrapper">
        <div class="form-group">
          <input type="text" v-model="username" placeholder="手机号/邮箱">
          <div class="icon-wrapper">
            <i class="icon icon-more"></i>
          </div>
        </div>
        <div class="form-group">
          <!--<input type="text" v-model="form.password" placeholder="密码" v-if="isSeen">-->
          <input type="password" v-model="password" placeholder="密码" ref="psd">
          <div class="icon-wrapper">
            <i class="icon icon-eye-close" :class="[isSeen ? 'icon-eye' : 'icon-eye-close']"
               @click="passwordDisplay"></i>
          </div>
        </div>
        <div class="form-group">
          <button @click="loginSubmit">登录</button>
        </div>
      </div>
      <router-link to="" class="handle-tip">忘记密码</router-link>
      <transition name="fade">
        <div v-show="socialLogin===false">
          <router-link to="/register" class="handle-tip go-register">注册</router-link>
          <div class="handle-tip" @click="loginToggle">社交账号登录</div>
        </div>
      </transition>
      <transition name="fade">
        <div v-show="socialLogin===true">
          <div class="social-login-title" @click="loginToggle">
            <span class="line"></span>
            <div class="text">社交账号登录</div>
            <span class="line"></span>
          </div>
          <div class="social-login-block">
            <div class="wechat"><i class="icon-weixin"></i></div>
            <div class="qq"><i class="icon-QQ"></i></div>
            <div class="weibo"><i class="icon-weibo"></i></div>
          </div>
        </div>
      </transition>

    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'
  import {mapActions} from 'vuex'
  export default {
    name: 'login',
    data () {
      return {
        username: '',
        password: '',
        isSeen: false,
        socialLogin: false
      }
    },
    methods: {
      ...mapActions(['login']),
      loginSubmit () {
        const {username, password} = this
        if (username && password) {
          this.login({username, password}).then(res => {
            if (res.data && res.status === 200) {
              this.$router.push({path: 'home'})
            } else {
              Toast({message: '用户名或密码错误', iconClass: 'icon icon-cross'})
            }
          }).catch((e) => {
            Toast({message: '连接错误', iconClass: 'icon icon-cross'})
          })
        } else {
          Toast({message: '请完善表单'})
        }
      },
      passwordDisplay: function () {
        this.isSeen = !this.isSeen
        this.$refs.psd.type = this.isSeen ? 'text' : 'password'
      },
      loginToggle () {
        this.socialLogin = !this.socialLogin
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
