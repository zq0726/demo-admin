/**
 * @description: 校验网络请求状态码
 * @param {string} code
 * @return void
 */
export const checkStatus = (code: string = ''): void => {
  switch (code) {
    case 'ERR_NETWORK':
      alert('网络错误')
      break
    case 'ETIMEDOUT':
      alert('连接超时')
      break
    case 'ERR_INVALID_URL':
      alert('路由不存在')
      break
    default:
  }
}
