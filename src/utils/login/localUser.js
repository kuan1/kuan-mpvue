const key = 'USER_INFO'
const maxAge = 1000 * 60 * 60 * 24 * 60 // 两个月

// 获取用户信息
export function getUser () {
  const {
    data = {}
  } = wx.getStorageSync(key) || {}
  if (!data.time) return null
  return data.time + maxAge > Date.now() ? data : null
}

// 保存用户信息
export function setUser (data = {}) {
  data.time = Date.now()
  wx.setStorageSync({
    key,
    data: data
  })
}

// 获取token
export function getToken () {
  const user = getUser() || {}
  return user.token
}

// 清空缓存
export function clear () {
  wx.clearStorage()
}

export default {
  get: getUser,
  set: setUser,
  getToken,
  clear
}
