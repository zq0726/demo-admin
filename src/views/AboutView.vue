<script setup lang="ts">
import { testApi } from '@/api/about'
import type { TestReqType, TestResType } from '@/types/views/about_type'
//#region
/**
 * 接口测试
 */
const apiTest = async () => {
  try {
    const params: TestReqType = { username: 'admin1', password: '123456789' }
    const res: TestResType = await testApi(params)
    console.log('res', res)
  } catch (error) {
    console.log('error333', error)
  }
}

//#endregion
</script>

<template>
  <div class="bg-red">
    <h1>This is an about page</h1>

    <button @click="apiTest">调用接口</button>
  </div>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  align-items: center;
  color: red;
  box-sizing: border-box;
}
</style>
