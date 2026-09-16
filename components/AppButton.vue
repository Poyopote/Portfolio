<template>
  <a
    :href="href"
    :class="`button-folio m-2 relative button-${color}`"
    target="_blank"
    rel="noreferrer"
  >
    <span class="pulse"></span>
    <span class="flex items-center">
      <slot />
    </span>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  color: string
  href: string
}>()
</script>
