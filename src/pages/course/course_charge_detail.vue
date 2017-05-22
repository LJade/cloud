<template>
  <div class="course-charge">
    <div class="charge-header">
      <div class="nav-header">
        <h2>ES6零基础教学  解析彩票项目</h2>
        <button><i class="icon icon-play3"></i> 试学</button>
      </div>
      <div class="nav-tab">
        <div class="tab-item">介绍</div>
        <div class="tab-item">章节</div>
        <div class="tab-item">评价</div>
        <div class="tab-item">咨询</div>
      </div>
    </div>
    <div class="charge-body">
      <div class="tab-body">
        <div class="intro">
          <p>{{course.intro}}</p>
          <div><span>难度:{{course.level}}</span>
            <span>时长:{{course.time}}</span>
            <span>学习人数:{{course.num}}人</span></div>
        </div>
        <div class="comment-pre">

          <div class="inner-pre">
            <div class="title"><h4>综合评价  <em>{{course.avgScore}}</em></h4>
              <div class="comment-tag">
                <span v-for="tag in course.tag">{{tag.tag}}<i>{{tag.score}}</i></span>
              </div>
            </div>
            <comment :comment="course.comment"></comment>
            <router-link to="" class="go-comments">
              查看全部评价({{course.commentNum}})
            </router-link>
          </div>
          <div class="inner-pre">
            <div class="title"><h4>实战咨询</h4></div>
            <router-link to="" class="go-consult">{{course.consult}}</router-link>
          </div>
        </div>
        <div class="img-detail" v-for="img in course.detailImgUrl">
          <img :src="img" alt="">
        </div>
      </div>
    </div>
    <div class="bottom-fixed">
      <div class="price">￥{{course.price}}</div>
      <button type="button" class="add-cart" @click="addToCart(course)">加入购物车</button>
      <button type="button" class="go-buy">立即购买</button>
    </div>
  </div>
</template>

<script>
  import comment from '../../components/comment.vue'
  import { mapActions } from 'vuex'
  export default {
    name: 'course_charge',
    components: {
      comment
    },
    data () {
      return {
        course: {
          id: 'asw34q4v',
          intro: 'ES6从零开始，两声设计的迷你案例，让你全面掌握ES6',
          level: '中级',
          time: '13小时',
          num: '315',
          avgScore: 9.6,
          commentNum: 26,
          consult: '是否需要先有ES5基础才能学，还是直接用ES6就可以',
          detailImgUrl: ['/static/images/pro1.jpg', '/static/images/pro2.jpg', '/static/images/pro3.jpg', '/static/images/pro4.jpg', '/static/images/pro5.jpg', '/static/images/pro6.jpg'],
          tag: [{tag: '内容实用', score: '10.0'}, {tag: '通俗易懂', score: '9.9'}, {tag: '逻辑清晰', score: '9.9'}],
          comment: {
            avatarUrl: '/static/images/avatar.png',
            user: '穿越人潮',
            score: 10,
            content: '其实写个评论也很难啊，好呢还是不好呢，就这吧，我觉得还好啦'
          },
          price: 5420.2
        }
      }
    },
    methods: {
      ...mapActions(['addToCart'])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .course-charge {
    padding-bottom: 4rem;
  }

  .comment-box {
    border: none;
  }

  .charge-header {
    background: #fff;
    box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.2);
    .nav-header {
      height: 10rem;
      color: #ffffff;
      background: #fff url("../../assets/images/bg1.png") no-repeat;
      background-size: 100%;
      padding-top: 3rem;
      text-align: center;
      h2 {
        font-size: 1.6rem;
      }
      button {
        color: #fff;
        padding: 0.8rem 2.5rem;
        border: 1px solid rgba(255, 255, 255, 0.5);
        background: transparent;
        margin-top: 3rem;
      }
    }
    .nav-tab {
      display: flex;
      align-items: center;
      text-align: center;
      line-height: 3;
      .tab-item {
        width: 25%;
      }
    }
  }

  .charge-body {
    .intro {
      background: #ffffff;
      width: 94%;
      border-radius: 3px;
      margin: 1rem auto;
      box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
      p {
        padding: 1rem;
        line-height: 1.5;
      }
      div {
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        display: flex;
        justify-content: space-between;
        span {
          display: block;
          padding: 1rem;
          font-size: 1.2rem;
          text-align: center;
          width: 100%;
          border-left: 1px solid rgba(0, 0, 0, 0.2);
          &:nth-child(1) {
            border-left: none;
          }
        }
      }
    }
    .comment-pre {
      background: #ffffff;
      width: 94%;
      border-radius: 3px;
      margin: 1rem auto;
      box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
      .inner-pre {
        padding: 1rem 1rem 0 1rem;
        border-bottom: 1px solid #e5e5e5;
      }
      .title {
        font-size: 1.6rem;
        h4 {
          line-height: 2;
        }
        em {
          color: #ec1500;
        }
        .comment-tag {
          font-size: 1.3rem;
          span {
            display: inline-block;
            margin-right: 1rem;
            padding: 5px;
            border: 1px solid #e5e5e5;
            color: #666666;
            i {
              color: #000;
              margin-left: 5px;
            }
          }
        }
      }
      .go-comments {
        display: block;
        font-size: 1.6rem;
        color: #666666;
        border: 1px solid #e5e5e5;
        text-align: center;
        padding: 1rem;
        border-radius: 3px;
        width: 50%;
        margin: 1rem auto;
      }
      .go-consult {
        display: block;
        white-space: nowrap;
        padding: 1rem;
        color: #666666;
        line-height: 2;
        overflow: hidden;
      }
    }
    .img-detail {
      img {
        width: 100%
      }
    }
  }

  .bottom-fixed {
    width: 100%;
    position: fixed;
    bottom: 0;
    background: #fff;
    font-size: 1.6rem;
    line-height: 4rem;
    display: flex;
    box-shadow: 0 -1px 1px 1px rgba(0, 0, 0, 0.1);
    justify-content: space-between;
    align-items: center;
    .go-buy, .add-cart, .price {
      width: 33.3%;
    }
    .price {
      color: #ec1500;
      text-align: center;
    }
    .add-cart, .go-buy {
      height: 4rem;
      border: none;
      outline: none;
      color: #ffffff;
    }
    .add-cart {
      background: #ffa020;
    }
    .go-buy {
      background: #ff2d52;
    }
  }
</style>
