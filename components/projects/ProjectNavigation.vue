<template>
  <nav class="flex flex-wrap justify-center items-center my-12 gap-2 xl:gap-10 w-full sm:w-9/12 md:w-full relative mx-auto">
    <button
      v-for="(project, index) in projects"
      :key="project.id"
      :class="['project-button flex-grow-0 flex-shrink-0 sm:w-48', { active: index === activeIndex }]"
      @click="$emit('change', index)"
    >
      {{ project.buttonTitle }}
    </button>
  </nav>
</template>

<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{
  projects: Project[]
  activeIndex: number
}>()
defineEmits<{ change: [index: number] }>()
</script>
