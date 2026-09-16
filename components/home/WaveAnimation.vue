<template>
  <div
    ref="containerRef"
    class="waves-container max-md:hidden"
    :class="{ 'stopped-animation': !isVisible }"
  >
    <div class="wave wave1"></div>
    <div class="wave wave2"></div>
    <div class="wave wave3"></div>
    <div class="wave wave4"></div>
    <div class="wave wave5"></div>
  </div>
</template>

<script setup lang="ts">
const containerRef = ref<HTMLElement | null>(null)
const isVisible = ref(true)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { isVisible.value = entry.isIntersecting },
    { threshold: 0 }
  )
  if (containerRef.value) observer.observe(containerRef.value)
  onUnmounted(() => observer.disconnect())
})
</script>
