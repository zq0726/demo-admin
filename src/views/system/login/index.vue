<script setup lang="ts">
import { ref } from 'vue'
import LogoImg from '@/assets/logo.png'
import LoginSetting from './components/loginSetting.vue'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

const title = ref(import.meta.env.VITE_APP_TITLE)

const formPosition = ref('center')
</script>

<template>
  <div class="login">
    <el-row>
      <el-col v-if="formPosition == 'left'" :xl="8" :lg="8" :md="24" :sm="24" :xs="24">
        <div class="login-form">
          <transition name="fade">
            <router-view />
          </transition>
        </div>
      </el-col>
      <el-col :xs="0" :sm="0" :md="0" :lg="16" :xl="16" v-if="formPosition != 'center'">
        <div class="login-description"></div>
      </el-col>

      <el-col v-if="formPosition == 'right'" :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <div class="login-form">
          <transition name="fade">
            <router-view />
          </transition>
        </div>
      </el-col>

      <el-col
        :xs="24"
        :sm="24"
        :md="8"
        :lg="8"
        :xl="8"
        :offset="width < 992 ? 0 : 8"
        v-if="formPosition == 'center'"
      >
        <div :class="width < 768 ? 'login-form' : 'login-form-center'">
          <div v-if="width > 768" class="center-main">
            <transition name="fade">
              <router-view />
            </transition>
          </div>

          <transition v-else name="fade">
            <router-view />
          </transition>
        </div>
      </el-col>
    </el-row>

    <div class="login-title">
      <img :src="LogoImg" alt="" srcset="" />
      {{ title }}
    </div>

    <login-setting v-model:formPosition="formPosition" />
  </div>
</template>

<style lang="scss" scoped>
.login {
  position: relative;
  height: 100%;

  .el-row {
    width: 100%;
    height: 100%;
  }

  &-description {
    overflow-x: hidden;
    height: 100%;
    background-color: var(--el-bg-color-page);
  }

  &-form {
    overflow-x: hidden;
    height: 100%;
    background-color: var(--el-bg-color-overlay);
  }

  &-form-center {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 100px 0;
    width: 100%;
    min-width: 500px;
    max-width: 800px;
    height: 100%;

    .center-main {
      width: 100%;
      height: 100%;
      border: 1px solid var(--el-border-color);
      border-radius: var(--el-border-radius-round);
      background: var(--el-bg-color);
      box-shadow: var(--el-box-shadow-light);
    }
  }

  &-title {
    position: absolute;
    top: 15px;
    left: 15px;
    display: flex;
    align-items: center;
    font-size: var(--el-font-size-large);
    font-weight: bold;

    img {
      margin-right: 8px;
      width: 40px;
      height: 40px;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(40px);
  opacity: 0;
}
</style>
