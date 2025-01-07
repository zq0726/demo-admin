<script setup lang="ts">
import { useThemeConfig } from '@/stores/themeConfig'
import { storeToRefs } from 'pinia'
import { useApp } from '@/hooks/useApp'

const { changeLanguage, changeTheme } = useApp()
const { isDarkTheme, globalI18n } = storeToRefs(useThemeConfig())
const formPosition = defineModel('formPosition')

const changeFormPosition = (value: string) => (formPosition.value = value)
</script>

<template>
  <div class="login-setting">
    <el-dropdown placement="bottom-start" @command="changeFormPosition">
      <i class="iconfont icon-juyou_"></i>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="left" :disabled="formPosition === 'left'">
            <i class="iconfont icon-juzuo_" /> 居左
          </el-dropdown-item>
          <el-dropdown-item command="center" :disabled="formPosition === 'center'">
            <i class="iconfont icon-juzhong" />居中
          </el-dropdown-item>
          <el-dropdown-item command="right" :disabled="formPosition === 'right'">
            <i class="iconfont icon-juyou_" />居右
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <el-dropdown placement="bottom" @command="changeLanguage">
      <i class="iconfont icon-zhongyingwenqiehuan"></i>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="zh-cn" :disabled="globalI18n === 'zh-cn'"
            >简体中文</el-dropdown-item
          >
          <el-dropdown-item command="en" :disabled="globalI18n === 'en'">english</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <i v-if="isDarkTheme" class="iconfont icon-yueliang" @click="changeTheme"></i>
    <i v-else class="iconfont icon-Sunny" @click="changeTheme"></i>
  </div>
</template>

<style scoped lang="scss">
.login-setting {
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  padding: 10px;
  font-size: 14px;
  border-radius: var(--el-border-radius-round);
  color: black;
  background-color: hsl(240deg 5% 96%);
  place-items: center center;
  cursor: pointer;

  i {
    display: flex;
    place-items: center center;
    margin: 0 6px;
    width: 20px;
    height: 20px;
    color: hsl(210deg 6% 21%);
  }
}

.dark .login-setting {
  background-color: black;

  i {
    color: white !important;
  }
}
</style>
