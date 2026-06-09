<template>
  <section id="projects-section" class="in-the-dark pb-7 lg:min-h-[1000px]">
    <article class="w-full text-center pt-20 relative z-10 in-the-dark">
      <h2>Projets <CursorArrowRaysIcon class="h-8 w-8 inline-block" /></h2>
      <ProjectsProjectNavigation
        :projects="projects"
        :active-index="activeIndex"
        @change="activeIndex = $event"
      />
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-y-8 md:gap-4 w-full lg:w-10/12 xl:w-9/12 mx-auto bg-primary text-customWhite">
        <ProjectsProjectDescription :project="activeProject" />
        <ProjectsProjectLayout
          :layout="activeProject.layout"
          :media="activeProject.media"
          :figma-embed="activeProject.figmaEmbed"
        />
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { CursorArrowRaysIcon } from '@heroicons/vue/24/solid'
import projectsData from '~/data/projects'

const activeIndex = ref(0)
const projects = projectsData
const activeProject = computed(() => projects[activeIndex.value])
</script>
