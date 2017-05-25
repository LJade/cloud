<template>
  <div class="practice">
    <div class="banner">
      <mt-swipe :auto="3000">
        <mt-swipe-item><img src="../../assets/images/index_banner1.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/images/index_banner2.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/images/index_banner3.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/images/index_banner4.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/images/index_banner5.jpg" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="classify">
      <div class="item" :class="{active:type==='all'}" @click="getPracticeList('all', 1)">全部</div>
      <div class="item" :class="{active:type==='front'}" @click="getPracticeList('front', 1)">前端开发</div>
      <div class="item" :class="{active:type==='back'}" @click="getPracticeList('back', 1)">后端开发</div>
      <div class="item" :class="{active:type==='mobile'}" @click="getPracticeList('mobile', 1)">移动开发</div>
      <div class="item" :class="{active:type==='database'}" @click="getPracticeList('database', 1)">数据库</div>
      <div class="item" :class="{active:type==='test'}" @click="getPracticeList('test', 1)">运维&测试</div>
    </div>
    <div class="list" ref="listWrapper" v-infinite-scroll="getPracticeList"
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="10">
      <course-preview v-for="info in list" :previewInfo="info" :key="info.id"></course-preview>
      <p class="achieve-bottom" ref="achieveBottom"></p>
    </div>
  </div>
</template>

<script>
  import coursePreview from '../../components/course_preview.vue'
  import {practice} from '../../api/index'
  export default {
    name: 'practice',
    components: {
      coursePreview
    },
    data () {
      return {
        type: 'all',
        list: [],
        loading: false,
        page: 1
      }
    },
    methods: {
      getPracticeList (type, page) {
        this.loading = true
        if (page === 1) {
          this.type = type
          this.page = 1
          this.list = []
          this.$refs.achieveBottom.innerHTML = ''
          practice.getPracticeList(type, page).then(res => {
            this.list = JSON.parse(res)
            this.loading = false
          })
        } else {
          this.page++
          practice.getPracticeList(this.type, this.page).then(res => {
            if (JSON.parse(res).length === 0) {
              this.$refs.achieveBottom.innerHTML = '我是有底线的~~~'
              return
            } else {
              this.list = this.list.concat(JSON.parse(res))
            }
            this.loading = false
          })
        }
      }
    },
    mounted () {
      this.getPracticeList('all', 1)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../../assets/color";
  .banner {
    width: 100%;
    height: 11.25rem;
    overflow: hidden;
    img {
      width: 100%;
    }
  }

  .classify {
    background: $white-color;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    height: 8rem;
    .item {
      width: 9rem;
      height: 2.5rem;
      line-height: 2.5rem;
      text-align: center;
      border: 1px solid #f2f2f2;
      border-radius: 20px;
      &.active {
        background: #fd2d4f;
        border: 1px solid #fd2d4f;
        color: $white-color;
      }
    }
  }

  .list {
    .course-preview {
      border-bottom: 1px solid $border-color;
      padding: 1rem;
      &:last-child {
        border-bottom: 0;
      }
    }
  }
</style>
