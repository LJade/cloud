import * as types from '../types'
import {cart} from '../../api'

const state = {
  all: []
}
const getters = {
  allCartPros: state => state.all
}
const actions = {
  addToCart( {commit} ,data ){
    console.log('actions', data)
    return cart.getCartList(data).then(res => {
        commit(types.RECEIVE_PRODUCTS, res.data)
      return res
    })
  }
}
const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { products}) {
    state.all = products
  },
  [types.ADD_TO_CART] (state, { id }) {
    state.all.find(p => p.id === id).inventory--
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
