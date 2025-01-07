<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { ref, reactive } from 'vue'
import { useThemeConfig } from '@/stores/themeConfig'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

interface TestInfoType {
  name: string
  age: number
}

const dateValue = ref()

const { globalI18n } = storeToRefs(useThemeConfig())

const info = {
  name: 'xiaowang',
  age: 22,
}

const testInfo = reactive<TestInfoType>({ ...info })

const isDarkTheme = ref(false)

// 切换主题模式
const changeDark = () => {
  const isDark = useDark()
  console.log(isDark.value)
  const toggleDark = useToggle(isDark)
  toggleDark()
}

const changeInfo = () => {
  testInfo.name = 'hello'

  console.log('testInfo', testInfo)
  console.log('info', info)
}

// 修改语言
const onLanguageChange = (lang: string) => {
  globalI18n.value = lang
  locale.value = lang
}
</script>

<template>
  <div>测试</div>
  <div>{{ $t('message.loginTab.tab2') }}</div>

  <el-switch v-model="isDarkTheme" @change="changeDark">切換</el-switch>
  <el-button type="primary" @click="changeInfo">修改信息</el-button>

  <el-dropdown :show-timeout="70" :hide-timeout="50" trigger="click" @command="onLanguageChange">
    <div class="nav-icon">
      语言切换
      <!-- <i class="iconfont" title="语言切换"></i> -->
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh-cn" :disabled="globalI18n === 'zh-cn'"
          >简体中文</el-dropdown-item
        >
        <el-dropdown-item command="en" :disabled="globalI18n === 'en'">English</el-dropdown-item>
        <el-dropdown-item command="zh-tw" :disabled="globalI18n === 'zh-tw'"
          >繁體中文</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>

  <el-date-picker v-model="dateValue" type="date" placeholder="Pick a day" size="small" />
  <div>
    <el-space>
      <el-card
        ><ul>
          <li>test-info</li>
          <li>{{ testInfo.name }}</li>
          <li>{{ testInfo.age }}</li>
        </ul>
      </el-card>

      <el-card>
        <ul>
          <li>test-info</li>
          <li>{{ info.name }}</li>
          <li>{{ info.age }}</li>
        </ul>
      </el-card>
    </el-space>
  </div>
</template>

<style scoped lang="less"></style>
