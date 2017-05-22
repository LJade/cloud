import Ax from 'axios'
export function getCartList () {
  return Ax.get('/api/cart').then(res => res.data)
}
export function addToCart (id) {
  return Ax.get('/api/addcart' + id).then(res => res.data)
}
