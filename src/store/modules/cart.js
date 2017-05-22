import * as types from '../types'
import {cart} from '../../api'
const state = {
  cartProsList: []
}

const getters = {
  allProducts: state => state.cartProsList
}

const actions = {
  getAllProducts ({commit}) {
    cart.getCartList().then(
      res => commit(types.RECEIVE_PRODUCTS, res.data)
    )
  },
  addToCart ({commit}) {
    cart.addToCart().then(res => {
      let status = res.status
      if (status === 200) commit(types.ADD_TO_CART, res)
      else return res
    })
  }
}

const mutations = {
  [types.RECEIVE_PRODUCTS] (state, payload) {
    state.cartProsList = payload
  },
  [types.ADD_TO_CART] (state, payload) {
    state.cartProsList.push(payload)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
