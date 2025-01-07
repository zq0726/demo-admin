<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { computed, ref, useTemplateRef } from 'vue'

// import { Check, ChevronsRight } from '@vben/icons'

const props = defineProps<{
  actionStyle: CSSProperties
  isPassing: boolean
  toLeft: boolean
}>()

const actionRef = useTemplateRef<HTMLDivElement>('actionRef')

const left = ref('0')

const style = computed(() => {
  const { actionStyle } = props
  return {
    ...actionStyle,
    left: left.value,
  }
})

const isDragging = computed(() => {
  const currentLeft = Number.parseInt(left.value as string)

  return currentLeft > 10 && !props.isPassing
})

defineExpose({
  getEl: () => {
    return actionRef.value
  },
  getStyle: () => {
    return actionRef?.value?.style
  },
  setLeft: (val: string) => {
    left.value = val
  },
})
</script>

<template>
  <div
    ref="actionRef"
    :class="{
      'transition-width !left-0 duration-300': toLeft,
      'rounded-md': isDragging,
    }"
    :style="style"
    class="absolute left-0 top-0 flex h-full cursor-move items-center justify-center px-3.5 shadow-md bg-white .dark:bg-black"
    name="captcha-action"
  >
    <slot :is-passing="isPassing" class="text-foreground/60 size-4">
      <!-- <slot name="icon"> -->
      <!-- <ChevronsRight v-if="!isPassing" /> -->
      <!-- <Check v-else /> -->

      <el-icon v-if="!isPassing"><DArrowRight /></el-icon>
      <el-icon v-else><Select /></el-icon>
      <!-- </slot> -->
    </slot>
  </div>
</template>
