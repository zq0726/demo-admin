export interface ResponseResult {
  // 状态码
  code: number
  // 消息
  message: string
}

// 完整的接口返回结构
export interface ResultData<T = unknown> extends ResponseResult {
  // 数据
  data: T
}
