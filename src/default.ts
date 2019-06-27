import { AxiosRequestConfig } from './types'

// 默认属性
const defaults: AxiosRequestConfig = {
  method: 'get',

  timeout: 0,

  headers: {
    common: {
      Accept: 'application/json, text/plain, */*'
    }
  }
}

// 不需要请求体的请求方式
const methodsNoData = ['delete', 'head', 'get', 'options']
// 设置默认请求头
methodsNoData.forEach(method => {
  defaults.headers[method] = {}
})

// 需要请求体的请求方式
const methodsWithData = ['post', 'put', 'patch']
// 设置以上请求方式的默认请求头
methodsWithData.forEach(method => {
  defaults.headers[method] = {
    'Content-type': 'application/x-www-form-urlencoded'
  }
})

export default defaults
