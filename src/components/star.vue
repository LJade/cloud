<template>
  <div class="star">
    <span class="star-wrapper" v-for="star in getStars">
       <i :class="star"></i>
    </span>
  </div>
</template>
<script>
  export default {
    name: 'star',
    props: {
      score: {
        type: Number
      }
    },
    data () {
      return {
      }
    },
    computed: {
      getStars: function () {
        return Array.from({length: 5}, (x, i) => {
          if (i + 1 <= this.score) return 'icon-star-full'
          if (i + 1 > this.score && i + 0.5 <= this.score) return 'icon-star-half'
          return 'icon-star-empty'
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .icon-star-full, .icon-star-half {
    color: #f79a00;
  }
  .icon-star-empty{
    color: #bebebe;
  }
</style>
