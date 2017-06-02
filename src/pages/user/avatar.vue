<template>
  <div class="changeAvatar">
    <label class="upload">
      上传图片
      <input type='file' @change="onFileChange" ref="input" multiple accept="image/jpeg,image/jpg,image/png">
    </label>
    <ul class="pic-list clear-fix">
      <li v-for="(img, index) in images">
        <img :src="img" alt="">
        <div class="del-wrapper" @click="delImage(index)">
          <i class="icon-cross"></i>
        </div>
      </li>
    </ul>
    <button type="button" @click='uploadImage'>上传</button>
    <label class="upload">
      上传图片
      <input type='file' @change="fileChange" accept="image/jpeg,image/jpg,image/png">
    </label>
    <div class="crop" id="crop" v-show="!hasCropped">
      <div class="mask"></div>
      <div class="crop-size" ref="cropSize">
      </div>
      <div id="drag" ref="drag" v-drag>
        <canvas id="canvas" width="100%" height="auto" ref="canvas"></canvas>
      </div>
      <button type="button" @click='cropImg'>裁剪</button>
    </div>
    <div class="crop-result" v-show="hasCropped">
      <canvas id="cropResult"></canvas>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'avatar',
    data () {
      return {
        images: [],
        hasCropped: false
      }
    },
    directives: {
      drag: {
        inserted: function () {
          let drag = document.getElementById('drag')
          let originX
          let originY
          let mouseX
          let mouseY
          drag.onmousedown = function (e) {
            // 获得鼠标按下时，point 相对父元素的位置
            mouseX = e.clientX
            mouseY = e.clientY
            originX = e.offsetX
            originY = e.offsetY
            document.onmousemove = function (e) {
              let left = originX + e.clientX - mouseX
              let top = originY + e.clientY - mouseY
              if (left < 0) left = 0
              else if (left > (drag.parentNode.offsetWidth - drag.offsetWidth)) left = drag.parentNode.offsetWidth - drag.offsetWidth
              if (top < 0) top = 0
              else if (top > drag.parentNode.offsetHeight - drag.offsetHeight) top = drag.parentNode.offsetHeight - drag.offsetHeight
              drag.style.left = left + 'px'
              drag.style.top = top + 'px'
            }
            document.onmouseup = function (e) {
              this.onmousemove = null
              this.onmouseup = null
            }
          }
        }
      }
    },
    methods: {
      cropImg () {
        let canvas = document.getElementById('cropResult')
        let ctx = canvas.getContext('2d')
        let img = document.getElementById('tempImg')
        console.log(img.style.width)
        console.log(img.offsetWidth, img.offsetHeight)
        console.log(this.$refs.cropSize.offsetWidth, this.$refs.cropSize.offsetHeight)
        let left = img.offsetWidth - this.$refs.cropSize.offsetLeft
        let top = img.offsetHeight - this.$refs.cropSize.offsetTop
        let width = this.$refs.cropSize.clientWidth
        let height = this.$refs.cropSize.clientHeight
        console.log(left, top)
        console.log(width, height)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.hasCropped = true
        ctx.drawImage(img, left, top, width, height, 0, 0, width, height)
      },
      fileChange (e) {
        let image = new Image()
        let canvas = this.$refs.canvas
        let ctx = canvas.getContext('2d')
        let file = e.target.files[0]
        let fr = new FileReader()
        fr.onload = function (e) {
          image.src = e.target.result
          console.log(image.naturalWidth, image.naturalHeight)
        }
        image.onload = function () {
          canvas.width = image.naturalWidth
          canvas.height = image.naturalHeight
          image.id = 'tempImg'
          image.style.display = 'none'
          document.body.appendChild(image)
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
        }
        fr.readAsDataURL(file)
      },
      uploadImage () {
        let obj = {}
        obj.images = this.images
        console.log(obj)
      },
      onFileChange (e) {
        let files = e.target.files || e.dataTransfer.files
        if (!files.length) return
        this.createImage(files)
      },
      createImage (file) {
        if (typeof FileReader === 'undefined') {
          alert('您的浏览器不支持图片上传，请升级您的浏览器')
          return false
        }
        // let image = new Image()
        let vm = this
        let leng = file.length
        for (let i = 0; i < leng; i++) {
          let reader = new FileReader()
          reader.readAsDataURL(file[i])
          reader.onload = function (e) {
            vm.images.push(e.target.result)
          }
        }
      },
      delImage (index) {
        this.images.splice(index, 1)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .crop {
    height: 30rem;
    width: 30rem;
    border: 1px solid red;
    position: relative;
    overflow: auto;
    .mask {
      position: absolute;
      width: 100%;
      height: 30rem;
      z-index: 5;
      $color: rgba(0, 0, 0, .3);
      // background: linear-gradient($color calc((30rem - 15rem) / 2), transparent 0, transparent 22.5rem, $color 22.5rem), linear-gradient(to right, $color calc((100vw - 15rem) / 2), transparent 0, transparent calc((100vw - 15rem) / 2 + 15rem), $color 0);
      // background-size: 15rem 100%, 100% 100%;
    }
    .crop-size {
      width: 15rem;
      height: 15rem;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -7.5rem;
      margin-left: -7.5rem;
      border: 2px dashed #148158;
      z-index: 30;
      background: transparent;
    }
    button {
      width: 6rem;
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 6;
      margin: 0;
    }
  }

  #drag {
    position: absolute;
    z-index: 20;
    width: 100%;
    height: auto;
    min-width: 5rem;
    min-height: 5rem;
    top: 0;
    left: 0;
    cursor: move;
    border: 2px dashed transparent;
    overflow: hidden;
    &:hover {
      border-color: #de3c50;
      cursor: move;
    }
  }

  .changeAvatar {
    min-height: 100vh;
    background: #ffffff;
  }

  .upload {
    display: inline-block;
    width: 6rem;
    height: 6rem;
    line-height: 6rem;
    text-align: center;
    border: 1px dashed;
    font-size: 1rem;
    input[type='file'] {
      display: none;
    }
  }

  button {
    display: block;
    width: 60%;
    background: #0088af;
    color: #ffffff;
    border: none;
    line-height: 3rem;
    border-radius: 3px;
    margin: 2rem auto;
  }

  .pic-list {
    li {
      position: relative;
      width: 6rem;
      height: 6rem;
      overflow: hidden;
      float: left;
      img {
        width: 100%;
      }
      .del-wrapper {
        position: absolute;
        right: 0;
        top: 0;
        color: #ffffff;
        background: rgba(0, 0, 0, 0.2);
        font-size: 1rem;
      }
    }
  }
</style>
