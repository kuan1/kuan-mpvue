import localUser from './localUser'
// import {
//   base
// } from '../request'

export default () => {
  return new Promise((resolve, reject) => {
    const cache = localUser.get()
    if (cache) return resolve()
    wx.showLoading()
    wx.getAuthCode({
      scopes: 'auth_user', // 主动授权（弹框）：auth_user，静默授权（不弹框）：auth_base
      success: ({
        authCode
      }) => {},
      fail () {
        reject(new Error('获取授权失败'))
      }
    })
  })
}
