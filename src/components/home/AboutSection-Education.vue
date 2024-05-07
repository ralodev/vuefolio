<template>
  <CollapsiblePanel :header="$t('about.education.title')">
    <template>
      <EducationIcon class="me-2 h-8 w-8" />
    </template>
    <ul class="space-y-5">
      <li v-for="edu in education" :key="edu.title" class="flex flex-col">
        <p class="source-sans text-xl font-semibold tracking-wide text-gray-800">
          {{ edu.title }}
        </p>
        <time class="source-sans text-sm uppercase text-gray-800">
          {{ getDate(edu.startDate) }} - {{ getDate(edu.endDate) }}</time
        >

        <p class="open-sans font-semibold text-gray-700">@ {{ edu.institution }}</p>
        <div class="-mx-2 w-full">
          <span
            class="source-sans mx-2 inline-block min-w-1 rounded-md bg-base-200 px-3 py-1 text-xs uppercase"
            v-for="course in edu.courses"
            :key="course"
            >{{ course }}</span
          >
        </div>
        <p class="">
          {{ edu.description }}
        </p>
      </li>
    </ul>
  </CollapsiblePanel>
</template>

<script lang="ts" setup>
import CollapsiblePanel from '@/components/CollapsiblePanel.vue'
import EducationIcon from '@/components/icons/EducationIcon.vue'
import type { EducationEntry } from '@/types'
import { useLocalizedDate } from '@/composables/LocalizedDate'
import { useLocalizedData } from '@/composables/LocalizedData'
const { getDate } = useLocalizedDate()
const { data: education } = useLocalizedData<EducationEntry[]>('about.education.list')
</script>
