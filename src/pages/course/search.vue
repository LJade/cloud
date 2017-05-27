<template>
  <div class="search">
    <div class="search-group">
      <input type="text" v-model="keyword" placeholder="请输入搜索内容" @keyup.enter="search(keyword)">
      <div class="icon-close" @click="closeSearchList"><i class="icon-cross"></i></div>
      <button type="button" @click="search(keyword)"><i class="icon icon-search"></i>
      </button>
    </div>
    <div class="search-block" v-show="searchList.length===0">
      <div class="block-header">搜索历史
        <div class="clear-history" @click="clearHistory">清除</div>
      </div>
      <div class="block-body">
        <div class="search-item" v-show="historyList.length>0" v-for="item in historyList" @click="search(item)">{{item}}</div>
        <div class="search-item" v-show="historyList.length===0" style="font-size:1.2rem">暂无搜索历史</div>
      </div>
    </div>
    <div class="search-block" v-show="searchList.length===0">
      <div class="block-header">热门搜索</div>
      <div class="block-body">
        <div class="search-item" v-for="item in hotSearch" @click="search(item)">{{item}}</div>
      </div>
    </div>
    <div class="search-block" v-show="searchList.length>0">
      <course-preview v-for="item in searchList" :key="item.id" :previewInfo="item"></course-preview>
    </div>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  import {search} from '../../api'
  import coursePreview from '../../components/course_preview.vue'
  export default {
    name: 'search',
    components: {
      coursePreview
    },
    data () {
      return {
        keyword: '',
        historyList: [],
        searchList: [],
        hotSearch: ['Vue', 'Java', 'C++', 'Android', 'Yii']
      }
    },
    methods: {
      closeSearchList () {
        this.keyword = ''
        this.searchList = []
        this.historyList = JSON.parse(localStorage.getItem('imooc_search')) ? JSON.parse(localStorage.getItem('imooc_search')) : []
      },
      clearHistory () {
        this.historyList = []
        localStorage.removeItem('imooc_search')
      },
      search (keyword) {
        if (!keyword) Toast({message: '先输入关键字哦'})
        else search.search.call(this, keyword.toLowerCase())
      }
    },
    mounted () {
      this.closeSearchList()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../../assets/color";

  .search {
    min-height: 100vh;
    background: $white-color;
    .search-group {
      background: #333949;
      line-height: 3;
      height: 6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      input {
        flex: auto;
        height: 3rem;
        border: none;
        outline: none;
        padding: 0 0 0 2rem;
        background: #333949;
        color: $white-color;
      }
      button {
        flex: 1;
        width: 3rem;
        height: 3rem;
        border: none;
        outline: none;
        background: #333949;
        text-align: left;
        i.icon {
          color: $white-color;
          font-size: 1.6rem;
          line-height: 3rem;
        }
      }
      .icon-close {
        width: 2rem;
        height: 2rem;
        position: absolute;
        right: 10rem;
        text-align: center;
        i {
          color: $white-color;
          font-size: 1rem;
          line-height: 2rem;
        }
      }
    }
    .search-block {
      padding: 0 1rem;
      .block-header {
        border-bottom: 1px solid $border-color;
        line-height: 3;
        color: $vice-color;
        position: relative;
        .clear-history {
          position: absolute;
          font-size: 1.2rem;
          color: $tip-color;
          right: 1rem;
          top: 0.5rem;
        }
      }
      .block-body {
        padding: 2rem 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        .search-item {
          line-height: 2;
          color: $main-color;
        }
      }
    }
  }

  .course-preview {
    margin-top: 1.5rem;
  }
</style>
