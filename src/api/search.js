import Ax from 'axios'
import {Toast} from 'mint-ui'
export function search (keyword) {
  return Ax.get('/api/search?keyword=' + keyword).then(res => {
    if (res && res.data.status === 200) {
      this.searchList = res.data.data
      // 历史记录
      let temp = JSON.parse(localStorage.getItem('imooc_search')) ? JSON.parse(localStorage.getItem('imooc_search')) : []
      let index = temp.findIndex(function (ele) { return ele === keyword })
      if (index !== -1) temp.splice(index, 1)
      this.historyList = temp.push(keyword)
      localStorage.setItem('imooc_search', JSON.stringify(temp.reverse()))
    } else if (res && res.data.status === 304) Toast({message: '抱歉，搜不到啊，我也很绝望啊'})
  })
}
