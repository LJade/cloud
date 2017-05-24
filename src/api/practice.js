import Ax from 'axios'
export function getPracticeList (type) {
  return Ax.get('/api/practiceList').then(res => res.data)
}
