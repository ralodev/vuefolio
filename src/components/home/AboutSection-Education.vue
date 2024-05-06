<template>
  <CollapsiblePanel :header="$t('about.education.title')" toggleable>
    <template #icon>
      <EducationIcon class="me-2 h-8 w-8" />
    </template>
    <ul class="space-y-5">
      <li v-for="edu in education" :key="edu.title" class="flex flex-col">
        <p class="experience__title source-sans text-xl font-semibold tracking-wide text-gray-800">
          {{ edu.title }}
        </p>
        <time class="experience__time source-sans text-sm uppercase text-gray-800">
          {{ toFixedDate(edu.startDate) }} - {{ toFixedDate(edu.endDate) }}</time
        >

        <p class="experience__company open-sans font-semibold text-gray-700">
          @ {{ edu.institution }}
        </p>
        <div class="-mx-2 w-full">
          <span
            class="source-sans mx-2 inline-block min-w-1 rounded-md bg-base-200 px-3 py-1 text-xs uppercase"
            v-for="course in edu.courses"
            :key="course"
            >{{ course }}</span
          >
        </div>
        <p class="experience__description">
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
import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue'
const { tm, locale } = useI18n()

const education = ref<EducationEntry[]>([])

function loadEducation() {
  education.value = tm('about.education.list')
}

watch(
  () => locale.value,
  () => {
    loadEducation()
  },
  { immediate: true }
)

const dateOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long'
}
const toFixedDate = (stringDate: string) => {
  const toDate = new Date(stringDate)
  return toDate.toLocaleDateString(locale.value, dateOptions)
}
</script>
