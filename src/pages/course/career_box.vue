<template>
    <router-link to="home" class="career-box">
      <div class="img-wrapper">
        <img :src="careerInfo.imgUrl" alt="">
      </div>
      <div class="info-wrapper">
        <h3 class="title">{{careerInfo.title}}</h3>
        <p class="intro"><i>{{careerInfo.courseNum}}门课</i><i>{{careerInfo.studyNum}}人学习</i></p>
        <div class="desc">{{careerInfo.description}}</div>
        <div class="price">￥{{careerInfo.price}}</div>
      </div>
    </router-link>
</template>

<script>
  export default {
    name: 'hello',
    props: {
      careerInfo: Object
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../../assets/color";
.career-box{
  display: block;
  width: 70%;
  box-shadow: 0 0 2px 2px rgba(0,0,0,0.1);
  margin: 2rem auto;
  border-radius: 4px 4px 10px 10px;
  background: $white-color;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;
  &:after,&:before{
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    bottom: 2px;
    border-radius: 10px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  &:before {
    bottom: 5px;
  }
  .img-wrapper{
    width: 100%;
    height: 7rem;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
  .info-wrapper{
    padding: 1rem;
    h3.title{
      font-size: 1.4rem;
    }
    .intro,.desc{
      color: $vice-color;
      font-size: 1.2rem;
    }
    .intro{
      line-height: 2;
      i{
        margin-right: 5rem;
      }
    }
    .price{
      color: $red-color;
      margin-top: 0.5rem;
    }
  }
}
</style>
