<template>
  <div>
    <h3>{{message | toUpper}}</h3>
  </div>
</template>

<script>
  export default {
    props: ['message'],
    filters: {
      toUpper: (str) => {
        return str.toUpperCase()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3{
  text-align: center;
  color: #148158;
  font-size: 32px;
  margin: 30px auto;
}
</style>
