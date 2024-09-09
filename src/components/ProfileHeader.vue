<script setup lang="ts">
defineProps<{
  displayName: string
  profileImageUrl: string
}>()
</script>

<template>
  <div class="flex flex-row items-center">
    <div class="flex-1 text-3xl text-white">
      <span>Hello, </span>
      <span class="font-bold">{{ displayName }}</span>
    </div>
    <img class="rounded-full size-16 border-4" :src="profileImageUrl" />
  </div>
</template>
