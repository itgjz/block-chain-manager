import axios from 'axios'
import { message } from 'antd'
import { stringify } from 'qs'
import urlTemplate from 'url-template'
import { registerUser } from '../services/app'

// message 全局配置
message.config({
  top: 50,
})

axios.defaults.baseURL = 'http://zhehan.tech:4000'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.timeout = 30000;

const fetch = (url, options) => {
  const { method = 'get', data } = options
  let requestOptions = {}
  if (options && options.requestOptions) {
    requestOptions = options.requestOptions
  }


  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, { params: data })
    case 'delete':
      return axios.delete(url, { data })
    case 'head':
      return axios.head(url, data)
    case 'post':
      return axios.post(url, data, requestOptions)
    case 'put':
      return axios.put(url, data)
    case 'patch':
      return axios.patch(url, data)
    default:
      return axios(options)
  }
}

function checkStatus(res) {
  if (res.status >= 200 && res.status < 300) {
    return res
  }

  const error = new Error(res.statusText)
  error.response = res
  throw error
}

function handelData(res) {
  const data = res.data
  if (data && data.status === 'error') {
    message.error(data.msg)
  }
  // else if(data && data.msg && data.success) {
  //   message.success(data.msg)
  // }
  return data
}

function handleError(error) {
  console.log(error)
  const data = error.response.data
  if (data.errors) {
    message.error(`${data.message}：${data.errors}`, 5)
  } else if (data.error) {
    message.error(`${data.error}：${data.error_description}`, 5)
  } else {
    message.error('未知错误！', 5)
  }
  return { success: false }
}

export default function request(url, options) {
  // if (url !== '/oauth/token' && url !== '/admin/check') {
  //   url = `${url}?access_token=${Cookie.get('access_token')}`
  // }
  let pathUrl = urlTemplate.parse(url).expand(options.data)

  return fetch(pathUrl, options)
    .then(checkStatus)
    .then(handelData)
    .catch(handleError)
}

export async function securityRequest(url, options) {
  let userInfoCache = {}
  let token = ''
  try {
    userInfoCache = JSON.parse(window.localStorage.getItem("user_info"))
  } catch (e) {
    userInfoCache = {}
    throw e
  }
  const { orgName, username } = userInfoCache
  if (!orgName) {
    message.error("请先登录！")
    return
  }

  const user = await registerUser({ orgName, username })
  if (user && user.success) {
    token = user.token
  }
  else {
    message.error(user.message)
    return
  }

  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
  let pathUrl = urlTemplate.parse(url).expand(options.data)
  return fetch(pathUrl, options)
    .then(checkStatus)
    .then(handelData)
    .catch(handleError)
}

export function get(url, options) {
  return request(url, { ...options, method: 'get' })
}

export function post(url, options) {
  return request(url, { ...options, method: 'post' })
}

export function put(url, options) {
  return request(url, { ...options, method: 'put' })
}

export function deleted(url, options) {
  return request(url, { ...options, method: 'deleted' })
}