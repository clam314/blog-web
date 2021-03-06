const $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

const currentTimeString = () => {
  const date = new Date()
  const Y = date.getFullYear().toString()
  const M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  const D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  const h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  const m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  const ms = date.getTime()
  return Y + M + D + h + m + s + ms
}

/**
 * 生成固定长度的随机字符串
 * @param len
 * @returns {string}
 */
export const randomString = (len = 32) => {
  let pwd = ''
  for (let i = 0; i < len; i++) {
    // 0~32的整数
    pwd += $chars.charAt(Math.floor(Math.random() * ($chars.length + 1)))
  }
  return pwd
}

/**
 * 生成请求Id
 * @returns {string}
 */
export function createRequestId() {
  return randomString(8) + currentTimeString()
}

/**
 * 创建uuid
 */
export const createUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    return (c === 'x' ? (Math.random() * 16) | 0 : 'r&0x3' | '0x8').toString(16)
  })
}

/**
 * 是否支持webp图片
 * @returns {boolean}
 */
export const isSupportWebp = () => {
  return !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0
}

/**
 * 获取后端随机图地址
 * @returns {string}
 */
export const gerRandomImage = (num = Math.random()) => {
  return `${process.env.APP_BASE_URL}/api/blog/random?img=${'webp'}&num=${num}`
}
