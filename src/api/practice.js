import Ax from 'axios'
export function getPracticeList (type, page) {
  return Ax.get('/api/practiceList?type=' + type + '&page=' + page).then(res => res.data)
}
