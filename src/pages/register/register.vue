<template>
  <div class="login">
    <div class="mask">
      <h2>注册慕课网账号</h2>
      <div class="form-wrapper">
        <div class="form-group" v-if="!mailRegister">
          <input type="text" v-model="username" placeholder="请输入手机号">
        </div>
        <div class="form-group" v-if="!mailRegister">
          <input type="text" v-model="verification" placeholder="请填写您手机获取的验证码">
          <div class="get-verification" @click="getVerification" ref="verification">获取验证码</div>
        </div>
        <div class="form-group" v-if="mailRegister">
          <input type="text" v-model="mail" placeholder="输入注册邮箱">
        </div>
        <div class="form-group">
          <input type="password" v-model="password" placeholder="密码" ref="psd">
          <div class="icon-wrapper">
            <i class="icon icon-eye-close" :class="[isSeen ? 'icon-eye' : 'icon-eye-close']"
               @click="passwordDisplay"></i>
          </div>
        </div>
        <div class="form-group">
          <button @click="registerSubmit">注册</button>
        </div>
      </div>
      <div class="handle-tip" ref="registerToggle" @click="registerToggle">邮箱注册</div>
      <router-link to="/login" class="go-login">已有慕课网账号?&nbsp;&nbsp;去登录</router-link>

    </div>
  </div>
</template>

<script>
  import {MessageBox} from 'mint-ui'
  export default {
    name: 'register',
    data () {
      return {
        username: '',
        password: '',
        verification: '',
        mail: '',
        isSeen: false,
        mailRegister: false
      }
    },
    methods: {
      registerSubmit () {
        const {username, password} = this
        if (username && password) {

        } else {
          MessageBox('提示', '请完善表单内容')
        }
      },
      passwordDisplay: function () {
        this.isSeen = !this.isSeen
        this.$refs.psd.type = this.isSeen ? 'text' : 'password'
      },
      registerToggle () {
        this.mailRegister = !this.mailRegister
        this.$refs.registerToggle.innerHTML = this.mailRegister === false ? '邮箱注册' : '手机注册'
      },
      getVerification () {
        if (!this.username) {
          MessageBox('提示', '请填写手机号')
        } else {
          let time = 45
          let clock = setInterval(() => {
            time--
            this.$refs.verification.innerHTML = time + '秒后重新获得'
            if (time === 0) {
              clearInterval(clock)
              this.$refs.verification.innerHTML = '重新获取验证码'
            }
          }, 1000)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
