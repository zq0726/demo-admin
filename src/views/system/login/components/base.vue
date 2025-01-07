<script setup lang="ts">
import type { LoginFormType } from '@/types/views/login_type'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import Cookies from 'js-cookie'
import SliderCaptcha from '@/components/slider-captcha/index.vue'

const router = useRouter()

const form: LoginFormType = reactive({
  account: '',
  password: '',
  rememberPwd: false,
})

//前往手机登录
const phoneLogin = () => {
  router.push({
    path: '/login/phone',
  })
}

// 扫描登录
const qrLogin = () => {
  router.push({
    path: '/login/qr',
  })
}

/**
 * 支持登录
 */
const handleLogin = () => {
  Cookies.set('name', '小庆', { expires: (1 / 24 / 60 / 60) * 5 })

  setTimeout(() => {
    const cookieValueAfterExpiry = Cookies.get('name')
    console.log('Cookie Value After Expiry:', cookieValueAfterExpiry)
  }, 5 * 1000)
}
</script>

<template>
  <div class="form-box">
    <div class="form-main">
      <div class="title">欢迎回来</div>
      <div class="description">请输入您的账户信息以开始管理您的项目</div>

      <el-form :model="form" label-width="0" style="max-width: 600px">
        <el-form-item>
          <el-input v-model="form.account" />
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="form.password" show-password />
        </el-form-item>
        <el-form-item>
          <SliderCaptcha />
        </el-form-item>
        <el-form-item>
          <div class="flex justify-between w-full">
            <el-checkbox v-model="form.rememberPwd" label="记住密码" />
            <el-link type="primary">忘记密码?</el-link>
          </div>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" style="width: 100%" @click="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
      <div class="flex justify-between">
        <el-button class="flex-1" @click="phoneLogin">手机号登录</el-button>
        <el-button class="flex-1" @click="qrLogin">扫描登录</el-button>
      </div>
      <el-divider> 其他登录方式 </el-divider>
      <div class="flex align-center justify-center m-y-4">
        <i class="iconfont icon-weixin"></i>
        <i class="iconfont icon-QQ"></i>
        <i class="iconfont icon-github-fill"></i>
      </div>
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

.iconfont {
  display: inline-block;
  margin: 0 5px;
  font-size: 20px;
}
</style>
