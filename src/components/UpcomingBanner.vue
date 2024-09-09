<script setup lang="ts">
import type { Class } from '@/models/class'
import ClassCard from './ClassCard.vue'

defineProps<{
  classes: Class[]
}>()
</script>

<template>
  <div class="flex flex-col p-4">
    <span class="text-xl font-bold text-gray-600 font-mono">
      Upcoming Reservations - {{ classes.length }}
    </span>
    <ClassCard
      v-for="c in classes.slice(0, 3)"
      :key="c.id"
      class="round-lg mt-2"
      :bookingClass="c"
    />
    <div
      v-if="classes.length > 3"
      class="font-mono mt-2 self-end text-blue-600"
      @click="$emit('clickViewMore')"
    >
      View more >
    </div>
  </div>
</template>
