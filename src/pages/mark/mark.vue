<template>
  <div class="mark">
    <mark-box :markInfo="markInfo"></mark-box>
    <mark-box :markInfo="markInfo"></mark-box>
    <mark-box :markInfo="markInfo"></mark-box>
  </div>
</template>

<script>
  import markBox from './markbox.vue'
  export default {
    name: 'mark',
    components: {
      markBox
    },
    data () {
      return {
        markInfo: {
          title: '高效的尖端开发，Vue全家桶剪辑系列手记',
          content: '如果苹果真的不能按照常规时间发布自己的最新旗舰手机iPhone8的话，对竞争对手无疑是一个好消息。首先利好的无疑是三星。众所周知，三星已经发布了其最新的旗舰手机Galaxy S8，全新的设计和继续延续曲面屏的风格也的确让人眼前一亮，当然热销的前提是能否让人们忘记Note7曾经的炸机门事件。令人不解的是，三星居然在“缝缝补补”之后，竟然又要推出“折价”之后的Note7，不知道是谁出的馊主意，虽然表面看能把曾经Note7炸机门的成本损失降低很多，但是这样做的后果是让用户对三星品质的质疑，一旦“改版”之后的Note7再出现问题怎么办？不是销毁，而是修补之后的再入市，或许这是三星的一步臭棋。'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../../assets/color";
.mark{
  min-height: 100vh;
  background: $white-color;
}
</style>
