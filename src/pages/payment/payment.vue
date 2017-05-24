<template>
  <div class="payment">
    <div class="pay-block">
      <div class="title">商品信息</div>
      <div class="pay-content">
        <course-preview :previewInfo="previewInfo"></course-preview>
      </div>
    </div>
    <div class="pay-block">
      <div class="title">支付方式</div>
      <div class="pay-content">
        <img src="../../assets/images/alipay.png" alt="">
      </div>
    </div>
    <div class="pay-block">
      <div class="pay-info">
        <span class="coupon">优惠券 <i>0张可用</i></span>
        <i class="icon-right"></i>
      </div>
    </div>
    <div class="pay-block">
      <div class="pay-info">
        <span>商品金额</span>
        <i class="money">￥188.00</i>
      </div>
      <div class="pay-info">
        <span>优惠券抵扣</span>
        <i class="money">-￥0.00</i>
      </div>
    </div>
    <div class="pay-block protocol">
      <i class="icon icon-checkbox-checked"></i>
      我已阅读并同意
      <router-link to="" class="protocol-link">《用户付费协议》</router-link>
    </div>
    <div class="fixed-bottom">
      <div class="total">实付 <span class="money">￥188.00</span></div>
      <button type="button" class="pay-btn">提交订单</button>
    </div>
  </div>
</template>

<script>
  import coursePreview from '../../components/course_preview.vue'
  export default {
    name: 'payment',
    components: {
      coursePreview
    },
    data () {
      return {
        previewInfo: {
          id: 'ec4d5s5v',
          title: 'ES6零基础教学 解析彩票项目，带你装逼带你飞',
          price: '188.00',
          imgUrl: '/static/images/es6.jpg'
        },
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .payment, .protocol, .title, .pay-info, .pay-content {
    padding: 1rem;
  }
  .pay-block {
    color: #999999;
    background: #ffffff;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
    margin-bottom: 1rem;
    .pay-info {
      display: flex;
      justify-content: space-between;
    }
    .pay-content {
      border-top: 1px solid #e5e5e5;
      img {
        height: 3rem;
      }
    }
    .coupon {
      display: flex;
      justify-content: center;
      align-items: center;
      i{ color: #fff;
        background: #bbbbbb;
        font-size: 1rem;
        border-radius: 2px;
        display: block;
        padding: 2px 4px;
        margin-left: 1rem;
      }
    }
    .icon {
      color: #2ec284;
    }
    .protocol-link {
      color: #34a2df;
    }
  }

  .money {
    color: #ec1500;
  }

  .fixed-bottom {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    background: #fff;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    line-height: 4rem;
    .pay-btn {
      background: #ec1500;
      color: #ffffff;
      height: 4rem;
      width: 40%;
      font-size: 1.6rem;
      border: none;
    }
    .total {
      text-align: center;
      width: 60%;
      .money {
        font-size: 1.6rem;
      }
    }
  }
</style>
