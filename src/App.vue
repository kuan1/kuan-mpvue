<script>
export default {
  created () {
    // 账号信息
    console.log(wx)
    // 用户当前设置
    wx.getSetting({
      success ({ authSetting }) {
        console.log('当前用户设置：', authSetting)
      },
      fail (data) {
        console.log('获取设置失败：', data)
      },
      complete (data) {
      }
    })
    console.log('app is created')
  }
}
</script>

<style>
page {
  min-height: 100%;
}
.container {
  width: 100%;
  height: 100%;
}
</style>
