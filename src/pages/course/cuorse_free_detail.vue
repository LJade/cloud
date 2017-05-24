<template>
  <div class="course-detail">
    <div class="detail-header">
      <h1 class="title">{{courseDetail.title}}</h1>
      <div class="collect-wrapper clear-fix">
        <div class="collect">
          <i class="icon icon-stars"></i>
        </div>
        <div class="share">
          <i class="icon icon-share"></i>
        </div>
      </div>
    </div>
    <div class="detail-desc">
      <span class="level">{{courseDetail.level}}</span>
      <p>{{courseDetail.desc}}</p>
    </div>
    <div class="detail-author">
      <div class="author">
        <div class="author-avatar">
          <img :src="courseDetail.avatarImgUrl" alt="">
        </div>
        <div class="author-name">{{courseDetail.author}}</div>
      </div>

      <div class="icon-wrapper">
        <i class="icon-right"></i>
      </div>
    </div>
    <div class="detail-comment">
      <div class="comment-intro">
        <div class="score">综合评分<span>{{courseDetail.commentScore}}</span></div>
        <router-link to="/comment">查看全部{{courseDetail.commentNum}}人评价</router-link>
      </div>
      <comment-box :comment="courseDetail.comment"></comment-box>
    </div>
    <div class="detail-note">
      <div class="note-block">
        <div class="note-title">课程须知</div>
        <p class="note-content">{{courseDetail.learnPrevious}}</p>
      </div>
      <div class="note-block">
        <div class="note-title">老师告诉你能学到什么?</div>
        <p class="note-content">{{courseDetail.learnWhat}}</p>
      </div>
      <div class="note-block">
        <div class="note-title">课程提纲</div>
          <chapter-list :chapters="courseDetail.chapters"></chapter-list>
      </div>
    </div>
    <router-link to="/video" id="learnBtn">开始学习</router-link>
  </div>
</template>

<script>
  import commentBox from '../../components/comment.vue'
  import chapterList from '../../components/chapter_list.vue'
  export default {
    name: 'detail',
    components: {
      commentBox,
      chapterList
    },
    data () {
      return {
        courseDetail: {
          title: 'KVM虚拟化技术',
          level: '高级',
          desc: '云计算是一种全新的企业IT交付方式，是社会进一步精细化分工的结果，是IT运维技术向自动化、服务化和规模化演进的方向。本课程将介绍云服务底层架构中的KVM虚拟化技术',
          avatarImgUrl: require('assets/images/company.jpeg'),
          author: '美团云',
          commentScore: 8.9,
          commentNum: 235,
          comment: {
            avatarUrl: require('assets/images/avatar.png'),
            user: 'LJade',
            score: 9.6,
            time: '2017-4-5',
            content: '不错，这个课程逼格很高，多学习没坏处，老师声音性感好听，可不可以和老师做个朋友'
          },
          learnPrevious: '想学习本课程，你需要大概了解云服务是什么。本课程适合对云服务底层架构感兴趣的工程师',
          learnWhat: 'KVM虚拟化技术的各个板块',
          chapters: [{
            title: '课程介绍',
            section: [{name: '虚拟化技术0', id: 'efs54w5d'},
              {name: '虚拟化技术1', id: '04442cds'},
              {name: '虚拟化技术2', id: 'dv5dd501'},
              {name: '虚拟化技术3', id: '547d1f5e'},
              {name: '虚拟化技术3', id: '547d1f5e'},
              {name: '虚拟化技术3', id: '547d1f5e'}

            ]
          },
          {
            title: '虚拟技术',
            section: [{name: '虚拟原理0', id: '21f11f1e'},
            {name: '虚拟原理1', id: 'xdf1ee5f'},
            {name: '虚拟原理2', id: '45g1g5bg'},
            {name: '虚拟原理3', id: 'g451n5gf'}]
          },
          {
            title: '内存技术',
            section: [{name: '缺页终端还是', id: '21f11f1e'},
              {name: '访问SPA站点', id: 'xdf1ee5f'},
              {name: '内存的分类和未来', id: '45g1g5bg'}]
          }
          ]
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .course-detail {
    padding-bottom: 4.5rem;
  }

  .detail-header {
    height: 12rem;
    background: url("../../assets/images/headerbg.png") no-repeat;
    background-size: 100%;
    position: relative;
    .title {
      color: #fff;
      font-size: 1.8rem;
      position: absolute;
      bottom: 2rem;
      left: 2rem;
    }
    .collect-wrapper {
      position: absolute;
      right: 0;
      bottom: -2.5rem;
      .collect, .share {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        line-height: 5rem;
        text-align: center;
        background: #ffffff;
        float: left;
        margin-right: 1rem;
        box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
        i {
          font-size: 2.8rem;
          vertical-align: middle;
          color: #666;
        }
      }
    }
  }

  .detail-desc {
    padding: 1rem;
    background: #fff;
    border-bottom: 1px solid #e5e5e5;
    .level {
      display: inline-block;
      background: #ffa019;
      color: #ffffff;
      padding: 2px 4px;
      margin-bottom: 1rem;
      border-radius: 2px;
      font-size: 1.2rem;
    }
    p {
      color: #999999;
      line-height: 1.5;
    }
  }

  .detail-author {
    height: 7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    padding: 1rem;
    border: 1px solid #e5e5e5;
    .author {
      display: flex;
      align-items: center;
      .author-avatar {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid rgba(0, 0, 0, 0.2);
        margin-right: 1rem;
        img {
          width: 100%;
        }
      }
      .author-name {
        font-size: 1.6rem;
      }
    }
    .icon-wrapper {
      i {
        font-size: 2.4rem;
        color: #999999;
      }
    }
  }

  .detail-comment {
    background: #ffffff;
    .comment-intro {
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 1.8;
      .score {
        font-size: 1.6rem;
        span {
          font-size: 2.4rem;
          margin-left: 1rem;
        }
      }
      a {
        color: #27a4aa;
      }
    }
  }

  .detail-note {
    border-top: 1px solid #e5e5e5;
    background: #ffffff;
    padding: 1rem;
    .note-block {
      .note-title {
        padding-bottom: 1rem;
      }
      .note-content {
        color: #999999;
        padding-left: 2.4rem;
        line-height: 2;
        margin-bottom: 1rem;
      }
      &:last-child {
        .note-content {
          margin-bottom: 0;
        }
      }
    }
      .course-chapter{
        border-left: 1px solid #e5e5e5;
        padding-left: 2rem;
        position: relative;
        &:before{
          content: '';
          display: block;
          position: absolute;
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background: #e5e5e5;
          left: -0.5rem;
        }
        &:last-child{
          border-left: none;
        }
        .chapter-title{
        }
        .chapter-item{
          line-height: 2.5;
          color: #666666;
        }
      }
  }

  #learnBtn {
    border: none;
    background: #fe2e50;
    color: #ffffff;
    font-size: 1.8rem;
    line-height: 4rem;
    text-align: center;
    display: block;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
  }
</style>
