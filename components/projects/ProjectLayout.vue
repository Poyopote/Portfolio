<template>
  <div class="project-layout flex flex-col justify-center lg:col-span-2 sm:py-9 sm:px-10 p-2 items-center">
    <div class="container w-full">
      <!-- Single layout -->
      <figure v-if="layout === 'Single'" class="w-full drop-shadow-xl justify-center">
        <img :src="media[0]" alt="Media" class="mx-auto" />
      </figure>

      <!-- List layout -->
      <div v-else-if="layout === 'List'" class="w-full grid grid-cols-1 gap-2 justify-center">
        <img v-for="(src, i) in media" :key="i" :src="src" :alt="`Media ${i + 1}`" />
      </div>

      <!-- Grid layout -->
      <div v-else-if="layout === 'Grid'" class="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-2 justify-center">
        <img :src="media[0]" alt="Media 1" />
        <img :src="media[1]" alt="Media 2" />
        <div class="aspect-square overflow-hidden col-span-2 hidden lg:block">
          <img :src="media[2]" alt="Media 3" class="object-cover" />
        </div>
        <template v-if="media.length === 5">
          <img :src="media[3]" alt="Media 4" class="lg:hidden" />
          <img :src="media[4]" alt="Media 5" class="lg:hidden" />
        </template>
      </div>

      <!-- Square layout -->
      <div v-else-if="layout === 'Square'" class="w-full">
        <iframe
          v-if="figmaEmbed"
          class="w-full hidden lg:block"
          title="Maquette figma"
          width="800"
          height="450"
          :src="figmaEmbed"
          allowfullscreen
        ></iframe>
        <figure class="aspect-square overflow-hidden justify-center lg:hidden">
          <img :src="media[0]" alt="Media" class="object-cover" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  layout: string
  media: string[]
  figmaEmbed?: string
}>()
</script>
