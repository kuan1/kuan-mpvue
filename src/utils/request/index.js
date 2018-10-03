/**
 * @param url {String} 接口地址
 * @param data {Object} 接口参数
 * @param method {String} 暂时只支持 get | post
 * @param loading {Boolean} 是否显示loading
 * @param alert {Boolean} 是否提示错误信息
 * @returns {Promise<any>} 返回结果
 */

import loadingCtrl from './loadingCtrl'
import login from '../login'
import errorHandle from './errorHandle'
import {
  getToken
} from '../login/localUser'

const isDev = process.env.NODE_ENV === 'development'
export const base = isDev ? 'https://licheng.weddingee.com' : 'https://licheng.halobear.com'

export default ({
  url,
  data = {},
  method = 'get',
  loading = true,
  alert = true,
  needLogin = true
}) => {
  if (loading) {
    my.showLoading()
  }

  const headers = {
    'halo-app': 'terminal-alipay-miniapp',
  }

  return new Promise(async (resolve, reject) => {
    if (needLogin) {
      await login()
    }

    const token = getToken()
    if (token) headers.Authorization = `Bearer ${token}`

    my.httpRequest({
      url: `${base}${url}`,
      data,
      method,
      headers,
      success({
        data,
        status
      }) {
        data.status = status
        // 后台返回200错误
        if (!data.iRet) {
          reject(data)
          errorHandle(data, alert)
          return
        }
        resolve(data)
      },
      async fail({
        data = {},
        status
      } = {}) {
        reject(data)
        // 后台返回非200错误
        data.status = status
        errorHandle(data, alert)
      },
      complete() {
        if (loading) loadingCtrl.close()
      }
    })
  })
}