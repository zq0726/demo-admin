<script setup lang="ts">
import { computed, type CSSProperties, ref, useTemplateRef } from 'vue'

const props = defineProps<{
  barStyle: CSSProperties
  toLeft: boolean
}>()

const barRef = useTemplateRef<HTMLDivElement>('barRef')

const width = ref('0')

const style = computed(() => {
  const { barStyle } = props
  return {
    ...barStyle,
    width: width.value,
  }
})

defineExpose({
  getEl: () => {
    return barRef.value
  },
  setWidth: (val: string) => {
    width.value = val
  },
})
</script>

<template>
  <div
    ref="barRef"
    :class="toLeft && 'transition-width !w-0 duration-300'"
    :style="style"
    class="absolute h-full bg-emerald"
  ></div>
</template>
