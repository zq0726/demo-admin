<script setup lang="ts">
import { testApi } from '@/api/about'
import type { TestReqType, TestResType } from '@/types/views/about_type'
import { useDark, useToggle } from '@vueuse/core'
//#region
/**
 * 接口测试
 */
const apiTest = async () => {
  try {
    const params: TestReqType = { username: 'admin', password: '123456789' }
    const res: TestResType = await testApi(params)
    console.log('res', res)
  } catch (error) {
    console.log('error333', error)
  }
}

//#endregion

//#region
// 改变主题
const isDark = useDark()
const toggleDark = useToggle(isDark)
const changeDark = () => {
  toggleDark()
}
//#endregion
</script>

<template>
  <div class="bg-red">
    <h1>This is an about page</h1>

    <el-button @click="apiTest">调用接口</el-button>
    <el-button @click="changeDark">白夜交替</el-button>

    <div class="box-list">
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"></div>
      <div class="box4"></div>
      <div class="box5"></div>
    </div>

    <div class="main">
      <div class="page"></div>
    </div>

    <div class="ali-font">你好啊，在干嘛</div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  align-items: center;
  color: red;
  box-sizing: border-box;
}

.box-list {
  display: flex;
  justify-content: center;

  // .box {
  //   display: flex;
  //   margin: 0 auto;
  //   width: 300px;
  //   height: 300px;
  //   background-color: var(--el-bg-color);
  // }
  @for $i from 1 through 5 {
    .box#{$i} {
      margin-right: 10px;
      width: calc(50px + $i * 10px);
      height: calc(50px + $i * 10px);
      background-color: var(--el-bg-color);
    }
  }
}

.main {
  display: flex;
  align-items: center;

  .page {
    width: 300px;
    height: 300px;
    background-color: var(--el-bg-color-page);
  }
}

.ali-font {
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: aliFont;
}
</style>
