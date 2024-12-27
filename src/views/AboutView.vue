<script setup lang="ts">
import { userLoginApi } from '@/api/about'

const getInfo = async () => {
  try {
    const res = await userLoginApi({
      username: 'admin',
      password: '123456789',
    })

    console.log('res', res)
    console.log(res.token)
  } catch (error) {
    console.log('error33333333', error)
  }
}
</script>

<template>
  <div class="bg-red">
    <h1>This is an about page</h1>

    <button @click="getInfo">调用接口</button>
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
