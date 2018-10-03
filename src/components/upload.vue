<template>
  <div class="upload-container">
    <div v-for="(item, i) in images"
         :key="item"
         @click="chooseImage(i)"
         class="item center-flex">
      <image @click.stop="previewImage(i)"
             class="images"
             mode='aspectFill'
             v-if="item"
             :src="item" />
      <p v-else>上传组件</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: ['', '', '', '']
    }
  },
  methods: {
    chooseImage (i) {
      const { images } = this
      wx.chooseImage({
        count: 1,
        success: (res) => {
          images[i] = res.tempFilePaths[0]
          this.images = []
          this.images = images
        }
      })
    },
    previewImage (current) {
      wx.previewImage({
        urls: this.images.filter(item => item),
        current
      })
    }
  }
}
</script>

<style scoped>
.upload-container {
  width: 670rpx;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.item {
  width: 150rpx;
  height: 150rpx;
  border: 1px dashed #999;
}
.images {
  width: 100%;
  height: 100%;
}
</style>


