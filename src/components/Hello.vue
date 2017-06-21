<template>
  <div class="hello">
    <h1>{{title}}</h1>
    <vc-message :message="message"></vc-message>
    <button type="button" @click="setMessage('Here has been become another Message ')">设置</button>
  </div>
</template>

<script>
  import child from './child.vue'
  export default {
    name: 'hello',
    components: {
      'vc-message': child
    },
    data () {
      return {
        title: 'Hello Word',
        message: 'Welcome to Your Vue.js App'
      }
    },
    mounted () {
      this.title = 'Hello Karma'
    },
    methods: {
      setMessage (msg) {
        this.message = msg
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1{
    text-align: center;
    padding: 2rem;
  }
button{
  display: block;
  width: 60%;
  margin: 20px auto;
  border: none;
  line-height: 3rem;
  color: #ffffff;
  background: #148158;
}
</style>
