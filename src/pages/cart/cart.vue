<template>
  <div class="shopping-cart">
    <cart-product v-for="cartPro in allProducts" :cartPro="cartPro" :key="cartPro.id"></cart-product>
    <div class="bottom-fixed">
      <label class="checkbox select-all" @click="selectAll">
        <i class="icon" :class="selectAll.checked ? 'icon-radio-checked':'icon-radio-unchecked'"></i>
        <input type="radio" v-model="selectAll">全选
      </label>
      <div class="total">合计: ￥{{getTotal}}</div>
      <button class="pay-btn">{{getPay}}</button>
    </div>
  </div>
</template>

<script>
  import CartProduct from './cart-product'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    components: {CartProduct},
    name: 'cart',
    data () {
      return {
        selectFoods: [''],
        selectAll: true
      }
    },
    computed: {
      ...mapGetters(['allProducts']),
      getPay: function () {
        return '去结算'
      },
      getTotal: function () {
        let total = 0
        this.selectFoods.forEach((food) => {
          total += food.price
        })
        return total
      }
    },
    methods: {
      selectAll () {
        this.selectAll = false
      },
      ...mapActions(['getAllProducts'])
    },
    created () {
      this.getAllProducts()
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
