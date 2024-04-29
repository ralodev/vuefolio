<template>
  <CollapsiblePanel :header="$t('about.achievements.title')" toggleable class="mt-5">
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
        <path d="M8 21l8 0" />
        <path d="M12 17l0 4" />
        <path d="M7 4l10 0" />
        <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
        <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      </svg>
    </template>
    <ul class="space-y-10">
      <li v-for="achievement in achievements" :key="achievement.id" class="mx-auto max-w-[80ch]">
        <p class="experience__title source-sans text-xl font-semibold tracking-wide text-gray-800">
          {{ $t(`about.achievements.list[${achievement.id}].title`) }}
        </p>
        <div
          class="relative w-full ps-5 transition-all duration-500 before:absolute before:bottom-0 before:left-0 before:top-[5px] before:w-1 before:bg-gray-300 hover:bg-gray-100"
        >
          <time class="experience__time source-sans float-end text-sm uppercase text-gray-800">
            {{ toFixedDate($t(`about.achievements.list[${achievement.id}].date`)) }}</time
          >
          <a
            v-if="achievement.url"
            class="inline-flex items-center text-sky-900 hover:text-sky-700"
            :href="achievement.url"
            >{{ achievement.url }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline-block"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g fill="currentColor">
                <path d="M15.64 7.025h-3.622v-2h7v7h-2v-3.55l-4.914 4.914l-1.414-1.414z" />
                <path d="M10.982 6.975h-6v12h12v-6h-2v4h-8v-8h4z" />
              </g>
            </svg>
          </a>

          <p class="experience__company font-semibold text-gray-800">
            {{ $t(`about.achievements.list[${achievement.id}].awarder`) }}
          </p>
          <p class="experience__description">
            {{ $t(`about.achievements.list[${achievement.id}].summary`) }}
          </p>
        </div>
      </li>
    </ul>
  </CollapsiblePanel>
</template>

<script setup lang="ts">
import CollapsiblePanel from '@/components/CollapsiblePanel.vue'
import en_about from '@/i18n/en/en_about'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const dateOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long'
}

const toFixedDate = (stringDate: string) => {
  const toDate = new Date(stringDate)
  return toDate.toLocaleDateString(locale.value, dateOptions)
}
const achievements = en_about.achievements.list
</script>
