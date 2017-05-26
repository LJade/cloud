import Ax from 'axios'
import {Toast} from 'mint-ui'
export function search (keyword) {
  return Ax.get('/api/search?keyword=' + keyword).then(res => {
    if (res && res.data.status === 200) {
      console.log(res)
      this.searchList = res.data.data
      let historySearch = JSON.parse(localStorage.getItem('imooc_search')) ? JSON.parse(localStorage.getItem('imooc_search')) : []
      let index = historySearch.findIndex(function (keyword) {
        return keyword
      })
      if (index !== 'undefined') historySearch.push(keyword)
      else historySearch.splice(index, 1).push(keyword)
      this.historyList = historySearch.reverse()
      localStorage.setItem('imooc_search', JSON.stringify(historySearch))
    } else if (res && res.data.status === 304) Toast({message: '抱歉，搜不到啊，我也很绝望啊'})
  })
}
