import login from '../login/index'
import localUser from '../login/localUser'

function getMessage (error) {
  const {
    status,
    info
  } = error
  const message = {
    400: '请求错误',
    401: '未授权，请登录',
    403: '拒绝访问',
    404: `请求地址出错: ${status}`,
    408: '请求超时',
    500: '服务器内部错误',
    501: '服务端未实现',
    502: '网关错误',
    503: '服务不可用',
    504: '网络超时',
    505: 'HTTP版本不受支持'
  }
  return info || message[status] || error.message || '发生未知错误'
}

export default (error, alert) => {
  if (error.status === 401) {
    localUser.clear()
    login().then(() => {
      /* eslint-disable-next-line */
      const pages = getCurrentPages() // 获取加载的页面
      const currentPage = pages[pages.length - 1] // 获取当前页面的对象
      wx.redirectTo({
        url: `/${currentPage.route}`
      })
    })
    return true
  }
  if (alert) {
    const message = getMessage(error)
    wx.alert({
      content: message
    })
  }
  return true
}
