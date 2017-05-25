<template>
  <div class="shopping-cart">
    <cart-product v-for="cartPro in allProducts" :cartPro="cartPro" :key="cartPro.id"
                  v-on:selectPro="selectPro"></cart-product>
    <div class="bottom-fixed">
      <label class="checkbox select-all" @click.stop.prevent="selectAllPros">
        <i class="icon" :class="selectAll ? 'icon-radio-checked':'icon-radio-unchecked'"></i>
        <input type="radio" v-model="selectAll">全选
      </label>
      <div class="total">合计: ￥{{getTotal}}</div>
      <button class="pay-btn" @click="goPay">去结算</button>
    </div>
  </div>
</template>

<script>
  import CartProduct from './cart-product'
  import {mapGetters, mapActions} from 'vuex'
  import {Toast} from 'mint-ui'
  export default {
    components: {CartProduct},
    name: 'cart',
    data () {
      return {
        selectAll: false
      }
    },
    computed: {
      ...mapGetters(['allProducts', 'selectedPro']),
      getTotal: function () {
        let total = 0
        this.selectedPro.forEach((pro) => {
          total += pro.price
        })
        return total
      }
    },
    methods: {
      ...mapActions(['getAllProducts', 'modifyChecked', 'modifyAll']),
      goPay () {
        if (this.selectedPro.length > 0) {
          this.$router.push('/payment')
        } else {
          Toast({message: '亲，先选择要购买的商品哦'})
        }
      },
      selectAllPros () {
        if (!this.selectAll) {
          this.modifyAll({selectAll: false})
        } else {
          this.modifyAll({selectAll: true})
        }
        this.selectAll = !this.selectAll
      },
      selectPro (pro) {
        this.modifyChecked(pro)
        this.selectedPro.length === this.allProducts.length ? this.selectAll = true : this.selectAll = false
      }
    },
    mounted () {
      this.getAllProducts()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../../assets/color";
  .bottom-fixed {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background: $white-color;
    line-height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.6rem;
    padding-left: 1rem;
    .select-all {
      font-size: 1.4rem;
      .icon {
        display: inline-block;
        vertical-align: sub;
      }
    }
    .total {
      color: $black-color;
      font-weight: 400;
      width: 30%;
    }
    .pay-btn {
      background: $red-color;
      color: $white-color;
      outline: none;
      border: none;
      width: 30%;
      height: 4rem;
    }
  }
</style>
