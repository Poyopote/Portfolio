<template>
  <div class="project-description flex flex-col justify-center lg:justify-start items-center sm:py-9 sm:px-10 p-2 lg:col-span-3">
    <div class="text-left container relative w-full">
      <h3 v-html="project.title"></h3>
      <div v-html="project.descriptionHtml"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/data/projects'
defineProps<{ project: Project }>()
</script>
