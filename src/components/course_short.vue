<template>
  <div class="course-intro-box">
    <div class="inner-wrapper">
      <div class="img-wrapper">
        <img :src="courseIntro.imgUrl" alt="">
      </div>
      <div class="content-wrapper">
        <div class="title">{{courseIntro.title}}</div>
        <div class="desc">{{courseIntro.desc}}</div>
        <div class="intro">
          <span class="level">{{courseIntro.level}}</span>
          <span class="count">{{courseIntro.count}}人学习</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'course_short',
    props: {
      courseIntro: Object
    },
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .course-intro-box{
    background: #fff;
    padding:  0 1rem;
    &:last-child{
      .inner-wrapper{
        border-bottom: none;
      }
    }
    .inner-wrapper{
      padding:  1rem 0;
      border-bottom: 1px solid #e5e5e5;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .img-wrapper{
        width: 9rem;
        height: 8rem;overflow: hidden;
        flex:1 0 33.3%;
        img{
          width: 100%;
        }
      }
      .content-wrapper{
        flex-basis: 66.6%;
        padding-left: 1rem;
        .title{
          height: 3rem;
          line-height: 3rem;
          white-space: nowrap;
        }
        .desc{
          height: 4rem;
          color: #e5e5e5;
          font-size: 1rem;
        }
        .intro{
          font-size: 1.2rem;
          .level{
            padding: 1px 4px;
            background: #cccccc;
            color: #ffffff;
            border-radius: 3px;
          }
          .count{
            color: #666666;
            margin-left: 1.5rem;
          }
        }
      }
    }
  }
</style>
