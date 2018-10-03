<template>
  <div class="container">
    <button v-if="canIUse"
            type="primary"
            open-type="getUserInfo"
            @getuserinfo="bindGetUserInfo">获取用户信息</button>
    <p v-else>请升级微信版本</p>
    <button type="primary"
            @click="login">登陆</button>
    <upload></upload>

    <button type="primary"
            open-type="feedback">打开反馈信息</button>
    <button type="primary"
            open-type="share">分享</button>
  </div>
</template>

<script>
import upload from '@/components/upload.vue'

export default {
  data () {
    return {
      redirect: '',
      canIUse: wx.canIUse('button.open-type.getUserInfo')
    }
  },
  methods: {
    login () {
      wx.login({
        success (data) {
          console.log(data)
        },
        fail () {
          wx.showToast({
            title: '登陆失败',
            icon: 'none'
          })
        }
      })
    },
    bindGetUserInfo ({ target: { userInfo } }) {
      if (!userInfo) {
        wx.showToast({
          title: '获取用户信息失败',
          icon: 'none'
        })
      } else {
        console.log(userInfo)
      }
    }
  },
  onLoad ({ redirect } = {}) {
    this.redirect = redirect
  },
  created () {
  },
  onShareAppMessage (e) {
    return {
      title: '自定义转发内容'
      // path: '路径',
      // imageUrl: ''
    }
  },
  components: {
    upload
  }
}
</script>

<style scoped>
button {
  width: 90%;
  margin: 10rpx auto;
}
</style>
