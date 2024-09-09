<script setup lang="ts">
import type { Level } from '@/models/class'

defineProps<{
  level: Level
}>()

const appearanceMap = {
  beginner: { bgColor: 'bg-green-400', textColor: 'text-black' },
  intermediate: { bgColor: 'bg-yellow-400', textColor: 'text-black' },
  advance: { bgColor: 'bg-orange-400', textColor: 'text-black' },
  pro: { bgColor: 'bg-red-400', textColor: 'text-black' }
}
</script>

<template>
  <div class="px-2" :class="[appearanceMap[level].bgColor, appearanceMap[level].textColor]">
    <span class="uppercase">{{ level }}</span>
  </div>
</template>
