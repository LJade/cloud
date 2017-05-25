<template>
  <router-link to="" class="course-preview">
    <div class="preview-left"><img :src="previewInfo.imgUrl" alt=""></div>
    <div class="preview-right">
      <div class="title">{{previewInfo.title}}</div>
      <div class="price">{{previewInfo.price}}</div>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'course-preview',
    props: {
      previewInfo: Object
    },
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/color";
.course-preview{
  background: $white-color;
  display: flex;
  .preview-left{
    flex:1;
    img{
      width: 9rem;
      height: 6rem;
    }
  }
  .preview-right{
    padding-left: 1rem;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    line-height: 1.5;
    .title{
      white-space: nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
      width: 100%;
    }
    .price{
      width: 100%;
      color: $red-color;
      display: flex;
      align-items: flex-end;
    }
  }
}
</style>
