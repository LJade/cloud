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
  }
}

const mutations = {
  [types.RECEIVE_PRODUCTS] (state, payload) {
    state.cartProsList = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
