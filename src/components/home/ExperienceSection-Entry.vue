<template>
  <li
    class="before: relative pb-8 before:absolute before:left-[-35px] before:top-[6px] before:z-[1] before:h-4 before:w-4 before:rounded-full before:bg-primary-900"
  >
    <article>
      <h1 class="open-sans text-xl font-bold text-primary-900">
        {{ props.position }}
      </h1>
      <time class="gap-2 font-mono text-sm font-semibold text-gray-700 sm:flex sm:text-sm">
        {{ toFixedDate(props.startDate) }} - {{ toFixedDate(props.endDate) }}
        <p>({{ totalTime() }})</p>
      </time>
      <span class="block">
        <component
          :is="props.url == '#' ? 'h2' : 'a'"
          :href="props.url"
          class="source-sans inline-flex items-center gap-x-1 text-base font-semibold sm:text-lg"
          :class="
            props.url == '#' ? 'cursor-default' : 'hover: cursor-pointer hover:text-primary-700'
          "
          target="_blank"
          rel="noopener noreferrer"
        >
          @ {{ props.company }}
          <svg
            v-if="url != '#'"
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
        </component>
      </span>
      <div class="open-sans pt-1 text-sm sm:text-base">
        <p>
          {{ props.description }}
        </p>
        <ul v-if="props.highlights[0] != ''" class="list-inside list-disc">
          <li v-for="highlight in props.highlights" :key="highlight.toString()">
            {{ highlight }}
          </li>
        </ul>
      </div>
    </article>
  </li>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
const props = defineProps({
  position: {
    type: String,
    default: 'Job position'
  },
  url: {
    type: String,
    default: '#'
  },
  startDate: {
    type: String,
    default: 'Start Date'
  },
  endDate: {
    type: String,
    default: ''
  },
  company: {
    type: String,
    default: 'Company Name'
  },
  description: {
    type: String,
    default: 'Description of the job'
  },
  highlights: {
    type: Array<String>,
    default: () => []
  }
})
const totalTime = () => {
  const startDate = new Date(props.startDate)
  const endDate = props.endDate === t('experience.present') ? new Date() : new Date(props.endDate)
  const total_months =
    endDate.getMonth() -
    startDate.getMonth() +
    12 * (endDate.getFullYear() - startDate.getFullYear())
  const months = total_months % 12
  const years = Math.floor(total_months / 12)
  return years == 0
    ? `${months} ${t('experience.month', months)}`
    : `${years} ${t('experience.year', years)}, ${months} ${t('experience.month', months)}`
}

const dateOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short'
}
1
const toFixedDate = (stringDate: string) => {
  if (stringDate === t('experience.present')) return stringDate
  const [year, month] = stringDate.split('-').map(Number)
  const toDate = new Date(year, month - 1)
  return toDate.toLocaleDateString(locale.value, dateOptions)
}
</script>

<style></style>
