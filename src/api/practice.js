import Ax from 'axios'
export function getPracticeList (type) {
  return Ax.get('/api/').then(res => res.data)
}
