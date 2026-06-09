<template>
  <nav class="main-nav max-md:fixed bottom-0 mt-9 md:mt-0 z-40 max-md:w-full">
    <ul class="flex flex-row space-x-4 items-center justify-center mx-auto bg-customWhiteBlue md:bg-opacity-90 shadow-lg rounded-2xl">
      <li v-for="link in links" :key="link.href" :class="isMobile ? 'md:flex-1 flex' : 'p-3'">
        <a
          :href="link.href"
          :aria-label="link.text"
          :class="isMobile
            ? 'md:rounded-full inline-block text-primary font-bold p-2'
            : 'text-[#11383c] font-bold'"
        >
          <span v-if="!isMobile" class="flex flex-col items-center border-transparent border-b-2 hover:border-customBlack">
            <component :is="link.icon" class="h-8 w-8" />
            {{ link.text }}
          </span>
          <component v-else :is="link.icon" class="h-8 w-8" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { HomeIcon, IdentificationIcon, CursorArrowRaysIcon, CogIcon } from '@heroicons/vue/24/solid'

const isMobile = ref(false)

const links = [
  { text: 'Accueil', icon: HomeIcon, href: '#main-header' },
  { text: 'À propos', icon: IdentificationIcon, href: '#about-section' },
  { text: 'Projets', icon: CursorArrowRaysIcon, href: '#projects-section' },
  { text: 'Compétences', icon: CogIcon, href: '#skills-section' },
]

function handleResize() {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})
onUnmounted(() => window.removeEventListener('resize', handleResize))
</script>
