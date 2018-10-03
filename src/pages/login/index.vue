<template>
  <div class="container">
    <button v-if="canIUse"
            type="primary"
            open-type="getUserInfo"
            @getuserinfo="bindGetUserInfo">授权登录</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      redirect: '',
      canIUse: wx.canIUse('button.open-type.getUserInfo')
    }
  },
  methods: {
    bindGetUserInfo (e) {
      console.log(e)
    }
  },
  onLoad ({ redirect } = {}) {
    this.redirect = redirect
  },
  created () {
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
button {
  width: 90%;
}
</style>
