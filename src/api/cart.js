import Ax from 'axios'
export function getCartList () {
  return Ax.get('/api/cart').then(res => res.data)
}
export function addCart (id) {
  return Ax.get('/api/addcart?id=' + id).then(res => res.data)
}
