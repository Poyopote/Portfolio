<template>
  <header
    id="main-header"
    class="in-the-light relative flex flex-col items-center justify-center md:h-screen gap-8"
  >
    <HomeWaveAnimation />
    <div class="logo-container z-10 flex flex-col items-center justify-end gap-3 md:h-96">
      <ClientOnly>
        <Vue3Lottie
          class="logo inline-block w-60 md:w-[300px] p-4"
          :animation-data="LogoAnimation"
        />
      </ClientOnly>
      <HomeTypewriterEffect />
    </div>
    <div class="flex z-10 w-full justify-center gap-2 my-3">
      <AppButton color="primary" href="/doc/CV_Steven_Ladour.pdf">
        <DocumentTextIcon class="h-6 w-6" />&nbsp;Mon CV
      </AppButton>
      <AppButton color="secondary" href="https://www.linkedin.com/in/steven-ladour">
        <i class="devicon-linkedin-plain text-xl"></i>&nbsp;Linkedin
      </AppButton>
    </div>
    <AppNavigation />
  </header>
</template>

<script setup lang="ts">
import { DocumentTextIcon } from '@heroicons/vue/24/solid'
import { Vue3Lottie } from 'vue3-lottie'
import LogoAnimation from '~/public/animation/slfolio.json'
</script>

<style lang="scss">
header {
  background-color: $customWhiteBlue;
}
#main-header {
  @media screen and (min-width: 768px) and (max-height: 552px) {
    height: 100%;
  }
}
.logo-container {
  width: 100%;
  text-align: center;
}
</style>
