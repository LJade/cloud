import {LOGIN_SUCCESS} from '../types'
import {user} from '../../api'

const state = {
  username: '',
  password: '',
  token: '',
  isLogin: false
}

const mutations = {
  [LOGIN_SUCCESS] (state, payload) {
    console.log('mutations', state, payload)
    state.isLogin = true
    let info = {token: payload.token, isLogin: true}
    window.localStorage.setItem('userInfo', JSON.stringify(info))
  }
}

const actions = {
  login ({commit}, data) {
    return user.login(data).then(res => {
      if (res && res.status === 200) {
        commit(LOGIN_SUCCESS, res.data)
      }
      return res
    })
  }
}

const getters = {
  isLogin: state => state.isLogin,
  userInfo: state => state
}

export default {
  /*
    namespaced: true,
    使用mapState的是，如...mapState('user', ['isLogin']),user为命名空间，可取到
    https://github.com/vuejs/vuex/pull/420
  */
  state,
  mutations,
  getters,
  actions
}
