<template>
  <div class="shopping-cart">
    <cart-product :cartPro="cartPro"></cart-product>
    <cart-product :cartPro="cartPro2"></cart-product>
    <div class="bottom-fixed">
      <label class="checkbox select-all" @click="selectAll">
        <i class="icon" :class="cartPro.checked ? 'icon-radio-checked':'icon-radio-unchecked'"></i>
        <input type="radio" v-model="selectAll">全选
      </label>
      <div class="total">合计: ￥{{getTotal}}</div>
      <button class="pay-btn">{{getPay}}</button>
    </div>
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
        selectAll: true,
        cartPro: {
          checked: true,
          imgUrl: require('assets/images/cartpro.jpg'),
          name: 'WebApp 书城整站开发',
          price: 128.00
        },
        cartPro2: {
          checked: false,
          imgUrl: require('assets/images/cartpro.jpg'),
          name: 'VueJS全家桶',
          price: 236.9
        }
      }
    },
    computed: {
      getPay: function () {
        return '去结算'
      },
      getTotal: function () {
        return 45
      }
    },
    methods: {
      selectAll () {
        this.selectAll = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bottom-fixed{
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #ffffff;
  line-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.6rem;
  padding-left: 1rem;
  .select-all{
    font-size: 1.4rem;
    .icon{
      display: inline-block;
      vertical-align: sub;
    }
  }
  .total{
    color: #000000;
    font-weight: 400;
    width: 30%;
  }
  .pay-btn{
    background: #ec1500;
    color: #ffffff;
    outline: none;
    border: none;
    width: 30%;
    height: 4rem;
  }
}
</style>
