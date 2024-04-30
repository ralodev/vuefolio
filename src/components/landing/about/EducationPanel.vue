<template>
  <CollapsiblePanel :header="$t('about.education.title')" toggleable>
    <template #icon>
      <EducationIcon class="me-2 h-8 w-8" />
    </template>
    <ul class="space-y-5">
      <li v-for="edu in educationPrograms" :key="edu.id" class="flex flex-col">
        <p class="experience__title source-sans text-xl font-semibold tracking-wide text-gray-800">
          {{ $t(`about.education.list[${edu.id}].title`) }}
        </p>
        <time class="experience__time source-sans text-sm uppercase text-gray-800">
          {{ toFixedDate($t(`about.education.list[${edu.id}].startDate`)) }} -
          {{ toFixedDate($t(`about.education.list[${edu.id}].endDate`)) }}</time
        >

        <p class="experience__company open-sans font-semibold text-gray-700">
          @ {{ $t(`about.education.list[${edu.id}].institution`) }}
        </p>
        <div class="-mx-2 w-full">
          <span
            class="source-sans bg-base-200 mx-2 inline-block min-w-1 rounded-md px-3 py-1 text-xs uppercase"
            v-for="course in edu.courses"
            :key="course"
            >{{ course }}</span
          >
        </div>
        <p class="experience__description">
          {{ $t(`about.education.list[${edu.id}].description`) }}
        </p>
      </li>
    </ul>
  </CollapsiblePanel>
</template>

<script lang="ts" setup>
import CollapsiblePanel from '@/components/CollapsiblePanel.vue'
import EducationIcon from '@/components/icons/EducationIcon.vue'
import en_about from '@/i18n/en/en_about'

const dateOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long'
}
const toFixedDate = (stringDate: string) => {
  const toDate = new Date(stringDate)
  return toDate.toLocaleDateString('en-US', dateOptions)
}
const educationPrograms = en_about.education.list
</script>
