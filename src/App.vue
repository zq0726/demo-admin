<script setup lang="ts">
import { computed, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useThemeConfig } from '@/stores/themeConfig'
import { storeToRefs } from 'pinia'

const { messages } = useI18n()

const route = useRoute()

const { globalI18n } = storeToRefs(useThemeConfig())
const getGlobalI18n = computed(() => {
  console.log('globalI18n.value', globalI18n.value)
  return messages.value[globalI18n.value]
})

console.log('getGlobalI18n', getGlobalI18n.value)

// 监听路由的变化，设置网站标题
watch(
  () => route.path,
  () => {
    document.title = (route.meta.title as string)
      ? route.meta.title + ' - ' + import.meta.env.VITE_APP_TITLE
      : import.meta.env.VITE_APP_TITLE
  },
  {
    deep: true,
  },
)
</script>

<template>
  <el-config-provider :locale="getGlobalI18n">
    <RouterView />
  </el-config-provider>
</template>

<style scoped></style>
