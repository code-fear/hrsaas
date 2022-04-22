import Cookies from 'js-cookie'

const TokenKey = 'hrsaas_system_token'
const timeKey = 'hrsaas_system_Key'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

// 获取时间戳
export function getTimeStamp() {
  return Cookies.get(timeKey)
}
// 读取取时间戳
export function setTimeStamp(timestamp) {
  Cookies.set(timeKey, Date.now())
}
