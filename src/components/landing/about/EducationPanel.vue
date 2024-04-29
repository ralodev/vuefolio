<template>
  <CollapsiblePanel :header="$t('about.education.title')" toggleable>
    <template #icon>
      <svg
        class="my-auto mr-2 h-8 w-8"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
        <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
      </svg>
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
            class="source-sans mx-2 inline-block min-w-1 rounded-md bg-gray-300 px-3 py-1 text-xs uppercase text-gray-800"
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
