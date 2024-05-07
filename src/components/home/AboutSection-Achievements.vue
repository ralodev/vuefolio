<template>
  <CollapsiblePanel :header="$t('about.achievements.title')" class="mt-5">
    <template>
      <TrophyIcon class="h-8 w-8" />
    </template>
    <ul class="space-y-10">
      <li v-for="achievement in achievements" :key="achievement.title" class="mx-auto max-w-[80ch]">
        <p class="source-sans text-xl font-semibold tracking-wide text-gray-800">
          {{ achievement.title }}
        </p>
        <div
          class="relative w-full ps-5 transition-all duration-500 before:absolute before:bottom-0 before:left-0 before:top-[5px] before:w-1 before:bg-base-200 hover:bg-base-100"
        >
          <time class="source-sans text-sm uppercase text-gray-800 sm:float-end">
            {{ getDate(achievement.date) }}</time
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
          <p class="font-semibold text-gray-800">
            {{ achievement.awarder }}
          </p>
          <p class="">
            {{ achievement.summary }}
          </p>
        </div>
      </li>
    </ul>
  </CollapsiblePanel>
</template>

<script setup lang="ts">
import CollapsiblePanel from '@/components/CollapsiblePanel.vue'
import TrophyIcon from '@/components/icons/TrophyIcon.vue'
import type { AchievementEntry } from '@/types'
import { useLocalizedDate } from '@/composables/LocalizedDate'
import { useLocalizedData } from '@/composables/LocalizedData'
const { data: achievements } = useLocalizedData<AchievementEntry[]>('about.achievements.list')
const { getDate } = useLocalizedDate()
</script>
