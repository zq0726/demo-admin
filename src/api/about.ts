import http from '@/plugin/axios/index'
import type { TestReqType, TestResType } from '@/types/views/about_type'

enum Api {
  testList = '/user/login',
}

// 用来测试的接口
export const testApi = (data: TestReqType) => http.post<TestResType>(Api.testList, data)
