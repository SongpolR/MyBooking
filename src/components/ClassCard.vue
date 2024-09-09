<script setup lang="ts">
import type { Class } from '@/models/class'
import LevelBadge from './LevelBadge.vue'

defineProps<{
  bookingClass: Class
}>()
</script>

<template>
  <div>
    <div
      class="flex flex-col rounded-lg border-t shadow-gray-300 shadow-md p-4 gap-2 font-mono"
      @click="$emit('click')"
    >
      <div class="flex flex-row items-center">
        <span class="flex-1 font-bold text-lg text-purple-400 uppercase">
          {{ bookingClass.name }}
        </span>
        <div v-if="bookingClass.duration" class="rounded-s bg-yellow-200 p-1">
          {{ bookingClass.duration }} mins.
        </div>
      </div>
      <div class="flex flex-row gap-12">
        <img :src="bookingClass.imageUrl" class="rounded-full size-24" />
        <div class="flex flex-col gap-0.5 text-black">
          <span v-if="bookingClass.startTime" class="font-semibold">
            {{ bookingClass.startTime }}
          </span>
          <span v-if="bookingClass.startDate" class="font-semibold">
            {{ bookingClass.startDate }}
          </span>
          <span>{{ bookingClass.instructor.name }}</span>
          <span>{{ bookingClass.location }}</span>
        </div>
      </div>
      <LevelBadge class="self-end -mr-4 -mb-4 rounded-ee-lg" :level="bookingClass.level">
        {{ bookingClass.level }}
      </LevelBadge>
    </div>
  </div>
</template>
