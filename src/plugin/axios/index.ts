import axios from 'axios'
import { ResponseCodeEnum } from './httpEnum'

// import fullLoading from './fullLoading'
import { AxiosCancel } from './axiosCancel'
import { checkStatus } from './checkStatus'

import type { ResultData } from './interfance'
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

const config = {
  baseURL: import.meta.env.VITE_USE_MOCK === 'true' ? '/mock' : import.meta.env.VITE_API_BASE_URL,
  timeout: 5000,
  withCredentials: true,
  headers: {
    showMessage: false,
  },
}

const axiosCancel = new AxiosCancel()

class RequestHttp {
  service: AxiosInstance

  constructor() {
    this.service = axios.create(config)

    /**
     * @description 请求拦截器
     */
    this.service.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      // 打开全局 loading
      // 如不需要全局 loading，则第三个参数  { headers: { noLoading: true } }
      // if (!config.headers.noLoading) {
      //   fullLoading.show()
      // }

      // 将请求添加到 pending 中
      axiosCancel.addPending(config)

      // 这里如果需要添加token
      //   const token = store.getState().global.token // 我这里用的是 react-redux + redux-toolkit
      //   config.headers['X-Access-Token'] = token

      return config
    })

    /**
     * @description 响应拦截器
     */
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data, config } = response

        console.log('res_response', config.headers)

        // 关闭全局 loading
        // if (!config.headers.noLoading) {
        //   fullLoading.hide()
        // }

        // 请求结束，移除本次请求
        axiosCancel.removePending(config.url, config.method)
        if (config.headers.showMessage === 'true') {
          console.log('错误信息', data.message)
        }
        if (data.code != ResponseCodeEnum.SUCCESS) {
          return Promise.reject(data)
        }

        return data.data
      },

      (error: AxiosError) => {
        checkStatus(error.code)
        console.log('4444')
        return Promise.reject(error)
      },
    )
  }

  // 常用请求方法封装
  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.get(url, { params, ..._object })
  }
  post<T>(url: string, params?: object, _object = {}): Promise<T> {
    return this.service.post(url, params, _object)
  }
  put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.put(url, params, _object)
  }
  delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
    return this.service.delete(url, { params, ..._object })
  }
}

const request = new RequestHttp()
export default request
