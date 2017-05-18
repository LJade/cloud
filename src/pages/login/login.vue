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
      <p class="forget-pass">
        <router-link to="">忘记密码</router-link>
      </p>
      <p class="register-link">
        <router-link to="">注册</router-link>
      </p>
      <div class="social-login">社交账号登录</div>
    </div>
  </div>
</template>

<script>
  import {MessageBox} from 'mint-ui'
  import {mapActions} from 'vuex'
  export default {
    name: 'login',
    data () {
      return {
        username: '',
        password: '',
        isSeen: false
      }
    },
    methods: {
      ...mapActions(['login']),
      loginSubmit () {
        const { username, password } = this
        if (username && password) {
          this.login({username, password}).then(res => {
            if (res.data && res.status === 200) {
              this.$router.push({path: 'home'})
            } else {
              MessageBox('提示', '用户名或密码错误')
            }
          }).catch((e) => {
            MessageBox('提示', '连接错误')
          })
        } else {
          MessageBox('提示', '请完善表单内容')
        }
      },
      passwordDisplay: function () {
        this.isSeen = !this.isSeen
        this.$refs.psd.type = this.isSeen ? 'text' : 'password'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .login {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background: url("../../assets/images/loginbg.jpg") no-repeat;
    background-size: 100% 100%;
  }

  $font-color: #a6a6a6;
  .mask {
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    color: $font-color;
  }

  h2 {
    color: #ffffff;
    font-size: 2.4rem;
    text-align: center;
    font-weight: 400;
    margin: 8rem 0 3rem;
  }

  .form-group {
    position: relative;
    margin-bottom: 5px;
    .icon-wrapper {
      position: absolute;
      right: 2rem;
      top: 0;
      padding-left: 1rem;
      padding-right: 1rem;
      i {
        font-size: 1.6rem;
        line-height: 4rem;
      }
    }
    input {
      width: 100%;
      background: rgba(68, 77, 84, 0.2);
      line-height: 4rem;
      outline: none;
      border: none;
      text-indent: 2rem;
      color: #ffffff;
      &::-webkit-input-placeholder {
        text-indent: 2rem;
        color: $font-color;
      }
    }
    button {
      display: block;
      border: none;
      background: rgba(40, 93, 124, 0.6);
      width: 70%;
      margin: 2rem auto;
      color: #ffffff;
      padding: 1rem;
      line-height: 2rem;
    }
  }

  .forget-pass, .register-link, .social-login {
    text-align: center;
    color: $font-color;
    line-height: 4rem;
    a {
      display: block;
      line-height: 4rem;
      color: $font-color;
    }
  }

  .register-link {
    margin-top: 5rem;
  }
</style>
