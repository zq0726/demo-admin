import axios, { type AxiosRequestConfig, type CancelTokenSource } from 'axios'

const cancelMap = new Map<string, CancelTokenSource>()

export class AxiosCancel {
  /**
   * 添加请求到待取消列表，并生成取消函数
   * @param config Axios请求配置
   */
  addPending(config: AxiosRequestConfig) {
    const { url, method } = config

    if (!url || !method) return

    // 生成唯一键
    const key = `${url}_${method}`

    // 移除已存在的相同URL和方法的请求（理论上这一步在大多数情况下不是必需的，除非有重复添加的逻辑）
    this.removePending(url, method)

    // 创建CancelTokenSource
    const cancelTokenSource = axios.CancelToken.source()

    // 将取消函数存储在cancelMap中
    cancelMap.set(key, cancelTokenSource)

    // 更新请求配置以包含取消令牌
    config.cancelToken = cancelTokenSource.token

    // 注意：这里并没有直接发送请求，只是准备了配置并设置了取消令牌
    // 发送请求应该在调用addPending的外部进行
  }

  /**
   * 移除某个请求
   * @param url 请求的URL
   * @param method 请求的方法
   */
  removePending(url: string | undefined, method: string | undefined) {
    if (!url || !method) return

    const key = `${url}_${method}`
    const cancelTokenSource = cancelMap.get(key)

    if (cancelTokenSource) {
      cancelTokenSource.cancel('Operation canceled by the user.') // 调用取消函数
      cancelMap.delete(key) // 从Map中移除
    }
  }

  /**
   * 移除所有请求
   */
  removeAllPending() {
    cancelMap.forEach((cancelTokenSource) => {
      cancelTokenSource.cancel('Operation canceled by the system.') // 调用所有取消函数
    })

    cancelMap.clear() // 清空Map
  }
}
