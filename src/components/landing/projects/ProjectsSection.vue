<template>
  <section
    id="projects"
    name="projects"
    class="relative flex min-h-[100vh] w-full items-center justify-center pb-20"
  >
    <div class="custom-shape-divider-top-1713495835">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
      </svg>
    </div>
    <div name="experience-content" class="content z-[2] pt-[20px]">
      <h1 class="section__title">
        {{ $t('projects.title') }}
      </h1>
      <ul class="space-y-16 pb-10 lg:space-y-4">
        <li v-for="project in projects" :key="project.id">
          <ProjectCard
            :name="$t(`projects.list[${project.id}].name`)"
            :techstack="project.techstack"
            :image="project.image"
            :startDate="$t(`projects.list[${project.id}].startDate`)"
            :description="$t(`projects.list[${project.id}].description`)"
            :src="project.src"
            :url="project.url"
          />
        </li>
      </ul>
      <ul class="grid gap-10 md:grid-cols-2">
        <li class="flex" v-for="project in other_projects" :key="project.name">
          <ProjectCardSmall
            :name="$t(`projects.list_secondary[${project.id}].name`)"
            :description="$t(`projects.list_secondary[${project.id}].description`)"
            :src="project.src"
            :techstack="project.techstack"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import en_projects from '@/i18n/en/en_projects'
import ProjectCard from './ProjectCard.vue'
import ProjectCardSmall from './ProjectCardSmall.vue'
const projects = en_projects.list
const other_projects = en_projects.list_secondary
</script>

<style scoped>
.custom-shape-divider-top-1713495835 {
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  filter: drop-shadow(0 4px 2px rgba(0, 0, 0, 0.2));
}

.custom-shape-divider-top-1713495835 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 100px;
}

.custom-shape-divider-top-1713495835 .shape-fill {
  fill: #ececec;
}
</style>
