<template>
  <div class="shopping-cart">
    <cart-product :cartPro="cartPro"></cart-product>
  </div>
</template>

<script>
  import cartPro from './cart-product.vue'
  import CartProduct from './cart-product'
  export default {
    components: {CartProduct},
    name: 'cart',
    component: cartPro,
    data () {
      return {
        cartPro: {
          checked: true,
          imgUrl: require('assets/images/cartpro.jpg'),
          name: 'WebApp 书城整站开发',
          price: 128.00
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
