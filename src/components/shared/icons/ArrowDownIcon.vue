<script setup lang="ts">
defineProps<{
  width?: number;
  height?: number;
}>();
</script>
<template>
  <svg
    :width="width || '24'"
    :height="height || '24'"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg">
    <g id="Frame 10">
      <path
        id="Vector 1"
        d="M6.5 10L12.5 15L18.5 10"
        stroke="currentColor"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round" />
    </g>
  </svg>
</template>
<style scoped>
svg {
    color: #737898;
}
</style>
