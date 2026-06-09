<template>
  <h1 id="site-title" class="text-5xl sm:text-6xl relative h-6 mb-6">{{ text }}</h1>
</template>

<script setup lang="ts">
const titles = ['UI Designer', 'Web Designer', 'Développeur Front-end', 'Intégrateur Web']
const typingSpeed = 50
const deletingSpeed = 50

const text = ref('')
const index = ref(0)
const isDeleting = ref(false)

let timer: ReturnType<typeof setTimeout>

function tick() {
  const currentTitle = titles[index.value % titles.length]
  if (!isDeleting.value) {
    text.value = currentTitle.substring(0, text.value.length + 1)
    if (text.value === currentTitle) {
      isDeleting.value = true
      timer = setTimeout(tick, 4500)
      return
    }
  } else {
    text.value = currentTitle.substring(0, text.value.length - 1)
    if (text.value === '') {
      isDeleting.value = false
      index.value++
    }
  }
  timer = setTimeout(tick, isDeleting.value ? deletingSpeed : typingSpeed)
}

onMounted(() => { timer = setTimeout(tick, typingSpeed) })
onUnmounted(() => clearTimeout(timer))
</script>
