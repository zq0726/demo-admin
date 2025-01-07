<script setup lang="ts">
import { useRouter } from 'vue-router'
import { reactive } from 'vue'

const form = reactive({
  phone: '',
})
const router = useRouter()
</script>

<template>
  <div class="form-box">
    <div class="form-main">
      <div class="title">欢迎回来</div>
      <div class="description">请输入您的手机号以开始管理您的项目</div>

      <el-form :model="form" label-width="0">
        <el-form-item>
          <el-input v-model="form.phone" />
        </el-form-item>

        <el-form-item>
          <div class="flex justify-between w-full">
            <el-input class="flex-1"></el-input>
            <el-button type="primary" class="m-l-2">获取验证码</el-button>
          </div>
        </el-form-item>

        <el-form-item>
          <el-button class="w-full" type="primary">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-button class="w-full" @click="router.go(-1)">返回</el-button>
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
