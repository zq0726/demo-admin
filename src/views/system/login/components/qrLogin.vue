<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import vueQr from 'vue-qr/src/packages/vue-qr.vue'

const router = useRouter()

const form = reactive({})
</script>

<template>
  <div class="form-box">
    <div class="form-main">
      <div class="title">欢迎回来</div>
      <div class="description">请用手机扫描二维码登录</div>

      <el-form :model="form" label-width="0">
        <el-form-item>
          <div class="flex justify-center w-full">
            <vue-qr text="https://www.baidu.com/" :size="200" />
          </div>
        </el-form-item>

        <el-form-item>
          <el-button class="w-full" @click="() => router.go(-1)">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.form-box {
  display: flex;
  justify-content: center;
  padding: 2rem;
  width: 100%;
  height: 100%;

  .form-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 450px;
    height: 100%;

    .title {
      margin: 15px 0;
      font-size: 40px;
      font-weight: bold;
    }

    .description {
      margin-bottom: 40px;
    }
  }
}
</style>
