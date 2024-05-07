<template>
  <section id="experience" name="experience" class="section-background-color pt-10">
    <div class="text-black">
      <h1 class="section__title">
        {{ $t('experience.title') }}
      </h1>
      <div class="content relative grid gap-4 sm:grid-cols-12">
        <div class="col-span-12 sm:col-span-3">
          <div
            class="before: top-24 text-center before:mx-auto before:mb-5 before:mt-[5px] before:hidden before:h-4 before:w-full before:rounded-lg before:bg-gradient-to-l before:from-primary-900 sm:sticky sm:text-left sm:before:mx-0 sm:before:block"
          >
            <span class="inline-block text-balance pb-2 text-base sm:text-wrap">
              {{ $t('experience.description') }}
            </span>
            <a href="/cv.pdf" title="Download resume" target="_blank">
              <GlassButton title="Download resume" class="mx-auto mb-4">
                <span class="px-2"> {{ $t('experience.download_button') }} </span>
              </GlassButton>
            </a>
          </div>
        </div>
        <div class="relative col-span-12 space-y-6 ps-4 sm:col-span-9">
          <ul
            class="relative col-span-12 ps-4 before:absolute before:-left-3 before:bottom-0 before:top-[5px] before:w-0.5 before:bg-gray-300 sm:col-span-8"
          >
            <ExperienceSectionEntry
              v-for="job in jobList"
              :key="job.position + job.startDate"
              v-bind="job"
            />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import GlassButton from '@/components/GlassButton.vue'
import ExperienceSectionEntry from './ExperienceSection-Entry.vue'
import type { JobEntry } from '@/types'
import { useLocalizedData } from '@/composables/LocalizedData'

const { data: jobList } = useLocalizedData<JobEntry[]>('experience.list')
</script>

<style scoped>
#experience {
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 80ch;
  align-items: center;
}
</style>
