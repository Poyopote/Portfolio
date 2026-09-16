<template>
  <div
    :class="[
      'md:animate-bounce hover:animate-none duration-500 back-to-top-button',
      { visible: !isAtTop, 'not-at-top': isAtTop, light: colorMode === 'light', dark: colorMode === 'dark' }
    ]"
    style="transform: scaleY(-1)"
    @click="scrollToTop"
  >
    <svg
      class="back-to-top-button-svg"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <path
        fill-rule="nonzero"
        d="M11.384 13.333h9.232c.638 0 .958.68.505 1.079l-4.613 4.07c-.28.246-.736.246-1.016 0l-4.613-4.07c-.453-.399-.133-1.079.505-1.079z"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
const isAtTop = ref(true)
const colorMode = ref<'light' | 'dark'>('dark')

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleScroll() {
  isAtTop.value = window.pageYOffset <= 20
}

function handleSectionHover(event: MouseEvent) {
  const section = (event.target as Element).closest('.in-the-dark, .in-the-light')
  if (isAtTop.value) return
  if (section?.classList.contains('in-the-dark')) {
    setTimeout(() => { colorMode.value = 'light' }, 100)
  } else if (section?.classList.contains('in-the-light')) {
    setTimeout(() => { colorMode.value = 'dark' }, 100)
  }
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('mouseover', handleSectionHover)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('mouseover', handleSectionHover)
})
</script>
