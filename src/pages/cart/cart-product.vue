<template>
  <div class="cart-pro">
    <div class="left-wrapper">
      <label class="checkbox">
        <i class="icon" :class="cartPro.checked ? 'icon-radio-checked':'icon-radio-unchecked'"></i>
        <input type="checkbox" v-model="cartPro.checked">
      </label>
    </div>
    <div class="right-wrapper">
      <div class="img-wrapper">
        <img :src="cartPro.imgUrl" alt="">
      </div>
      <div class="pro-name">
        <div class="title">{{cartPro.name}}</div>
        <div class="price">￥{{cartPro.price}}</div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'cartProduct',
    props: {
      cartPro: Object
    },
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cart-pro{
  height: 8rem;
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding: 1rem;
  background: #ffffff;
  overflow: hidden;
  .right-wrapper{
    width: 90%;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    .img-wrapper{
      width: 9.5rem;
      margin-right: 1rem;
      img{
        width: 100%;
      }
    }
    .pro-name{
      height: 6rem;
      display: flex;
      flex-direction: column;
      align-content: space-between;
      justify-content: space-around;
      .price{
        color: #ff2d52;
      }
    }
  }

}
</style>
