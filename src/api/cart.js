import Ax from 'axios'
export function getCartList () {
  return Ax.get('/api/cart').then(res => res.data)
}
