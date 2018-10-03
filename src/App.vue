<script>
export default {
  created () {
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
  font-size: 24rpx;
}
.flex1 {
  display: flex;
}
.column-flex {
  display: flex;
  flex-direction: column;
}

.between-flex {
  display: flex;
  justify-content: space-between;
}

.middle-flex {
  display: flex;
  align-items: center;
}

.center-flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
.center-transform {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.center-absolute {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
</style>
