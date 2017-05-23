import * as types from '../types'
import {cart} from '../../api'
const state = {
  cartProsList: []
}

const getters = {
  allProducts: state => state.cartProsList,
  selectedPro: state => {
    return state.cartProsList.filter(item => item.checked)
  }
}

const actions = {
  getAllProducts ({commit}) {
    cart.getCartList().then(
      res => commit(types.RECEIVE_PRODUCTS, res.data)
    )
  },
  addToCart ({commit}, id) {
    return cart.addCart(id).then(res => {
      if (res && res.status === 200) commit(types.ADD_TO_CART, res.data)
      return Promise.resolve(res)
    })
  },
  modifyChecked ({commit}, data) {
    commit(types.MODIFY_CHECKED, data)
  },
  modifyAll ({commit}, param) {
    commit(types.MODIFY_ALL, param)
  }
}

const mutations = {
  [types.RECEIVE_PRODUCTS] (state, payload) {
    state.cartProsList = payload
  },
  [types.ADD_TO_CART] (state, payload) {
    state.cartProsList.push(payload)
  },
  [types.MODIFY_CHECKED] (state, payload) {
    let index = state.cartProsList.findIndex(function (ele) {
      return ele === payload
    })
    state.cartProsList[index].checked = !state.cartProsList[index].checked
  },
  [types.MODIFY_ALL] (state, payload) {
    if (payload.selectAll) {
      state.cartProsList.forEach(pro => {
        pro.checked = false
      })
    } else {
      state.cartProsList.forEach(pro => {
        pro.checked = true
      })
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
