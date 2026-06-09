<template>
  <section id="about-section" class="relative py-24 in-the-light max-md:pt-3">
    <article class="flex flex-col gap-8 lg:flex-row lg:gap-12 md:items-center justify-center mx-auto lg:w-9/12 mb-16">
      <div class="w-full md:w-4/12 px-4">
        <div
          id="blob"
          ref="blobRef"
          class="hidden sm:block sm:w-56 sm:h-56 md:w-full md:h-auto md:pt-[100%] m-auto -hue-rotate-15"
          :class="{ 'stopped-animation': !isVisible }"
        ></div>
      </div>
      <div class="w-full md:w-8/12 px-4 max-w-2xl max-lg:text-center max-md:px-7">
        <h2>Steven LADOUR <IdentificationIcon class="h-8 w-8 inline-block" /></h2>
        <p class="lg:text-2xl font-bold">
          Concepteur d'interfaces utilisateur axé sur l'accessibilité avec expertise en développement et intégration
        </p>
        <br />
        <p class="italic">UX/UI • Développement Front • SEO</p>
      </div>
    </article>
    <svg
      class="w-full absolute bottom-0 h-16 md:h-auto fill-primary"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M600 112.77C268.63 112.77 0 65.52 0 7.23V120h1200V7.23c0 58.29-268.63 105.54-600 105.54z"
        class="shape-fill"
      ></path>
    </svg>
  </section>
</template>

<script setup lang="ts">
import { IdentificationIcon } from '@heroicons/vue/24/solid'

const blobRef = ref<HTMLElement | null>(null)
const isVisible = ref(true)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { isVisible.value = entry.isIntersecting },
    { threshold: 0 }
  )
  if (blobRef.value) observer.observe(blobRef.value)
  onUnmounted(() => observer.disconnect())
})
</script>
